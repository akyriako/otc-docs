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
import { Component, h, Prop, Host, Event } from '@stencil/core';
import { isPseudoClassSupported } from '../../utils/utils';
import classNames from 'classnames';
import { emitEvent } from '../../utils/utils';
let i = 0;
// For chrome that applies :focus upon click, and :focus-visible isn't widely supported
const isFocusVisibleSupported = isPseudoClassSupported(':focus-visible');
export class Switch {
  constructor() {
    /** (optional) Active switch */
    this.checked = false;
    /** (optional) Disabled switch */
    this.disabled = false;
    this.size = 'large';
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'switch-' + i++;
    }
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap() },
        h("label", { id: `${this.inputId}-label`, class: "switch__wrapper" },
          h("input", { type: "checkbox", name: this.name, class: "switch__control", checked: this.checked, disabled: this.disabled, "aria-labelledby": `${this.inputId}-label`, id: this.inputId, onChange: (event) => {
              this.checked = event.target.checked;
              emitEvent(this, 'scaleChange', { value: this.checked });
            } }),
          h("div", { class: "switch__toggle", "aria-hidden": "true" },
            h("div", { class: "switch__thumb" },
              h("scale-icon-action-success", { size: 12, decorative: true, selected: true })),
            h("div", { class: "switch__io-text" },
              h("span", null, this.checked ? 'I' : '0'))),
          h("div", { class: "switch__toggle--overlay", "aria-hidden": "true" }),
          this.label && h("span", { class: "switch__label-text" }, this.label)))));
  }
  getCssClassMap() {
    return classNames('switch', this.checked && 'switch--checked', this.disabled && 'switch--disabled', this.size && `switch--size-${this.size}`, isFocusVisibleSupported && 'switch--focus-visible-supported', !isFocusVisibleSupported && 'switch--focus-visible-not-supported');
  }
  static get is() { return "scale-switch"; }
  static get originalStyleUrls() { return {
    "$": ["./switch.css"]
  }; }
  static get styleUrls() { return {
    "$": ["switch.css"]
  }; }
  static get properties() { return {
    "checked": {
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
        "text": "(optional) Active switch"
      },
      "attribute": "checked",
      "reflect": true,
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
        "text": "(optional) Disabled switch"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
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
        "text": "(optional) Input id"
      },
      "attribute": "input-id",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) switch label"
      },
      "attribute": "label",
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
    "size": {
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
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'large'"
    }
  }; }
  static get events() { return [{
      "method": "scaleChange",
      "name": "scale-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the switch was clicked"
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
}
