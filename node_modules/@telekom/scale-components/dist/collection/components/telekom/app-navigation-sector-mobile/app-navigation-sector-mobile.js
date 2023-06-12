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
import { Component, h, Prop, State, Watch } from '@stencil/core';
export class NavigationSectorMobile {
  constructor() {
    // @ts-ignore
    this.selected = this.navigation
      ? // @ts-ignore
        this.navigation.find(({ id }) => id === this.activeSectorId) ||
          // @ts-ignore
          this.navigation[0]
      : {};
  }
  handleActiveSegment(newValue) {
    this.selected =
      this.navigation.find(({ id }) => id === newValue) || this.navigation[0];
  }
  handleSelected(event, item) {
    this.selected = item;
    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }
  }
  render() {
    return (h("ul", { class: "sector-navigation-mobile" }, (this.navigation || []).map((item) => (h("li", { class: "sector-navigation-mobile__item" },
      h("a", { class: `sector-navigation-mobile__item-link${this.selected.id === item.id
          ? ' sector-navigation-mobile__item-link--selected'
          : ''}`, href: item.href || 'javascript:void(0);', onClick: (event) => this.handleSelected(event, item), onKeyDown: (event) => {
          if (['Escape', 'Esc'].includes(event.key)) {
            this.hide();
          }
        }, "aria-current": this.selected.id === item.id ? 'true' : 'false' },
        item.name,
        this.selected.id === item.id && (h("span", { class: "sr-only" }, "active"))))))));
  }
  static get is() { return "app-navigation-sector-mobile"; }
  static get originalStyleUrls() { return {
    "$": ["app-navigation-sector-mobile.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-navigation-sector-mobile.css"]
  }; }
  static get properties() { return {
    "hide": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => void",
        "resolved": "() => void",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "navigation": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MenuItem[]",
        "resolved": "MenuItem[]",
        "references": {
          "MenuItem": {
            "location": "import",
            "path": "../app-interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "activeSectorId": {
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
      "attribute": "active-sector-id",
      "reflect": false
    }
  }; }
  static get states() { return {
    "selected": {}
  }; }
  static get watchers() { return [{
      "propName": "activeSectorId",
      "methodName": "handleActiveSegment"
    }]; }
}
