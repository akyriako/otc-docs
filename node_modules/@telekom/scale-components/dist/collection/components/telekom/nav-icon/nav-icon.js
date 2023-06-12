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
import { Component, Prop, Element, h } from '@stencil/core';
import classNames from 'classnames';
import { renderIcon } from '../../../utils/render-icon';
import statusNote from '../../../utils/status-note';
export class NavIcon {
  constructor() {
    /** (optional) href value */
    this.href = 'javascript:void(0);';
    // DEPRECATED - mobileMenuOpen should replace isMobileMenuOpen
    this.isMobileMenuOpen = false;
    this.mobileMenuOpen = false;
    this.badge = false;
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isActive !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: 'warn',
        source: this.host,
      });
    }
    if (this.isMobileMenuOpen !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isMobileMenuOpen" is deprecated. Please use the "mobileMenuOpen" property!',
        type: 'warn',
        source: this.host,
      });
    }
  }
  render() {
    return (h("li", { class: this.getCssClassMap() },
      h("a", { class: "meta-navigation__item-link", ref: this.refMobileMenuToggle ||
          this.refMobileUserMenuToggle ||
          this.refUserMenuToggle, href: this.href, role: this.href === 'javascript:void(0);' ? 'button' : null, onClick: this.clickLink, onKeyDown: (event) => {
          if (!this.refMobileMenuToggle) {
            return;
          }
          if (['Enter', ' ', 'Escape', 'Esc'].includes(event.key)) {
            event.preventDefault();
            this.clickLink(event);
          }
        } },
        this.badge || (this.badgeLabel && this.badge) || this.badgeLabel ? (h("scale-notification-badge", { label: this.badgeLabel, type: "nav-icon" }, renderIcon({
          tag: `scale-icon-${this.icon}`,
          attributes: {
            class: 'meta-navigation__item-link-icon',
            selected: this.active || this.isActive,
          },
        }))) : (renderIcon({
          tag: `scale-icon-${this.icon}`,
          attributes: {
            class: 'meta-navigation__item-link-icon',
            selected: this.active || this.isActive,
          },
        })),
        h("span", { class: "meta-navigation__item-label" },
          h("slot", null)))));
  }
  getCssClassMap() {
    return classNames('meta-navigation__item', (this.active ||
      this.isActive ||
      this.mobileMenuOpen ||
      this.isMobileMenuOpen) &&
      'meta-navigation__item--selected', !!this.refMobileMenuToggle && 'mobile-menu');
  }
  static get is() { return "scale-nav-icon"; }
  static get originalStyleUrls() { return {
    "$": ["./nav-icon.css"]
  }; }
  static get styleUrls() { return {
    "$": ["nav-icon.css"]
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
        "text": "(optional) if this item is active"
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
    },
    "icon": {
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
      "attribute": "icon",
      "reflect": false
    },
    "isMobileMenuOpen": {
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
      "attribute": "is-mobile-menu-open",
      "reflect": false,
      "defaultValue": "false"
    },
    "mobileMenuOpen": {
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
      "attribute": "mobile-menu-open",
      "reflect": false,
      "defaultValue": "false"
    },
    "refMobileMenuToggle": {
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
      "attribute": "ref-mobile-menu-toggle",
      "reflect": false
    },
    "refMobileUserMenuToggle": {
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
      "attribute": "ref-mobile-user-menu-toggle",
      "reflect": false
    },
    "refUserMenuToggle": {
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
      "attribute": "ref-user-menu-toggle",
      "reflect": false
    },
    "badge": {
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
      "attribute": "badge",
      "reflect": false,
      "defaultValue": "false"
    },
    "badgeLabel": {
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
        "text": ""
      },
      "attribute": "badge-label",
      "reflect": false
    }
  }; }
  static get elementRef() { return "host"; }
}
