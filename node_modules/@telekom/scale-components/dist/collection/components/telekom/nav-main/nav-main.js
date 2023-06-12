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
import { Component, Prop, h, Element, Host } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../../utils/status-note';
export class NavMain {
  constructor() {
    // DEPRECATED - megaMenuVisible should replace isMegaMenuVisible
    this.isMegaMenuVisible = false;
    /** (optional) if this mega-menu is visible */
    this.megaMenuVisible = false;
    /** (optional) href value */
    this.href = 'javascript:void(0);';
    /** (optional) target value */
    this.target = '_self';
  }
  componentWillLoad() {
    this.hasPopup =
      this.popup || !!this.hostElement.querySelector('app-mega-menu');
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isMegaMenuVisible !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isMegaMenuVisible" is deprecated. Please use the "megaMenuVisible" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
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
    return (h(Host, null,
      h("li", { class: this.getCssClassMap() },
        h("a", { class: "main-navigation__item-link", href: this.href, target: this.target || '_self', "aria-current": this.active || this.isActive ? 'true' : 'false', "aria-haspopup": this.hasPopup ? 'true' : 'false', onClick: this.clickLink, id: this.innerId },
          h("span", { class: "main-navigation__item-link-text" }, this.name),
          (this.active || this.isActive) && (h("span", { class: "sr-only" }, "active"))),
        h("slot", null))));
  }
  getCssClassMap() {
    return classNames('main-navigation__item', (this.megaMenuVisible || this.isMegaMenuVisible) && 'mega-menu--visible', (this.active || this.isActive) && 'selected');
  }
  static get is() { return "scale-nav-main"; }
  static get originalStyleUrls() { return {
    "$": ["./nav-main.css"]
  }; }
  static get styleUrls() { return {
    "$": ["nav-main.css"]
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
        "text": "(optional) if this item is active"
      },
      "attribute": "active",
      "reflect": false
    },
    "popup": {
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
      "attribute": "popup",
      "reflect": false
    },
    "isMegaMenuVisible": {
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
        "text": ""
      },
      "attribute": "is-mega-menu-visible",
      "reflect": false,
      "defaultValue": "false"
    },
    "megaMenuVisible": {
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
        "text": "(optional) if this mega-menu is visible"
      },
      "attribute": "mega-menu-visible",
      "reflect": false,
      "defaultValue": "false"
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
    },
    "name": {
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
        "text": "(optional) name value"
      },
      "attribute": "name",
      "reflect": false
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
        "text": "(optional) target value"
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "innerId": {
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
        "text": "(optional) inner element id"
      },
      "attribute": "inner-id",
      "reflect": false
    },
    "clickLink": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "click-link",
      "reflect": false
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
