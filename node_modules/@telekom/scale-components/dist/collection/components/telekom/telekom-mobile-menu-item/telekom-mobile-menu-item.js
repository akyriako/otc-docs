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
import { Component, h, Host, Element, Prop, Event, Watch } from '@stencil/core';
import cx from 'classnames';
import { emitEvent } from '../../../utils/utils';
export class TelekomMobileMenuItem {
  constructor() {
    this.open = false;
    this.active = false;
    this.level = '0';
    this.currentLevel = '0';
    this.handleClick = (e) => {
      e.stopImmediatePropagation();
      const hasLink = !(e.target.getAttribute('href') || '').includes('javascript:void(0)');
      const hasLinkNoChildren = hasLink && !this.children.length;
      if (hasLinkNoChildren) {
        emitEvent(this, 'scaleCloseNavFlyout', e);
        return emitEvent(this, 'scaleSetMenuItemActive', e.detail);
      }
      const hasLinkAndChildrenAndOpen = hasLink && this.children.length && this.open;
      if (hasLinkAndChildrenAndOpen) {
        emitEvent(this, 'scaleCloseNavFlyout', e);
        return emitEvent(this, 'scaleSetMenuItemActive', e.detail);
      }
      // EITHER hos link and children - ready to expand children without firing the link click
      // OR no link but has children
      e.preventDefault();
      this.toggleChildrenVisibility(true);
      return emitEvent(this, 'scaleSetMenuItemOpen', e.detail);
    };
  }
  openChanged(newValue) {
    this.toggleChildrenVisibility(newValue);
  }
  toggleChildrenVisibility(show) {
    this.children.forEach((element) => {
      show && element.getAttribute('level') === String(+this.level + 1)
        ? element.removeAttribute('hidden')
        : element.setAttribute('hidden', '');
    });
  }
  get children() {
    return this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item');
  }
  get openChildren() {
    return Array.from(this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item')).filter((element) => element.hasAttribute('open') || element.open);
  }
  render() {
    return (h(Host, { onClick: this.handleClick },
      h("nav", { part: cx('base', `level-${this.level}`, `current-level-${this.currentLevel}`, {
          open: this.open,
          active: this.active,
          hidden: !this.open && this.level !== this.currentLevel,
        }) },
        h("div", { part: cx('header', {
            hidden: !!this.openChildren.length,
          }) },
          h("slot", null),
          h("div", { part: "icon-right-container" }, !!this.children.length && !this.open && (h("scale-icon-navigation-right", { size: 20, color: this.active
              ? 'var(--telekom-color-primary-standard)'
              : 'var(--telekom-color-text-and-icon-standard)' })))),
        h("slot", { name: "children" }))));
  }
  static get is() { return "scale-telekom-mobile-menu-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-mobile-menu-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-mobile-menu-item.css"]
  }; }
  static get properties() { return {
    "open": {
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
      "attribute": "open",
      "reflect": false,
      "defaultValue": "false"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    },
    "level": {
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
      "attribute": "level",
      "reflect": false,
      "defaultValue": "'0'"
    },
    "currentLevel": {
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
      "attribute": "current-level",
      "reflect": false,
      "defaultValue": "'0'"
    }
  }; }
  static get events() { return [{
      "method": "scaleSetMenuItemActive",
      "name": "scale-set-menu-item-active",
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
    }, {
      "method": "scaleSetMenuItemOpen",
      "name": "scale-set-menu-item-open",
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
    }, {
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
  static get watchers() { return [{
      "propName": "open",
      "methodName": "openChanged"
    }]; }
}
