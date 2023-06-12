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
import { Component, Prop, Method, h, State, Element, Host, } from '@stencil/core';
import classNames from 'classnames';
import { formatDistance, subSeconds } from 'date-fns';
import statusNote from '../../utils/status-note';
export class Toast {
  constructor() {
    /** (optional) Toast size */
    this.size = '';
    /** (optional) Toast variant */
    this.variant = '';
    /** (optional) Toast autohide time */
    this.autoHide = false;
    /** (optional) Animated toast */
    this.animated = true;
    /** (optional) Toast position at the top */
    this.positionTop = 12;
    /** (optional) Toast position right */
    this.positionRight = 12;
    /** (optional) Toast fade duration */
    this.fadeDuration = 500;
    /** (optional) Toast state progress */
    this.progress = 0;
    /** (optional) Toast state height with offset */
    this.toastHeightWithOffset = 0;
    this.hideToast = false;
    this.timerId = null;
    this.close = () => {
      clearInterval(this.timerId);
      this.hideToast = true;
      setTimeout(() => {
        this.timerId = null;
        this.opened = false;
        this.progress = 0;
      }, this.fadeDuration);
    };
    this.getTime = () => {
      const formattedTime = this.time &&
        formatDistance(subSeconds(this.time, 3), new Date(), { addSuffix: true });
      return formattedTime;
    };
    this.setToastTimeout = () => {
      if (this.opened && this.autoHide !== false && !this.timerId) {
        this.timerId = setInterval(() => {
          this.progress += 1 / (this.getAutoHide() / 1000);
          if (this.progress >= 100) {
            this.close();
          }
        }, 10);
      }
    };
    this.transitions = (offset) => `
    @keyframes fadeIn {
      from {
        opacity: 0;
        top: -${offset}px;
      }
      to {
        opacity: 1;
        top: ${this.positionTop}px;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        top: ${this.positionTop}px;
      }
      to {
        opacity: 0;
        top: -${offset}px;
      }
    }
  `;
    this.animationStyle = (offset) => {
      return `
      .toast--show {
        right: ${this.positionRight}px;
        animation: fadeIn ${this.fadeDuration / 1000}s ease-in-out;
        top: ${this.positionTop}px;
        opacity: 1;
      },
      .toast--show {
        right: ${this.positionRight}px;
        animation: fadeOut ${this.fadeDuration / 1000}s ease-in-out;
        top: -${offset}px;
        opacity: 0;
      }
    `;
    };
  }
  connectedCallback() {
    statusNote({ source: this.element, type: 'warn' });
  }
  disconnectedCallback() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
      this.opened = false;
      this.progress = 0;
    }
  }
  /** Toast method: open() */
  async open() {
    this.opened = true;
    this.hideToast = false;
  }
  render() {
    this.setToastTimeout();
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("style", null, this.transitions(this.toastHeightWithOffset)),
      h("style", null, this.animationStyle(this.toastHeightWithOffset)),
      h("div", { class: this.getCssClassMap(), part: this.getBasePartMap() },
        h("div", { part: "header", class: "toast__header" },
          h("slot", { name: "header" }),
          h("small", null, this.getTime()),
          h("a", { onClick: this.close },
            h("span", { "aria-hidden": "true" }, "\u00D7"))),
        this.autoHide && (h("div", { part: "progress", class: "toast__progress", style: { width: `${this.progress}%` } }, "\u00A0")),
        h("div", { part: "body", class: "toast__body" },
          h("slot", null)))));
  }
  getToastHeightWithOffset() {
    const toastHeight = this.element.shadowRoot.querySelector('.toast').scrollHeight;
    this.toastHeightWithOffset = toastHeight + this.positionTop;
  }
  getAutoHide() {
    if (typeof this.autoHide === 'number' ||
      typeof this.autoHide === 'string') {
      return Number(this.autoHide);
    }
    else {
      return 0;
    }
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'toast';
    const prefix = mode === 'basePart' ? '' : `${component}`;
    return classNames(mode === 'basePart' ? 'base' : component, this.size && `${prefix}--size-${this.size}`, this.variant && `${prefix}--variant-${this.variant}`, !!this.opened && `${prefix}--opened`, !!!this.hideToast && `${prefix}--show`, !!this.hideToast && `${prefix}--hide`);
  }
  static get is() { return "scale-toast"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./toast.css"]
  }; }
  static get styleUrls() { return {
    "$": ["toast.css"]
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
        "text": "(optional) Toast size"
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
        "text": "(optional) Toast variant"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "''"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Toast opened"
      },
      "attribute": "opened",
      "reflect": true
    },
    "autoHide": {
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
        "text": "(optional) Toast autohide time"
      },
      "attribute": "auto-hide",
      "reflect": false,
      "defaultValue": "false"
    },
    "animated": {
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
        "text": "(optional) Animated toast"
      },
      "attribute": "animated",
      "reflect": false,
      "defaultValue": "true"
    },
    "time": {
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
        "text": "(optional) Toast time"
      },
      "attribute": "time",
      "reflect": false
    },
    "positionTop": {
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
        "text": "(optional) Toast position at the top"
      },
      "attribute": "position-top",
      "reflect": false,
      "defaultValue": "12"
    },
    "positionRight": {
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
        "text": "(optional) Toast position right"
      },
      "attribute": "position-right",
      "reflect": false,
      "defaultValue": "12"
    },
    "fadeDuration": {
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
        "text": "(optional) Toast fade duration"
      },
      "attribute": "fade-duration",
      "reflect": false,
      "defaultValue": "500"
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
      "reflect": true
    }
  }; }
  static get states() { return {
    "progress": {},
    "toastHeightWithOffset": {}
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
        "text": "Toast method: open()",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "element"; }
}
