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
import { Component, h, Host, Element, Prop } from '@stencil/core';
import { State } from '@stencil/core/internal';
import cx from 'classnames';
/**
 * Usage example:
 *
 * ```html
 *  <scale-telekom-mega-menu-column>
 *    <scale-icon-home-home slot="icon"></scale-icon-home-home>
 *    <a href="#" slot="heading">My heading</a>
 *    <ul>
 *      <li><a href="#">Link One</a></li>
 *      <li><a href="#">Link Two</a></li>
 *      <li><a href="#">Link Three</a></li>
 *      <li><a href="#">Link Four</a></li>
 *    </ul>
 *  </scale-telekom-mega-menu-column>
 * ```
 */
export class TelekomMegaMenuColumn {
  constructor() {
    this.headingLevel = 2;
    this.headingHasLink = false;
  }
  connectedCallback() {
    if (this.hostElement.querySelector('a[slot="heading"]')) {
      this.headingHasLink = true;
    }
  }
  render() {
    return (h(Host, null,
      h("div", { part: cx({
          base: true,
          'heading-has-link': this.headingHasLink,
        }) },
        h("div", { part: "icon", "aria-hidden": "true" },
          h("slot", { name: "icon" })),
        h("div", { part: "body" },
          h("div", { part: "heading", role: "heading", "aria-level": this.headingLevel },
            h("slot", { name: "heading" }),
            h("scale-icon-navigation-right", { part: "icon-arrow-right", size: 11, selected: true })),
          h("slot", null)))));
  }
  static get is() { return "scale-telekom-mega-menu-column"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-mega-menu-column.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-mega-menu-column.css"]
  }; }
  static get properties() { return {
    "headingLevel": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "heading-level",
      "reflect": false,
      "defaultValue": "2"
    }
  }; }
  static get states() { return {
    "headingHasLink": {}
  }; }
  static get elementRef() { return "hostElement"; }
}
