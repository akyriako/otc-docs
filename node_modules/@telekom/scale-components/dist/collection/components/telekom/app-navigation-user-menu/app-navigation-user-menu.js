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
import { Component, h, Prop, Event, Host, Element, } from '@stencil/core';
import { renderIcon } from '../../../utils/render-icon';
export class AppNavigationUserMenu {
  render() {
    return (h(Host, null,
      h("div", { class: "app-navigation-user-menu" }, this.navigation.map((item) => {
        if (item.type === 'divider') {
          return (h("hr", { class: "app-navigation-user-menu__divider", part: "rule-horizontal" }));
        }
        if (item.type === 'userInfo') {
          return (h("div", { class: "app-navigation-user-menu__user-info" },
            h("div", { class: "app-navigation-user-menu__user-info--name scl-font-variant-heading-4" }, item.name),
            h("div", { class: "app-navigation-user-menu__user-info--email" }, item.email)));
        }
        if (item.type === 'item') {
          return (h("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', tabindex: 0, class: "app-navigation-user-menu__item", onClick: (e) => {
              e.stopImmediatePropagation();
              if (item.onClick) {
                item.onClick(e);
              }
              this.hide();
            }, onKeyDown: (e) => {
              if ([' ', 'Enter'].includes(e.key)) {
                e.stopImmediatePropagation();
                e.preventDefault();
                if (item.onClick) {
                  item.onClick(e);
                }
                this.hide();
              }
            } },
            item.icon &&
              (!item.iconPosition || item.iconPosition === 'prefix')
              ? renderIcon({
                tag: `scale-icon-${item.icon}`,
                attributes: {
                  class: `app-navigation-user-menu__item--icon-prefix`,
                },
              })
              : null,
            item.name,
            item.icon && item.iconPosition === 'suffix'
              ? renderIcon({
                tag: `scale-icon-${item.icon}`,
                attributes: {
                  class: `app-navigation-user-menu__item--icon-suffix`,
                },
              })
              : null));
        }
        if (item.type === 'button') {
          return (h("scale-button", { class: "app-navigation-user-menu__button", onClick: (e) => {
              if (item.onClick) {
                item.onClick(e);
              }
              this.hide();
            }, onKeyDown: (e) => {
              if ([' ', 'Enter'].includes(e.key)) {
                e.stopImmediatePropagation();
                e.preventDefault();
                if (item.onClick) {
                  item.onClick(e);
                }
                this.hide();
              }
            }, href: item.href, variant: item.variant || 'primary' },
            item.icon &&
              (!item.iconPosition || item.iconPosition === 'prefix')
              ? renderIcon({
                tag: `scale-icon-${item.icon}`,
                attributes: {},
              })
              : null,
            item.name,
            item.icon && item.iconPosition === 'suffix'
              ? renderIcon({
                tag: `scale-icon-${item.icon}`,
                attributes: {},
              })
              : null));
        }
      }))));
  }
  static get is() { return "app-navigation-user-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["app-navigation-user-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-navigation-user-menu.css"]
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
      "attribute": "navigation",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "closeMenu",
      "name": "closeMenu",
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
}
