/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Component, Element, Event, Host, Method, Prop, Watch, h, State, Listen, } from '@stencil/core';
import { computePosition, offset, flip, shift, arrow } from '@floating-ui/dom';
import { isClickOutside } from '../../utils/utils';
import statusNote from '../../utils/status-note';
let id = 0;
export class Tooltip {
  constructor() {
    this.componentId = `tooltip-${++id}`;
    /** (optional) The content of the Tooltip, supporting text only */
    this.content = '';
    /** (optional) Position of the Tooltip around the trigger element */
    this.placement = 'top';
    /** (optional) Disable the tooltip */
    this.disabled = false;
    /** (optional) Tooltip distance from the target element (related to `placement`) */
    this.distance = 10;
    /** (optional) How much of the arrow element is "hidden" */
    this.arrowOffset = -4;
    /** (optional) Padding between the arrow and the edges of the tooltip */
    this.arrowPadding = 8;
    /** (optional) Set the tooltip to opened by default (will still be closed on closing events) */
    this.opened = false;
    /** (optional) Set custom trigger event (hover, focus, click) */
    this.trigger = 'hover focus';
    /** (optional) Switching the flip option of the tooltip on and off */
    this.flip = true;
    this.mouseOverTooltip = false;
    /**
     * @see https://floating-ui.com/docs/tutorial#arrow-middleware
     */
    this.update = async () => {
      if (this.disabled || this.triggerEl == null) {
        return;
      }
      // Position tooltip
      const { x, y, placement, middlewareData } = await computePosition(this.triggerEl, this.tooltipEl, {
        placement: this.placement,
        middleware: [
          offset(this.distance),
          ...(this.flip ? [flip()] : []),
          arrow({ element: this.arrowEl, padding: this.arrowPadding }),
          shift({ crossAxis: true }),
        ],
      });
      Object.assign(this.tooltipEl.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
      // Position arrow
      const { x: arrowX, y: arrowY } = middlewareData.arrow;
      const [side] = placement.split('-');
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[side];
      Object.assign(this.arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: `${this.arrowOffset}px`,
      });
    };
    this.handleBlur = () => {
      if (this.hasTrigger('focus')) {
        this.hideTooltip();
      }
    };
    this.handleClick = () => {
      if (this.hasTrigger('click')) {
        this.opened && !this.hasTrigger('focus')
          ? this.hideTooltip()
          : this.showTooltip();
      }
    };
    this.handleFocus = () => {
      if (this.hasTrigger('focus')) {
        this.showTooltip();
      }
    };
    this.handleKeyDown = (event) => {
      if (this.opened && event.key === 'Escape') {
        event.stopPropagation();
        this.hideTooltip();
      }
    };
    this.handleMouseOver = () => {
      if (this.hasTrigger('hover')) {
        this.showTooltip();
      }
    };
    this.handleMouseOut = () => {
      if (!this.mouseOverTooltip) {
        if (this.hasTrigger('hover')) {
          this.hideTooltip();
        }
      }
    };
    this.handleTooltipMouseOver = () => {
      this.mouseOverTooltip = true;
    };
    this.handleTooltipBlur = () => {
      this.mouseOverTooltip = false;
      this.handleMouseOut();
    };
    this.hasTrigger = (triggerType) => {
      const triggers = this.trigger.split(' ');
      return triggers.includes(triggerType);
    };
  }
  handleOpenChange() {
    this.opened ? this.showTooltip() : this.hideTooltip();
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: 'beta' });
    if (this.hostElement.hasAttribute('open')) {
      statusNote({
        tag: 'deprecated',
        message: 'The `open` prop is deprecated in favor of `opened`',
        source: this.hostElement,
      });
    }
    const children = Array.from(this.hostElement.children).filter((x) => !x.hasAttribute('slot'));
    if (children.length === 0) {
      // If not children found to be used as trigger, warn
      statusNote({
        tag: 'warning',
        message: 'An element is required, if using text, wrap it in a `<span>`',
        type: 'warn',
        source: this.hostElement,
      });
      return;
    }
    this.triggerEl = children[0];
    this.triggerEl.addEventListener('blur', this.handleBlur, true);
    this.triggerEl.addEventListener('click', this.handleClick, true);
    this.triggerEl.addEventListener('focus', this.handleFocus, true);
    this.triggerEl.addEventListener('mouseover', this.handleMouseOver, true);
    this.triggerEl.addEventListener('mouseout', this.handleMouseOut, true);
  }
  disconnectedCallback() {
    this.triggerEl.removeEventListener('blur', this.handleBlur, true);
    this.triggerEl.removeEventListener('click', this.handleClick, true);
    this.triggerEl.removeEventListener('focus', this.handleFocus, true);
    this.triggerEl.removeEventListener('mouseover', this.handleMouseOver, true);
    this.triggerEl.removeEventListener('mouseout', this.handleMouseOut, true);
  }
  handleOutsideClick(event) {
    if (isClickOutside(event, this.hostElement)) {
      this.hideTooltip();
    }
  }
  componentDidUpdate() {
    this.update();
    if (this.opened) {
      this.showTooltip();
    }
  }
  componentDidRender() {
    this.update();
  }
  async showTooltip() {
    if (this.opened) {
      return;
    }
    const scaleShow = this.tooltipBeforeShow.emit();
    if (scaleShow.defaultPrevented) {
      this.opened = false;
      return;
    }
    this.opened = true;
    this.update();
  }
  async hideTooltip() {
    if (!this.opened) {
      return;
    }
    const tooltipBeforeHide = this.tooltipBeforeHide.emit();
    if (tooltipBeforeHide.defaultPrevented) {
      this.opened = true;
      return;
    }
    this.opened = false;
    this.update();
  }
  render() {
    return (h(Host, { onKeyDown: this.handleKeyDown },
      this.styles && h("style", null, this.styles),
      h("span", { part: "trigger", "aria-describedby": this.componentId },
        h("slot", null)),
      !this.disabled && (h("div", { part: "tooltip", role: "tooltip", "aria-hidden": this.opened ? 'false' : 'true', ref: (el) => (this.tooltipEl = el), id: this.componentId, onMouseOver: this.handleTooltipMouseOver, onMouseLeave: this.handleTooltipBlur },
        h("slot", { name: "content" }, this.content),
        h("div", { "aria-hidden": "true", part: "arrow", ref: (el) => (this.arrowEl = el) })))));
  }
  static get is() { return "scale-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tooltip.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tooltip.css"]
  }; }
  static get properties() { return {
    "content": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) The content of the Tooltip, supporting text only"
      },
      "attribute": "content",
      "reflect": false,
      "defaultValue": "''"
    },
    "placement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
        "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Position of the Tooltip around the trigger element"
      },
      "attribute": "placement",
      "reflect": false,
      "defaultValue": "'top'"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Disable the tooltip"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "distance": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Tooltip distance from the target element (related to `placement`)"
      },
      "attribute": "distance",
      "reflect": false,
      "defaultValue": "10"
    },
    "arrowOffset": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) How much of the arrow element is \"hidden\""
      },
      "attribute": "arrow-offset",
      "reflect": false,
      "defaultValue": "-4"
    },
    "arrowPadding": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Padding between the arrow and the edges of the tooltip"
      },
      "attribute": "arrow-padding",
      "reflect": false,
      "defaultValue": "8"
    },
    "opened": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set the tooltip to opened by default (will still be closed on closing events)"
      },
      "attribute": "opened",
      "reflect": true,
      "defaultValue": "false"
    },
    "trigger": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set custom trigger event (hover, focus, click)"
      },
      "attribute": "trigger",
      "reflect": false,
      "defaultValue": "'hover focus'"
    },
    "flip": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Switching the flip option of the tooltip on and off"
      },
      "attribute": "flip",
      "reflect": false,
      "defaultValue": "true"
    },
    "styles": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Injected CSS styles"
      },
      "attribute": "styles",
      "reflect": false
    }
  }; }
  static get states() { return {
    "mouseOverTooltip": {}
  }; }
  static get events() { return [{
      "method": "tooltipBeforeShow",
      "name": "scale-before-show",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "tooltipShow",
      "name": "scale-show",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "tooltipBeforeHide",
      "name": "scale-before-hide",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "tooltipHide",
      "name": "scale-hide",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "showTooltip": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "hideTooltip": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "opened",
      "methodName": "handleOpenChange"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleOutsideClick",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
