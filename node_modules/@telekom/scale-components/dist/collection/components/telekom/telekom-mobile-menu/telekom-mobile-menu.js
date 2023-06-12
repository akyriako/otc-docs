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
import { Component, h, Host, Element, Prop, Listen, State, Event, } from '@stencil/core';
function elementDepth(el) {
  let depth = 0;
  while (null !== el.parentElement) {
    el = el.parentElement;
    depth++;
  }
  return depth;
}
export class TelekomMobileMenu {
  constructor() {
    this.backButtonTitle = 'Back';
    this.setLevelAttributeForAllItems = () => {
      const offset = Math.min(...Array.from(this.menuItems).map((x) => elementDepth(x)));
      Array.from(this.menuItems).forEach((item) => {
        const level = elementDepth(item) - offset;
        item.setAttribute('level', String(level));
      });
    };
    this.back = () => {
      Array.from(this.openItems).forEach((element) => {
        if (element.getAttribute('level') === String(+this.currentLevel - 1)) {
          element.setAttribute('active', '');
          // @ts-ignore
          element.open = false;
          return element.removeAttribute('open');
        }
      });
      this.currentLevel = String(+this.currentLevel - 1);
      Array.from(this.menuItems).forEach((element) => {
        element.setAttribute('current-level', this.currentLevel);
      });
    };
  }
  handleSetMenuItemActive(e) {
    this.menuItems.forEach((element) => element.removeAttribute('active'));
    e.target.setAttribute('active', '');
    if (e.target.parentElement.tagName === 'SCALE-TELEKOM-MOBILE-MENU-ITEM') {
      e.target.parentElement.setAttribute('active', '');
    }
  }
  handleSetMenuItemOpen(e) {
    e.target.setAttribute('open', '');
    this.currentLevel = String(+e.target.getAttribute('level') + 1);
    Array.from(this.menuItems).forEach((element) => {
      element.setAttribute('current-level', this.currentLevel);
    });
  }
  connectedCallback() {
    this.setLevelAttributeForAllItems();
    this.currentLevel = this.activeItem
      ? String(+this.activeItem.getAttribute('level'))
      : '0';
    Array.from(this.menuItems).forEach((element) => {
      element.setAttribute('current-level', this.currentLevel);
    });
  }
  componentWillRender() { }
  get menuItems() {
    return this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item');
  }
  get activeItem() {
    return Array.from(this.menuItems).find((element) => 
    // @ts-ignore
    element.hasAttribute('active') || element.active);
  }
  get openItems() {
    return Array.from(this.menuItems).filter((element) => 
    // @ts-ignore
    element.hasAttribute('open') || element.open);
  }
  render() {
    return (h(Host, null,
      h("div", { part: "base" },
        h("nav", { part: "nav" },
          +this.currentLevel > 0 ? (h("button", { part: "back-button", onClick: () => {
              this.back();
            } },
            h("scale-icon-navigation-left", { size: 20 }),
            this.backButtonTitle)) : null,
          h("slot", null)))));
  }
  static get is() { return "scale-telekom-mobile-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-mobile-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-mobile-menu.css"]
  }; }
  static get properties() { return {
    "backButtonTitle": {
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
      "attribute": "back-button-title",
      "reflect": false,
      "defaultValue": "'Back'"
    },
    "appName": {
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
      "attribute": "app-name",
      "reflect": false
    },
    "appNameLink": {
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
      "attribute": "app-name-link",
      "reflect": false
    },
    "appNameClick": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "app-name-click",
      "reflect": false
    }
  }; }
  static get states() { return {
    "currentLevel": {}
  }; }
  static get events() { return [{
      "method": "scaleCloseNavFlyout",
      "name": "scale-close-nav-flyout",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "scale-set-menu-item-active",
      "method": "handleSetMenuItemActive",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "scale-set-menu-item-open",
      "method": "handleSetMenuItemOpen",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
