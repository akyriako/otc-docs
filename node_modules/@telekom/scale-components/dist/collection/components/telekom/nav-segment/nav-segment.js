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
import { Component, Prop, Element, h } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../../utils/status-note';
export class NavSegment {
  constructor() {
    /** (optional) href value */
    this.href = 'javascript:void(0);';
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isActive !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: 'warn',
        source: this.host,
      });
    }
  }
  render() {
    return (h("li", { class: this.getCssClassMap() },
      h("a", { class: classNames('segment-navigation__item-link', (this.active || this.isActive) && 'active'), href: this.href, onFocus: () => {
          window.scrollTo({ top: 0 });
        }, "aria-current": this.active || this.isActive ? 'true' : 'false' },
        h("slot", null),
        (this.active || this.isActive) && (h("span", { class: "sr-only" }, "active")))));
  }
  getCssClassMap() {
    return classNames('segment-navigation__item');
  }
  static get is() { return "scale-nav-segment"; }
  static get originalStyleUrls() { return {
    "$": ["./nav-segment.css"]
  }; }
  static get styleUrls() { return {
    "$": ["nav-segment.css"]
  }; }
  static get properties() { return {
    "isActive": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) if this item is active"
      },
      "attribute": "is-active",
      "reflect": false
    },
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) href value"
      },
      "attribute": "href",
      "reflect": false,
      "defaultValue": "'javascript:void(0);'"
    }
  }; }
  static get elementRef() { return "host"; }
}
