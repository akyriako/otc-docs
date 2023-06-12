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
import { Component, h, Host, Element, Listen, Prop } from '@stencil/core';
const isDirectChild = (parent, child) => [...parent.children].includes(child);
export class TelekomNavList {
  constructor() {
    this.role = 'menu';
    this.alignment = 'left';
    this.variant = 'main-nav';
  }
  handleScaleExpanded(event) {
    if (event.detail.expanded) {
      this.closeExpandedFlyoutSiblings(event.target);
    }
  }
  closeExpandedFlyoutSiblings(target) {
    const siblingItems = [...this.hostElement.children].filter((x) => !x.contains(target));
    siblingItems.forEach((item) => {
      const flyout = item.querySelector('scale-telekom-nav-flyout');
      if (isDirectChild(item, flyout) && flyout.expanded) {
        flyout.expanded = false;
      }
    });
  }
  connectedCallback() {
    [...this.hostElement.children].forEach((el) => {
      el.setAttribute('variant', this.variant);
    });
  }
  render() {
    return (h(Host, { class: "scale-telekom-nav-list" },
      h("slot", null)));
  }
  static get is() { return "scale-telekom-nav-list"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-nav-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-nav-list.css"]
  }; }
  static get properties() { return {
    "role": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "role",
      "reflect": true,
      "defaultValue": "'menu'"
    },
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'center' | 'right'",
        "resolved": "\"center\" | \"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "alignment",
      "reflect": true,
      "defaultValue": "'left'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'meta-nav-external'\n    | 'meta-nav'\n    | 'lang-switcher'\n    | 'main-nav'\n    | 'functions'",
        "resolved": "\"functions\" | \"lang-switcher\" | \"main-nav\" | \"meta-nav\" | \"meta-nav-external\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "'main-nav'"
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "scale-expanded",
      "method": "handleScaleExpanded",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
