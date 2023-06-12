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
export class Divider {
  constructor() {
    /** (optional) Divider vertical */
    this.vertical = false;
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap(), "aria-hidden": "true", part: classNames('base', this.vertical && 'vertical') }, !this.vertical ? (h("hr", { class: "divider__horizontal", part: "rule-horizontal" })) : (h("span", { class: "divider__vertical", part: "rule-vertical" })))));
  }
  getCssClassMap() {
    return classNames('divider', this.vertical && `divider--vertical`);
  }
  static get is() { return "scale-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./divider.css"]
  }; }
  static get styleUrls() { return {
    "$": ["divider.css"]
  }; }
  static get properties() { return {
    "vertical": {
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
        "text": "(optional) Divider vertical"
      },
      "attribute": "vertical",
      "reflect": false,
      "defaultValue": "false"
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
}
