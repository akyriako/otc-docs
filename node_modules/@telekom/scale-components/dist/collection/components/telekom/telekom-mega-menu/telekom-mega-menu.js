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
import { Component, h, Host, Element, State } from '@stencil/core';
export class TelekomMegaMenu {
  constructor() {
    /** :) */
    this.childrenTooMany = false;
  }
  connectedCallback() {
    if (this.hostElement.children.length > 4) {
      this.childrenTooMany = true;
    }
  }
  render() {
    return (h(Host, { class: "scale-telekom-mega-menu", "children-too-many": this.childrenTooMany },
      h("div", { class: "scale-telekom-mega-menu-container" },
        h("slot", null))));
  }
  static get is() { return "scale-telekom-mega-menu"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-mega-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-mega-menu.css"]
  }; }
  static get states() { return {
    "childrenTooMany": {}
  }; }
  static get elementRef() { return "hostElement"; }
}
