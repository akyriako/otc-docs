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
import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
export class MenuFlyoutDivider {
  getCssClassMap() {
    return classNames('menu-flyout-divider');
  }
  render() {
    return (h(Host, { role: "separator" },
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap(), part: "base", "aria-hidden": "true" })));
  }
  static get is() { return "scale-menu-flyout-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["menu-flyout-divider.css"]
  }; }
  static get styleUrls() { return {
    "$": ["menu-flyout-divider.css"]
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
        "text": "(optional) Injected styles"
      },
      "attribute": "styles",
      "reflect": false
    }
  }; }
}
