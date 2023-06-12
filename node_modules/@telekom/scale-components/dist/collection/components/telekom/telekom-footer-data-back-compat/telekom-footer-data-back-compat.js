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
import { Component, h, Prop } from '@stencil/core';
// import { findRootNode, findSelected } from '../../../utils/menu-utils';
// import { renderIcon } from '../../../utils/render-icon';
const readData = (data) => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  }
  catch (error) {
    parsedData = data;
  }
  return parsedData;
};
export class TelekomFooterDataBackCompat {
  constructor() {
    this.type = 'standard';
    this.footerNavigation = [];
    this.copyright = '© Deutsche Telekom AG';
  }
  render() {
    return (h("scale-telekom-footer", { type: this.type },
      h("scale-telekom-footer-content", null,
        h("span", { slot: "notice" },
          " ",
          this.copyright,
          " "),
        h("ul", { slot: "navigation" }, readData(this.footerNavigation).map(({ name, id, href = 'javascript:void(0);', target = '_self', }) => {
          return (h("li", null,
            h("a", { href: href, id: id, target: target }, name)));
        })))));
  }
  static get is() { return "scale-telekom-footer-data-back-compat"; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'standard' | 'minimal'",
        "resolved": "\"minimal\" | \"standard\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": true,
      "defaultValue": "'standard'"
    },
    "footerNavigation": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "footer-navigation",
      "reflect": false,
      "defaultValue": "[]"
    },
    "copyright": {
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
      "attribute": "copyright",
      "reflect": false,
      "defaultValue": "'\u00A9 Deutsche Telekom AG'"
    }
  }; }
}
