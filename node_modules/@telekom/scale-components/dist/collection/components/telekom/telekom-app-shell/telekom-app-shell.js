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
import { Component, h, Prop, Host, Element } from '@stencil/core';
export class Shell {
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { part: "base" },
        h("slot", { name: "header" }),
        h("main", { part: "content" },
          h("slot", null)),
        h("slot", { name: "footer" }))));
  }
  static get is() { return "scale-telekom-app-shell"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-app-shell.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-app-shell.css"]
  }; }
  static get properties() { return {
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
  static get elementRef() { return "hostElement"; }
}
