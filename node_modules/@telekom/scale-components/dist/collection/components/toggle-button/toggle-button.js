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
import { Component, Prop, h, Host, Element, Event, Method, } from '@stencil/core';
import classNames from 'classnames';
import { emitEvent } from '../../utils/utils';
import statusNote from '../../utils/status-note';
var iconSizes;
(function (iconSizes) {
  iconSizes["xs"] = "12";
  iconSizes["small"] = "16";
  iconSizes["regular"] = "22";
  iconSizes["large"] = "24";
})(iconSizes || (iconSizes = {}));
let i = 0;
export class ToggleButton {
  constructor() {
    /** (optional) The size of the button */
    this.size = 'regular';
    /** (optional) Button background */
    this.background = 'white';
    /** @deprecated - variant should replace colorScheme */
    this.colorScheme = 'color';
    /** (optional) background variant of a selected toggle-button */
    this.variant = 'color';
    /** (optional) If `true`, the button is disabled */
    this.disabled = false;
    /** (optional) If `true`, the button is selected */
    this.selected = false;
    /** (optional) Button type */
    this.iconOnly = false;
    /** (optional) Icon position related to the label */
    this.iconPosition = 'before';
    /** (optional) set the border-radius left, right or both */
    this.radius = null;
    /** (optional) translation of 'selected */
    this.ariaLangSelected = 'selected';
    /** (optional) translation of 'deselected */
    this.ariaLangDeselected = 'deselected';
    /** a11y text for getting meaningful value. `$buttonNumber` and `$selected` are template variables and will be replaces by their corresponding properties.  */
    this.ariaDescriptionTranslation = '$selected';
    this.hasScaleIcon = false;
    this.handleClick = (event) => {
      event.preventDefault();
      this.selected = !this.selected;
      this.handleIconShape();
      this.scaleClick.emit({ id: this.toggleButtonId, selected: this.selected });
      emitEvent(this, 'scaleClick', {
        id: this.toggleButtonId,
        selected: this.selected,
      });
    };
    this.handleIconShape = () => {
      if (this.hasScaleIcon) {
        Array.from(this.hostElement.children).forEach((node) => {
          if (node.nodeName.substr(0, 10) === 'SCALE-ICON') {
            if (this.selected) {
              node.setAttribute('selected', 'true');
            }
            else {
              node.removeAttribute('selected');
            }
          }
        });
      }
    };
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  connectedCallback() {
    this.setIconPositionProp();
    this.handleIconShape();
  }
  componentDidLoad() {
    this.handleIconSize();
  }
  componentDidRender() {
    this.handleIconSize();
    if (this.hostElement.hasAttribute('aria-label')) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelToggleButton" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  componentWillLoad() {
    if (this.toggleButtonId == null) {
      this.toggleButtonId = 'toggle-button-' + i++;
    }
  }
  getAriaDescriptionTranslation() {
    const replaceSelected = this.selected
      ? this.ariaLangSelected
      : this.ariaLangDeselected;
    const filledText = this.ariaDescriptionTranslation
      .replace(/\$position/g, `${this.position}`)
      .replace(/\$selected/g, `${replaceSelected}`);
    return filledText;
  }
  handleIconSize() {
    Array.from(this.hostElement.children).forEach((child) => {
      if (child.tagName.substr(0, 10) === 'SCALE-ICON') {
        child.setAttribute('size', iconSizes[this.size]);
      }
    });
  }
  /**
   * Detect whether a child node is a scale icon and contains text.
   * If so, we set `iconPosition` to `after`, if the icon comes after the text.
   */
  setIconPositionProp() {
    const nodes = Array.from(this.hostElement.childNodes).filter((node) => {
      if (node.nodeName.substr(0, 10) === 'SCALE-ICON') {
        this.hasScaleIcon = true;
      }
      // ignore empty text nodes, which are probably due to formatting
      return !(node.nodeType === 3 && node.nodeValue.trim() === '');
    });
    if (!this.iconOnly &&
      nodes &&
      nodes.length &&
      nodes[nodes.length - 1] &&
      nodes[nodes.length - 1].nodeName.substr(0, 10) === 'SCALE-ICON') {
      this.iconPosition = 'after';
    }
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("button", { ref: (el) => (this.focusableElement = el), class: this.getCssClassMap(), id: this.toggleButtonId, onClick: this.handleClick, disabled: this.disabled, type: "button", "aria-label": this.ariaLabelToggleButton, "aria-pressed": this.selected, part: this.getBasePartMap(), "aria-description": this.getAriaDescriptionTranslation() },
        h("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : 'toggle-button--';
    return classNames('toggle-button', this.size && `${prefix}${this.size}`, this.background &&
      `${prefix}${this.background === 'grey' ? 'primary' : 'secondary'}`, !this.iconOnly &&
      this.iconPosition &&
      `toggle-button--icon-${this.iconPosition}`, this.iconOnly && `${prefix}icon-only`, !this.disabled && this.selected && `${prefix}selected`, this.radius && `${prefix}${this.radius}`, this.colorScheme && `${prefix}${this.colorScheme}`, this.variant && `${prefix}${this.variant}`, !this.hideBorder && `${prefix}border`);
  }
  static get is() { return "scale-toggle-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["toggle-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["toggle-button.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'large' | 'regular' | 'small' | 'xs'",
        "resolved": "\"large\" | \"regular\" | \"small\" | \"xs\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) The size of the button"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'regular'"
    },
    "background": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'grey' | 'white'",
        "resolved": "\"grey\" | \"white\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Button background"
      },
      "attribute": "background",
      "reflect": false,
      "defaultValue": "'white'"
    },
    "colorScheme": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'monochrome' | 'color'",
        "resolved": "\"color\" | \"monochrome\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "- variant should replace colorScheme"
          }],
        "text": ""
      },
      "attribute": "color-scheme",
      "reflect": false,
      "defaultValue": "'color'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'monochrome' | 'color'",
        "resolved": "\"color\" | \"monochrome\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) background variant of a selected toggle-button"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'color'"
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
        "text": "(optional) If `true`, the button is disabled"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "selected": {
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
        "text": "(optional) If `true`, the button is selected"
      },
      "attribute": "selected",
      "reflect": false,
      "defaultValue": "false"
    },
    "iconOnly": {
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
        "text": "(optional) Button type"
      },
      "attribute": "icon-only",
      "reflect": false,
      "defaultValue": "false"
    },
    "iconPosition": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'before' | 'after'",
        "resolved": "\"after\" | \"before\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) Icon position related to the label"
      },
      "attribute": "icon-position",
      "reflect": true,
      "defaultValue": "'before'"
    },
    "hideBorder": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "false",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) set the border-radius left, right or both"
      },
      "attribute": "hide-border",
      "reflect": false
    },
    "radius": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'right' | 'both' | 'neither' | null",
        "resolved": "\"both\" | \"left\" | \"neither\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) set the border-radius left, right or both"
      },
      "attribute": "radius",
      "reflect": false,
      "defaultValue": "null"
    },
    "toggleButtonId": {
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
        "text": "(optional) toggle button's id"
      },
      "attribute": "toggle-button-id",
      "reflect": true
    },
    "ariaLabelToggleButton": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) aria-label attribute needed for icon-only buttons"
      },
      "attribute": "aria-label-toggle-button",
      "reflect": false
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
    },
    "position": {
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
        "text": "(optional) position within group"
      },
      "attribute": "position",
      "reflect": false
    },
    "ariaLangSelected": {
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
        "text": "(optional) translation of 'selected"
      },
      "attribute": "aria-lang-selected",
      "reflect": false,
      "defaultValue": "'selected'"
    },
    "ariaLangDeselected": {
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
        "text": "(optional) translation of 'deselected"
      },
      "attribute": "aria-lang-deselected",
      "reflect": false,
      "defaultValue": "'deselected'"
    },
    "ariaDescriptionTranslation": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "a11y text for getting meaningful value. `$buttonNumber` and `$selected` are template variables and will be replaces by their corresponding properties."
      },
      "attribute": "aria-description-translation",
      "reflect": false,
      "defaultValue": "'$selected'"
    }
  }; }
  static get events() { return [{
      "method": "scaleClick",
      "name": "scale-click",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when button is clicked"
      },
      "complexType": {
        "original": "{\n    id: string;\n    selected: boolean;\n  }",
        "resolved": "{ id: string; selected: boolean; }",
        "references": {}
      }
    }, {
      "method": "scaleClickLegacy",
      "name": "scaleClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "{\n    id: string;\n    selected: boolean;\n  }",
        "resolved": "{ id: string; selected: boolean; }",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
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
}
