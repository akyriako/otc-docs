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
import { Component, Prop, h, Host, Element, State, Listen, Event, Watch, } from '@stencil/core';
import classNames from 'classnames';
import { emitEvent } from '../../utils/utils';
import statusNote from '../../utils/status-note';
export class ToggleGroup {
  constructor() {
    /** toggle button position within group */
    this.position = 0;
    /** number of slotted toggle-buttons */
    this.slottedButtons = 0;
    /** state */
    this.status = [];
    /** (optional) The size of the button */
    this.size = 'regular';
    /** (optional) Button Group background */
    this.background = 'white';
    /** (optional) 100% width */
    this.fullWidth = false;
    /** (optional) If `true`, the button is disabled */
    this.disabled = false;
    /** (optional) If `true`, the group has a border */
    this.hideBorder = false;
    /** (optional) more than one button selected possible */
    this.singleSelect = false;
    /** (optional) aria-label attribute needed for icon-only buttons */
    this.ariaLabelTranslation = `toggle button group with $slottedButtons buttons`;
    /** @deprecated - variant should replace colorScheme */
    this.colorScheme = 'color';
    /** (optional) background variant of a selected toggle-button */
    this.variant = 'color';
  }
  scaleClickHandler(ev) {
    let tempState;
    if (this.singleSelect) {
      if (!ev.detail.selected) {
        tempState = this.status.map((obj) => ev.detail.id === obj.id ? ev.detail : Object.assign({}, obj));
        /* clicked button has now selected state */
      }
      else {
        tempState = this.status.map((obj) => ev.detail.id === obj.id ? ev.detail : Object.assign(Object.assign({}, obj), { selected: false }));
      }
    }
    else {
      tempState = this.status.map((obj) => ev.detail.id === obj.id ? ev.detail : Object.assign({}, obj));
    }
    this.setNewState(tempState);
  }
  handlePropsChange() {
    this.propagatePropsToChildren();
  }
  componentDidLoad() {
    const tempState = [];
    const toggleButtons = this.getAllToggleButtons();
    this.slottedButtons = toggleButtons.length;
    toggleButtons.forEach((toggleButton) => {
      this.position++;
      tempState.push({
        id: toggleButton.getAttribute('toggle-button-id'),
        selected: toggleButton.hasAttribute('selected'),
      });
      toggleButton.setAttribute('position', this.position.toString());
      toggleButton.setAttribute('aria-description-translation', '$position $selected');
    });
    this.propagatePropsToChildren();
    this.position = 0;
    this.status = tempState;
  }
  getAllToggleButtons() {
    return Array.from(this.hostElement.querySelectorAll('scale-toggle-button'));
  }
  /**
   * Keep props, needed in children buttons, in sync
   */
  propagatePropsToChildren() {
    this.getAllToggleButtons().forEach((el) => {
      el.setAttribute('size', this.size);
      el.setAttribute('background', this.background);
      el.setAttribute('disabled', this.disabled && 'disabled');
      /** DEPRECATED */
      // if attribute variant is set it overrides color-scheme
      el.setAttribute('color-scheme', this.variant !== 'color' ? this.variant : this.colorScheme);
      // if attribute color-scheme is set it overrides variant
      el.setAttribute('variant', this.colorScheme !== 'color' ? this.colorScheme : this.variant);
      el.setAttribute('hide-border', this.hideBorder ? 'true' : 'false');
    });
  }
  getAriaLabelTranslation() {
    const filledText = this.ariaLabelTranslation.replace(/\$slottedButtons/g, `${this.slottedButtons}`);
    return filledText;
  }
  componentDidRender() {
    if (this.fullWidth) {
      this.setButtonWidth();
    }
    this.setChildrenCorners();
    if (this.colorScheme !== 'color') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "colorScheme" is deprecated. Please use the "variant" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  setNewState(tempState) {
    const toggleButtons = Array.from(this.hostElement.querySelectorAll('scale-toggle-button'));
    toggleButtons.forEach((button, i) => {
      button.setAttribute('selected', tempState[i].selected ? 'true' : 'false');
    });
    this.status = tempState;
    emitEvent(this, 'scaleChange', this.status);
  }
  setButtonWidth() {
    Array.from(this.hostElement.children).forEach((child) => {
      const button = child.shadowRoot.querySelector('button');
      button.style.width = '100%';
    });
  }
  setChildrenCorners() {
    const children = Array.from(this.hostElement.children);
    if (children.length === 1) {
      // set four border radius when there is only one child
      children[0].setAttribute('radius', 'all');
    }
    else {
      for (let i = 0; i < children.length; i++) {
        if (i === 0) {
          children[i].setAttribute('radius', 'left');
        }
        if (i > 0 && i < children.length - 1) {
          children[i].setAttribute('radius', 'neither');
        }
        if (i === children.length - 1) {
          children[i].setAttribute('radius', 'right');
        }
      }
    }
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap(), part: this.getBasePartMap(), "aria-label": this.getAriaLabelTranslation(), role: "group" },
        h("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : 'toggle-group--';
    return classNames('toggle-group', this.fullWidth && `${prefix}block`, !this.fullWidth && `${prefix}inline`, this.disabled && `${prefix}disabled`);
  }
  static get is() { return "scale-toggle-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["toggle-group.css"]
  }; }
  static get styleUrls() { return {
    "$": ["toggle-group.css"]
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
        "text": "(optional) Button Group background"
      },
      "attribute": "background",
      "reflect": false,
      "defaultValue": "'white'"
    },
    "fullWidth": {
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
        "text": "(optional) 100% width"
      },
      "attribute": "full-width",
      "reflect": false,
      "defaultValue": "false"
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
    "hideBorder": {
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
        "text": "(optional) If `true`, the group has a border"
      },
      "attribute": "hide-border",
      "reflect": false,
      "defaultValue": "false"
    },
    "singleSelect": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) more than one button selected possible"
      },
      "attribute": "single-select",
      "reflect": false,
      "defaultValue": "false"
    },
    "ariaLabelTranslation": {
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
      "attribute": "aria-label-translation",
      "reflect": false,
      "defaultValue": "`toggle button group with $slottedButtons buttons`"
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
    "status": {}
  }; }
  static get events() { return [{
      "method": "scaleChange",
      "name": "scale-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when button is clicked"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "scaleChangeLegacy",
      "name": "scaleChange",
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
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "background",
      "methodName": "handlePropsChange"
    }, {
      "propName": "disabled",
      "methodName": "handlePropsChange"
    }, {
      "propName": "hideBorder",
      "methodName": "handlePropsChange"
    }, {
      "propName": "size",
      "methodName": "handlePropsChange"
    }, {
      "propName": "variant",
      "methodName": "handlePropsChange"
    }]; }
  static get listeners() { return [{
      "name": "scaleClick",
      "method": "scaleClickHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
