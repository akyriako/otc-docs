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
import { Component, h, Host, Listen, Element, Prop, State, } from '@stencil/core';
import statusNote from '../../utils/status-note';
export class CheckboxGroup {
  constructor() {
    /** (optional) Input label */
    this.label = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Input value */
    this.value = '';
    this.selectText = 'Select all';
    this.unselectText = 'Unselect all';
  }
  handleCheckboxChange(ev) {
    const el = ev.composedPath()[0];
    const { tagName, checked } = el;
    // make sure the event belongs to a scale checkbox
    if (tagName.toLowerCase() === 'scale-checkbox') {
      if (el !== this.groupNode) {
        this.updateParentCheckboxState();
      }
      else {
        this.updateChildrenCheckboxStates(checked);
        this.updateParentCheckboxState();
      }
    }
  }
  componentDidRender() {
    if (this.status !== '') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.host,
      });
    }
    if (this.host.hasAttribute('aria-label')) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckboxGroup" property!',
        type: 'warn',
        source: this.host,
      });
    }
  }
  getChildNodes() {
    return Array.from(this.host.querySelector('fieldset').querySelectorAll('scale-checkbox'));
  }
  updateChildrenCheckboxStates(checked) {
    const childNodes = this.getChildNodes().filter((node) => !node.disabled);
    childNodes.forEach((node) => {
      if (checked !== undefined) {
        node.checked = checked;
        node.indeterminate = false;
      }
    });
  }
  updateParentCheckboxState() {
    const childNodes = this.getChildNodes();
    const checked = childNodes === null || childNodes === void 0 ? void 0 : childNodes.map((childNode) => childNode.checked);
    const indeterminate = childNodes === null || childNodes === void 0 ? void 0 : childNodes.map((childNode) => childNode.indeterminate);
    const disabled = childNodes === null || childNodes === void 0 ? void 0 : childNodes.map((childNode) => childNode.disabled);
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const someIndeterminate = indeterminate.some(Boolean);
    const allDisabled = disabled.every(Boolean);
    this.checked = allChecked || someChecked;
    this.indeterminate = someIndeterminate || (someChecked && !allChecked);
    this.disabled = allDisabled;
    this.actionText = allChecked ? this.unselectText : this.selectText;
  }
  render() {
    return (h(Host, { class: "checkbox-group" },
      h("scale-checkbox", { ref: (el) => (this.groupNode = el), name: this.name, label: this.label, ariaLabelCheckbox: `${this.ariaLabelCheckboxGroup || this.label} - ${this.actionText}`, helperText: this.helperText, status: this.status, invalid: this.invalid, value: this.value, inputId: this.inputId, checked: this.checked, indeterminate: this.indeterminate, disabled: this.disabled, part: "parent-checkbox" }),
      h("fieldset", { part: "fieldset" },
        h("legend", null, this.ariaLabelCheckboxGroup || this.label),
        h("slot", null))));
  }
  componentDidLoad() {
    this.updateParentCheckboxState();
  }
  static get is() { return "scale-checkbox-group"; }
  static get originalStyleUrls() { return {
    "$": ["./checkbox-group.css"]
  }; }
  static get styleUrls() { return {
    "$": ["checkbox-group.css"]
  }; }
  static get properties() { return {
    "name": {
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
        "text": "(optional) Input name"
      },
      "attribute": "name",
      "reflect": false
    },
    "label": {
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
        "text": "(optional) Input label"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "ariaLabelCheckboxGroup": {
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
        "tags": [{
            "name": "deprecated",
            "text": "- ariaLabelCheckboxGroup should replace ariaLabel"
          }],
        "text": ""
      },
      "attribute": "aria-label-checkbox-group",
      "reflect": false
    },
    "helperText": {
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
        "text": "(optional) Input helper text"
      },
      "attribute": "helper-text",
      "reflect": false
    },
    "status": {
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
        "tags": [{
            "name": "deprecated",
            "text": "- invalid should replace status"
          }],
        "text": ""
      },
      "attribute": "status",
      "reflect": false,
      "defaultValue": "''"
    },
    "invalid": {
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
        "text": "(optional) Input status"
      },
      "attribute": "invalid",
      "reflect": false,
      "defaultValue": "false"
    },
    "value": {
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
        "text": "(optional) Input value"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "inputId": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input checkbox id"
      },
      "attribute": "input-id",
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
    "selectText": {
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
        "text": ""
      },
      "attribute": "select-text",
      "reflect": false,
      "defaultValue": "'Select all'"
    },
    "unselectText": {
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
        "text": ""
      },
      "attribute": "unselect-text",
      "reflect": false,
      "defaultValue": "'Unselect all'"
    }
  }; }
  static get states() { return {
    "checked": {},
    "indeterminate": {},
    "disabled": {}
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "scaleChange",
      "method": "handleCheckboxChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
