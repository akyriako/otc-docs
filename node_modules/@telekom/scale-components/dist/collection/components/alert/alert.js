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
import { Component, Prop, h, Method, Element, Host } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
export class Alert {
  constructor() {
    /** (optional) Alert size */
    this.size = '';
    /** (optional) Alert variant */
    this.variant = '';
    /** (optional) Alert timeout */
    this.timeout = false;
    /** (optional) Alert icon */
    this.icon = '';
    this.defaultTimeout = 2000;
    this.close = () => {
      this.opened = false;
    };
    this.onCloseAlertWithTimeout = () => {
      if (this.timeout !== false) {
        if (typeof this.timeout === 'number') {
          setTimeout(this.close, this.timeout);
        }
        else {
          setTimeout(this.close, this.defaultTimeout);
        }
      }
      else {
        return null;
      }
    };
  }
  componentWillLoad() {
    this.hasSlotClose = !!this.hostElement.querySelector('[slot="close"]');
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, type: 'warn' });
  }
  /** Alert method: open() */
  async open() {
    this.opened = true;
  }
  render() {
    this.onCloseAlertWithTimeout();
    if (!this.opened) {
      return null;
    }
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap() },
        h("div", { class: "alert__body" },
          h("div", { class: "alert__icon" }, this.icon),
          h("div", { class: "alert__content" },
            h("div", { class: "alert__headline" }, this.headline),
            h("slot", null))),
        h("a", { class: "alert__close", onClick: this.close }, this.hasSlotClose ? (h("div", { class: "alert__close-icon" },
          h("slot", { name: "close" }))) : ('x')))));
  }
  getCssClassMap() {
    return classNames('alert', this.size && `alert--size-${this.size}`, this.variant && `alert--variant-${this.variant}`);
  }
  static get is() { return "scale-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./alert.css"]
  }; }
  static get styleUrls() { return {
    "$": ["alert.css"]
  }; }
  static get properties() { return {
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
        "text": "(optional) Alert size"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "''"
    },
    "variant": {
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
        "text": "(optional) Alert variant"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "''"
    },
    "headline": {
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
        "text": "(optional) Alert title"
      },
      "attribute": "headline",
      "reflect": true
    },
    "opened": {
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
        "text": "(optional) Alert opened"
      },
      "attribute": "opened",
      "reflect": true
    },
    "timeout": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "boolean | number",
        "resolved": "boolean | number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Alert timeout"
      },
      "attribute": "timeout",
      "reflect": false,
      "defaultValue": "false"
    },
    "icon": {
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
        "text": "(optional) Alert icon"
      },
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "''"
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
  static get methods() { return {
    "open": {
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
        "text": "Alert method: open()",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
