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
import { Component, Element, h, Prop } from '@stencil/core';
import statusNote from '../../../utils/status-note';
export class MegaMenu {
  constructor() {
    this.navigation = [];
  }
  componentWillLoad() {
    this.hasCustomBody = !!this.hostElement.querySelector('[slot="custom-body"]');
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isActive !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  render() {
    return (h("div", { class: "mega-menu" },
      h("div", { class: "mega-menu__wrapper" }, this.hasCustomBody ? (h("slot", { name: "custom-body" })) : (h("ul", { class: "mega-menu__container" }, this.navigation.map((child) => (h("li", { class: "mega-menu__row" },
        h("div", { class: "mega-menu__row-title" }, child.name),
        h("ul", null, child.children &&
          child.children.length > 0 &&
          child.children.map((menuItem) => (h("li", null,
            h("a", { class: `mega-menu__row-item ${this.activeRouteId === menuItem.id ? 'active' : ''}`, "aria-current": this.activeRouteId === menuItem.id
                ? 'true'
                : 'false', href: menuItem.href || 'javascript:void(0);', tabIndex: this.active || this.isActive ? 0 : -1, onClick: (event) => {
                this.hide();
                if (typeof menuItem.onClick === 'function') {
                  menuItem.onClick(event);
                }
              }, onKeyDown: (event) => {
                if (['Escape', 'Esc'].includes(event.key)) {
                  this.hide();
                }
              } },
              h("span", null, menuItem.name),
              this.activeRouteId === menuItem.id && (h("span", { class: "sr-only" }, "active")))))))))))))));
  }
  static get is() { return "app-mega-menu"; }
  static get originalStyleUrls() { return {
    "$": ["app-mega-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-mega-menu.css"]
  }; }
  static get properties() { return {
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
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
    "activeRouteId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active-route-id",
      "reflect": false
    },
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
        "text": ""
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
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
