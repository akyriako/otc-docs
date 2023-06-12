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
import { Component, h, Prop, State, Event, Watch, } from '@stencil/core';
import { findSelected, findRootNode } from '../../../utils/menu-utils';
const hasChildren = (item) => Array.isArray(item.children) && item.children.length > 0;
export class MainNavigationMobile {
  constructor() {
    this.selected = undefined;
    this.parent = undefined;
  }
  handleActiveRoute(newValue) {
    this.selected = findSelected(this.navigation, newValue, null).selected;
    this.parent = findSelected(this.navigation, newValue).parent;
  }
  componentWillLoad() {
    this.selected = findSelected(this.navigation, this.activeRouteId, null).selected;
    this.parent = findSelected(this.navigation, this.activeRouteId).parent;
  }
  closeMenuHandler() {
    this.closeMenu.emit();
  }
  handlePrevSelected(event, item) {
    event.preventDefault();
    const selected = findSelected(this.navigation, item.id).parent;
    this.selected = selected;
    this.parent = selected;
  }
  handleSelect(event, item) {
    const { selected, parent } = findSelected(this.navigation, item.id);
    this.selected = selected;
    this.parent = parent;
    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }
    if (!hasChildren(selected)) {
      this.closeMenuHandler();
    }
  }
  childMenuPage() {
    const section = this.selected && hasChildren(this.selected) ? this.selected : this.parent;
    const { selected, parent } = findSelected(this.navigation, this.activeRouteId);
    if (!section) {
      return h("div", null);
    }
    const isActive = (child) => (selected && child.id === selected.id) ||
      (parent && parent.id === child.id);
    return (h("div", { class: "main-navigation-mobile__child-menu" },
      h("a", { class: "main-navigation-mobile__child-menu-current", href: section.href || 'javascript:void(0);', onClick: (event) => {
          this.handlePrevSelected(event, section);
        }, tabIndex: 0, onKeyDown: (event) => {
          if (['Enter', ' '].includes(event.key)) {
            event.preventDefault();
            this.handlePrevSelected(event, section);
            if (!this.selected) {
              // focus first main navigation item to ease tab navigation
              this.mainNavigationWrapper.querySelector('a').focus();
            }
          }
          if (['Escape', 'Esc'].includes(event.key)) {
            this.hide();
          }
        } },
        h("div", { class: "main-navigation-mobile__child-menu-current-item" },
          h("div", { class: "main-navigation-mobile__child-menu-current-wrapper" },
            h("scale-icon-navigation-left", null),
            h("div", null, section.name)))),
      h("ul", { class: "main-navigation-mobile__child-menu-items", ref: (el) => {
          this.childrenWrapper = el;
        } }, section.children.map((child) => (h("li", { class: "main-navigation-mobile__child-menu-item" },
        h("a", { "aria-current": isActive(child) ? 'true' : 'false', "aria-haspopup": hasChildren(child) ? 'true' : 'false', class: `main-navigation-mobile__child-menu-item-link ${isActive(child) ? 'selected' : ''}`, href: child.href || 'javascript:void(0);', tabIndex: 0, onClick: (event) => {
            this.handleSelect(event, child);
          }, onKeyDown: (event) => {
            if (['Enter', ' '].includes(event.key)) {
              this.handleSelect(event, child);
              setTimeout(() => {
                // focus first child menu item link to ease tab navigation
                const firstChildren = this.childrenWrapper.querySelector('a');
                if (firstChildren) {
                  this.childrenWrapper.querySelector('a').focus();
                }
              });
            }
            if (['Escape', 'Esc'].includes(event.key)) {
              this.hide();
            }
          } },
          h("div", { class: "main-navigation-mobile__child-menu-item-wrapper" },
            h("span", null, child.name),
            isActive(child) && h("span", { class: "sr-only" }, "active"),
            hasChildren(child) && (h("scale-icon-navigation-right", null))))))))));
  }
  render() {
    const { selected } = findSelected(this.navigation, this.activeRouteId);
    const rootNode = selected && findRootNode(this.navigation, selected.id);
    const isActive = (itemId) => rootNode && rootNode.id === itemId;
    return (h("div", { class: "main-navigation-mobile" },
      this.childMenuPage(),
      h("ul", { class: "main-navigation-mobile__main-menu", ref: (el) => {
          this.mainNavigationWrapper = el;
        } }, (this.navigation || []).map((item) => (h("li", { class: `main-navigation-mobile__item${isActive(item.id)
          ? ' main-navigation-mobile__item--selected'
          : ''}` },
        h("a", { "aria-current": isActive(item.id) ? 'true' : 'false', "aria-haspopup": hasChildren(item) ? 'true' : 'false', class: `main-navigation-mobile__item-link${isActive(item.id)
            ? ' main-navigation-mobile__item-link--selected'
            : ''}`, href: item.href || 'javascript:void(0);', onClick: (event) => {
            this.handleSelect(event, item);
          }, onKeyDown: (event) => {
            if (['Enter', ' '].includes(event.key)) {
              this.handleSelect(event, item);
              setTimeout(() => {
                // focus first child menu item link to ease tab navigation
                const firstChildren = this.childrenWrapper.querySelector('a');
                if (firstChildren) {
                  this.childrenWrapper.querySelector('a').focus();
                }
              });
            }
            if (['Escape', 'Esc'].includes(event.key)) {
              this.hide();
            }
          }, 
          // hide from tab navigation when on childMenuPage
          tabIndex: this.selected ? -1 : 0 },
          h("div", { class: "main-navigation-mobile__item-wrapper" },
            h("span", null, item.name),
            isActive(item.id) && h("span", { class: "sr-only" }, "active"),
            hasChildren(item) && (h("scale-icon-navigation-right", null))))))))));
  }
  static get is() { return "app-navigation-main-mobile"; }
  static get originalStyleUrls() { return {
    "$": ["app-navigation-main-mobile.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-navigation-main-mobile.css"]
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
    }
  }; }
  static get states() { return {
    "selected": {},
    "parent": {}
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
  static get watchers() { return [{
      "propName": "activeRouteId",
      "methodName": "handleActiveRoute"
    }]; }
}
