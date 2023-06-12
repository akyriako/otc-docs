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
import { Component, Prop, h, Host, Element, Listen } from '@stencil/core';
import { isClickOutside } from '../../utils/utils';
const MENU_SELECTOR = '[role="menu"]';
const isButtonOrLink = (el) => {
  if (el.tagName.toUpperCase() === 'BUTTON' ||
    el.tagName.toUpperCase() === 'A' ||
    el.getAttribute('role') === 'button') {
    return el;
  }
};
export class MenuFlyout {
  constructor() {
    /** (optional) Determines whether the flyout should close when a menu item is selected */
    this.closeOnSelect = true;
    /** (optional) Set preference for where the menu appears, space permitting */
    this.direction = 'bottom-right';
    this.lists = new Set();
    this.closeAll = () => {
      this.lists.forEach(async (list) => {
        await list.close(); // Wait for `scale-close` event to fire
        list.active = false; // Make sure focus control is right while reopening
      });
    };
    this.toggle = () => {
      const list = this.getListElement();
      if (list.opened) {
        this.closeAll();
        return;
      }
      if (this.direction != null) {
        // Overwrite `direction` in list
        list.direction = this.direction;
      }
      list.trigger = () => this.trigger;
      list.open();
    };
  }
  async handleScaleOpen({ detail }) {
    // Close the previous active list and its parents if
    // - it's not the root and
    // - it's not the one being opened
    // (useful only with "click" interactions)
    const rootList = this.getListElement();
    if (this.activeList &&
      this.activeList.active &&
      this.activeList !== rootList &&
      this.activeList !== detail.list) {
      let list = this.activeList;
      while (list != null && list !== rootList) {
        await list.close(true);
        list = list.parentElement.closest(MENU_SELECTOR);
      }
    }
    this.activeList = detail.list;
  }
  handleScaleSelect({ detail }) {
    if (detail.closeOnSelect === false) {
      return;
    }
    if (this.closeOnSelect) {
      window.requestAnimationFrame(() => {
        this.closeAll();
      });
    }
  }
  handleScaleClose({ detail }) {
    const parent = detail.list != null
      ? detail.list.parentNode.closest(MENU_SELECTOR)
      : null;
    if (parent) {
      window.requestAnimationFrame(() => {
        parent.active = true;
        parent.setFocus();
      });
    }
  }
  handleWindowScroll() {
    this.closeAll();
  }
  handleOutsideClick(event) {
    if (isClickOutside(event, this.hostElement)) {
      this.closeAll();
    }
  }
  handleKeydown(event) {
    if ('Tab' === event.key &&
      !this.hostElement.querySelector('app-navigation-user-menu')) {
      if (this.trigger.tagName === 'SCALE-TELEKOM-NAV-ITEM') {
        this.trigger.firstElementChild.focus();
      }
      this.closeAll();
      return;
    }
  }
  componentDidLoad() {
    const triggerSlot = this.hostElement.querySelector('[slot="trigger"]');
    const tagName = triggerSlot ? triggerSlot.tagName.toUpperCase() : '';
    // TODO a different, more global, solution less dependent on tag names
    // would be great…
    if (triggerSlot && tagName === 'SCALE-BUTTON') {
      this.trigger = triggerSlot.shadowRoot.querySelector('button');
    }
    else if (triggerSlot && tagName === 'SCALE-NAV-ICON') {
      this.trigger = triggerSlot.querySelector('a');
    }
    else {
      this.trigger = triggerSlot;
    }
    this.lists = new Set(Array.from(this.hostElement.querySelectorAll(MENU_SELECTOR)));
    this.setTriggerAttributes();
  }
  setTriggerAttributes() {
    const triggers = Array.from(this.hostElement.querySelectorAll('[role="menuitem"]'))
      .filter((el) => el.querySelector('[slot="sublist"]') != null)
      .concat([isButtonOrLink(this.trigger)])
      .filter((x) => x != null);
    triggers.forEach((el) => {
      el.setAttribute('aria-haspopup', 'true');
      el.setAttribute('aria-expanded', 'false');
    });
  }
  getListElement() {
    // TODO use [role="menu"]?
    return Array.from(this.hostElement.children).find((el) => el.tagName.toUpperCase().startsWith('SCALE-MENU-FLYOUT'));
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { part: "trigger", onClick: this.toggle },
        h("slot", { name: "trigger" })),
      h("slot", null)));
  }
  static get is() { return "scale-menu-flyout"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["menu-flyout.css"]
  }; }
  static get styleUrls() { return {
    "$": ["menu-flyout.css"]
  }; }
  static get properties() { return {
    "closeOnSelect": {
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
        "text": "(optional) Determines whether the flyout should close when a menu item is selected"
      },
      "attribute": "close-on-select",
      "reflect": false,
      "defaultValue": "true"
    },
    "direction": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'bottom-right'\n    | 'bottom-left'\n    | 'top-right'\n    | 'top-left'\n    | 'right'\n    | 'left'",
        "resolved": "\"bottom-left\" | \"bottom-right\" | \"left\" | \"right\" | \"top-left\" | \"top-right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) Set preference for where the menu appears, space permitting"
      },
      "attribute": "direction",
      "reflect": false,
      "defaultValue": "'bottom-right'"
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
        "text": "(optional) Injected styles"
      },
      "attribute": "styles",
      "reflect": false
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "scale-open",
      "method": "handleScaleOpen",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "scale-select",
      "method": "handleScaleSelect",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "scale-close",
      "method": "handleScaleClose",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "scroll",
      "method": "handleWindowScroll",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "click",
      "method": "handleOutsideClick",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "handleKeydown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
