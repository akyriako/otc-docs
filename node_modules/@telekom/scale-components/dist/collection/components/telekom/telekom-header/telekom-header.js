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
import { Component, h, Host, Element, Prop, Listen, State, } from '@stencil/core';
import cx from 'classnames';
export class TelekomHeader {
  constructor() {
    this.type = '';
    this.metaNavAriaLabel = 'Meta navigation';
    this.metaNavExternalAriaLabel = 'External meta navigation';
    this.langSwitcherAriaLabel = 'Language switcher';
    this.mainNavAriaLabel = 'Main navigation';
    this.scrolledBack = false;
    this.pageYOffset = 0;
  }
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
    this.scrolledBack =
      this.pageYOffset !== window.pageYOffset && window.pageYOffset <= 0;
    this.pageYOffset = pageYOffset;
  }
  render() {
    return (h(Host, { scrolled: this.type !== 'subtle' && this.scrolled, "scrolled-back": this.type !== 'subtle' && this.scrolledBack },
      h("header", { part: cx('base', this.type, {
          scrolled: this.type !== 'subtle' && this.scrolled,
          'scrolled-back': this.type !== 'subtle' && this.scrolledBack,
        }) },
        h("div", { part: "fixed-wrapper" },
          h("div", { part: "container" },
            h("slot", { name: "logo" },
              h("scale-logo", { part: "app-logo", variant: "white", href: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle })),
            h("div", { part: "body" },
              h("div", { part: "top-bar" },
                this.appName ? (h("div", { part: "top-app-name" }, this.appNameLink ? (h("a", { part: "app-name-text", onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : (h("span", { part: "app-name-text" }, this.appName)))) : null,
                h("div", { part: "top-body" },
                  h("nav", { part: "meta-nav-external", "aria-label": this.metaNavExternalAriaLabel },
                    h("slot", { name: "meta-nav-external" })),
                  h("nav", { part: "meta-nav", "aria-label": this.metaNavAriaLabel },
                    h("slot", { name: "meta-nav" })),
                  h("nav", { part: "lang-switcher", "aria-label": this.langSwitcherAriaLabel },
                    h("slot", { name: "lang-switcher" })))),
              h("div", { part: "bottom-bar" },
                this.appName ? (h("div", { part: "bottom-app-name" }, this.appNameLink ? (h("a", { part: "app-name-text", onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : (h("span", { part: "app-name-text" }, this.appName)))) : null,
                h("div", { part: "bottom-body" },
                  h("nav", { part: "main-nav", "aria-label": this.mainNavAriaLabel },
                    h("slot", { name: "main-nav" })),
                  h("slot", { name: "functions" })))))))));
  }
  static get is() { return "scale-telekom-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-header.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-header.css"]
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
      "reflect": true
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
    "logoHref": {
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
      "attribute": "logo-href",
      "reflect": false
    },
    "logoTitle": {
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
      "attribute": "logo-title",
      "reflect": false
    },
    "logoHideTitle": {
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
      "attribute": "logo-hide-title",
      "reflect": false
    },
    "type": {
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
      "attribute": "type",
      "reflect": false,
      "defaultValue": "''"
    },
    "metaNavAriaLabel": {
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
      "attribute": "meta-nav-aria-label",
      "reflect": false,
      "defaultValue": "'Meta navigation'"
    },
    "metaNavExternalAriaLabel": {
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
      "attribute": "meta-nav-external-aria-label",
      "reflect": false,
      "defaultValue": "'External meta navigation'"
    },
    "langSwitcherAriaLabel": {
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
      "attribute": "lang-switcher-aria-label",
      "reflect": false,
      "defaultValue": "'Language switcher'"
    },
    "mainNavAriaLabel": {
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
      "attribute": "main-nav-aria-label",
      "reflect": false,
      "defaultValue": "'Main navigation'"
    }
  }; }
  static get states() { return {
    "scrolled": {},
    "scrolledBack": {},
    "pageYOffset": {}
  }; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "scroll",
      "method": "onScroll",
      "target": "document",
      "capture": false,
      "passive": true
    }]; }
}
