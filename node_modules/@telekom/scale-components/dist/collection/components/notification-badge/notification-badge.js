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
import { Component, Element, h, Host, Prop } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
export class NotificationBadge {
  constructor() {
    /** (optional) Maximal number of characters displayed in the badge */
    this.maxCharacters = 3;
    /** (optional) Setting/Slotcontent in which the badge is used */
    this.type = 'icon';
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: 'beta' });
  }
  getBadgeLabel() {
    if (this.label) {
      if (!isNaN(this.label)) {
        let labelNumber = '' + this.label;
        if (labelNumber.length > this.maxCharacters) {
          const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
          const tier = Math.floor(Math.log10(Number(this.label)) / 3) || 0;
          if (tier > 0) {
            const scaled = Number(this.label) / Math.pow(10, tier * 3);
            labelNumber = scaled.toFixed(1).replace('.0', '') + SI_SYMBOL[tier];
          }
        }
        return labelNumber;
      }
      return this.label;
    }
  }
  getRender() {
    return (h("div", { class: this.getCssClassMap() },
      h("span", { class: "notification-badge__wrapper" },
        h("slot", null),
        h("span", { class: "notification-badge__circle" }, this.getBadgeLabel())),
      h("slot", { name: "after-badge" })));
  }
  render() {
    return (h(Host, null, this.type !== 'nav-icon' ? (h("div", { class: "notification-badge-border", tabIndex: 0, onClick: this.clickHandler }, this.getRender())) : (this.getRender())));
  }
  getCssClassMap() {
    return classNames(`notification-badge`, this.label && `notification-badge--label`, this.type && `notification-badge--${this.type}`);
  }
  static get is() { return "scale-notification-badge"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./notification-badge.css"]
  }; }
  static get styleUrls() { return {
    "$": ["notification-badge.css"]
  }; }
  static get properties() { return {
    "label": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) Text that is displayed in the badge"
      },
      "attribute": "label",
      "reflect": false
    },
    "maxCharacters": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) Maximal number of characters displayed in the badge"
      },
      "attribute": "max-characters",
      "reflect": false,
      "defaultValue": "3"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'icon' | 'text' | 'nav-icon'",
        "resolved": "\"icon\" | \"nav-icon\" | \"text\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) Setting/Slotcontent in which the badge is used"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'icon'"
    },
    "clickHandler": {
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
        "text": "(optional) Handle click on the badge and surroundet slot elements"
      },
      "attribute": "click-handler",
      "reflect": false
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
