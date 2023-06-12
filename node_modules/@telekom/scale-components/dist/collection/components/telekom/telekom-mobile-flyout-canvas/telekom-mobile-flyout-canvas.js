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
import { Component, h, Host, Prop, Event, Element } from '@stencil/core';
import { emitEvent } from '../../../utils/utils';
// TODO I wonder if we need the `mobile-` prefix for the slots if this is a different component from `telekom-header`
// TODO try and find a better name for mobile-bottom slot?
export class TelekomMobileFlyoutCanvas {
  constructor() {
    this.closeButtonLabel = 'Close';
    this.closeButtonTitle = null;
  }
  render() {
    return (h(Host, null,
      h("div", { part: "base" },
        h("div", { part: "header" },
          h("slot", { name: "heading" },
            h("h2", { part: "heading" }, this.appName)),
          h("a", { href: "javascript:void(0)", onClick: (event) => {
              event.preventDefault();
              emitEvent(this, 'scaleCloseNavFlyout', {
                originalEvent: event,
              });
            }, title: this.closeButtonTitle, "aria-label": this.closeButtonLabel, part: "close-button" },
            h("slot", { name: "close-icon" },
              h("scale-icon-action-close", { decorative: true, size: 20 })))),
        h("div", { part: "body" },
          h("slot", { name: "row" },
            h("slot", { name: "mobile-before-main-nav" }),
            h("slot", { name: "mobile-main-nav" }),
            h("slot", { name: "mobile-after-main-nav" }),
            h("div", { part: "meta" },
              h("div", null,
                h("slot", { name: "mobile-meta-nav-external" }),
                h("slot", { name: "mobile-meta-nav" })),
              h("div", null,
                h("slot", { name: "mobile-lang-switcher" }))),
            h("slot", { name: "mobile-bottom" }))))));
  }
  static get is() { return "scale-telekom-mobile-flyout-canvas"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-mobile-flyout-canvas.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-mobile-flyout-canvas.css"]
  }; }
  static get properties() { return {
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
    },
    "closeButtonLabel": {
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
      "attribute": "close-button-label",
      "reflect": false,
      "defaultValue": "'Close'"
    },
    "closeButtonTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "close-button-title",
      "reflect": false,
      "defaultValue": "null"
    }
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
}
