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
import { Component, h, Prop, Host, Method } from '@stencil/core';
/**
 * This is a superset of the default anchor `<a>` element.
 * @part anchor - the native achor element wrapping all contents
 * @part content - a wrapper around the default slot with the underline
 *
 * @slot default - here goes the actual text of the
 * @slot icon - a slot that will not be underlined and which position can be changed
 */
export class Link {
  constructor() {
    /** (optional) Disabled link */
    this.disabled = false;
    /** (optional) Remove the initial line from the text (can also be achieved via `--line-thickness-initial: 0`)
     * Remove the line for every state with `--line-thickness: 0`
     */
    this.omitUnderline = false;
    /** (optional) Chnage icon/content slot order */
    this.iconPosition = 'after';
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  getAnchorProps() {
    const props = {
      href: this.href || null,
      tabIndex: this.disabled ? -1 : this.innerTabindex,
      'aria-disabled': `${this.disabled}`,
      download: this.download || null,
      hreflang: this.hreflang || null,
      ping: this.ping || null,
      referrerpolicy: this.referrerpolicy || null,
      rel: this.rel || null,
      target: this.target || null,
      type: this.type || null,
    };
    return Object.assign({}, props);
  }
  render() {
    return (h(Host, { class: {
        disabled: this.disabled,
        reverse: this.iconPosition === 'before',
        'no-underline': this.omitUnderline,
      } },
      this.styles && h("style", null, this.styles),
      h("a", Object.assign({ part: "anchor", ref: (el) => (this.focusableElement = el) }, this.getAnchorProps()),
        h("div", { part: "content" },
          h("slot", null)),
        h("slot", { name: "icon" }))));
  }
  static get is() { return "scale-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./link.css"]
  }; }
  static get styleUrls() { return {
    "$": ["link.css"]
  }; }
  static get properties() { return {
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
        "text": "(optional) Disabled link"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "omitUnderline": {
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
        "text": "(optional) Remove the initial line from the text (can also be achieved via `--line-thickness-initial: 0`)\nRemove the line for every state with `--line-thickness: 0`"
      },
      "attribute": "omit-underline",
      "reflect": false,
      "defaultValue": "false"
    },
    "href": {
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
        "text": "(optional) Link href"
      },
      "attribute": "href",
      "reflect": false
    },
    "download": {
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
        "text": "(optional) Download declaration"
      },
      "attribute": "download",
      "reflect": false
    },
    "iconPosition": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'before' | 'after'",
        "resolved": "\"after\" | \"before\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Chnage icon/content slot order"
      },
      "attribute": "icon-position",
      "reflect": false,
      "defaultValue": "'after'"
    },
    "hreflang": {
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
        "text": "(optional)"
      },
      "attribute": "hreflang",
      "reflect": false
    },
    "ping": {
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
        "text": "(optional)"
      },
      "attribute": "ping",
      "reflect": false
    },
    "referrerpolicy": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ReferrerPolicy",
        "resolved": "\"\" | \"no-referrer\" | \"no-referrer-when-downgrade\" | \"origin\" | \"origin-when-cross-origin\" | \"same-origin\" | \"strict-origin\" | \"strict-origin-when-cross-origin\" | \"unsafe-url\"",
        "references": {
          "ReferrerPolicy": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional)"
      },
      "attribute": "referrerpolicy",
      "reflect": false
    },
    "rel": {
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
        "text": "(optional)"
      },
      "attribute": "rel",
      "reflect": false
    },
    "target": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'_self' | '_blank' | '_parent' | '_top'",
        "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional)"
      },
      "attribute": "target",
      "reflect": false
    },
    "type": {
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
        "text": "(optional)"
      },
      "attribute": "type",
      "reflect": false
    },
    "innerTabindex": {
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
        "text": "(optional) Set `tabindex` in the inner button or link element"
      },
      "attribute": "inner-tabindex",
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
    }
  }; }
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
}
