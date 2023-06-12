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
export class Card {
  constructor() {
    /** (optional) Link card */
    this.to = '';
    /** (optional) Label of the card */
    this.label = '';
    /** (optional) Link card target */
    this.target = '_self';
    /** (optional) Link card rel */
    this.rel = '';
  }
  render() {
    const Tag = !!this.to ? 'a' : 'div';
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: "card-border", part: "border" },
        h(Tag, Object.assign({ class: this.getCssClassMap(), part: classNames('base', !!this.to && 'interactive') }, (!this.to ? { role: 'group' } : {}), (!!this.to ? { href: this.to } : {}), (!!this.target ? { target: this.target } : {}), (!!this.rel ? { rel: this.rel } : {}), (!!this.label ? { ['aria-label']: this.label } : {})),
          h("div", { class: "card__body", part: "body" },
            h("slot", null))))));
  }
  getCssClassMap() {
    return classNames('card', !!this.to && 'card--interactive');
  }
  static get is() { return "scale-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["card.css"]
  }; }
  static get properties() { return {
    "to": {
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
        "text": "(optional) Link card"
      },
      "attribute": "to",
      "reflect": false,
      "defaultValue": "''"
    },
    "label": {
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
        "text": "(optional) Label of the card"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "target": {
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
        "text": "(optional) Link card target"
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
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
        "text": "(optional) Link card rel"
      },
      "attribute": "rel",
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
}
