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
import { Component, h, Host, Element } from '@stencil/core';
import { Prop } from '@stencil/core/internal';
import cx from 'classnames';
export class TelekomFooter {
  constructor() {
    this.type = 'standard';
  }
  render() {
    return (h(Host, { class: cx('scale-telekom-footer', {
      // slim: this.type === 'minimal',
      }) },
      h("slot", null)));
  }
  static get is() { return "scale-telekom-footer"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-footer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-footer.css"]
  }; }
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
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
