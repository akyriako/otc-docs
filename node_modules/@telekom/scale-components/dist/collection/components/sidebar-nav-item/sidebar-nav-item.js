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
import { Component, h, Prop, Host, Watch, Element } from '@stencil/core';
import classNames from 'classnames';
const SR_ACTIVE_TEXT = ' Zurzeit aktiv';
const isActive = (current) => {
  try {
    return !!JSON.parse(current);
  }
  catch (e) {
    if (typeof current === 'string') {
      return true;
    }
    return !!current;
  }
};
const getScreenReaderText = (current) => {
  let text;
  try {
    text = JSON.parse(current);
  }
  catch (e) {
    text = current;
  }
  return typeof text === 'string' && text.length > 0
    ? ` ${text}`
    : SR_ACTIVE_TEXT;
};
export class SidebarNavItem {
  constructor() {
    /** Used normally for third level items, remove the bottom border */
    this.condensed = false;
    /** Bold text */
    this.bold = false;
    /** Text gets the active color */
    this.active = false;
    /**
     * Mark the child link as "current" with `aria-current=page`.
     * Provide the text hint if needed, default is: "Zurzeit aktiv"
     */
    this.current = null;
  }
  nestingLevelChanged(newValue) {
    if (newValue === 1) {
      this.bold = true;
    }
  }
  currentChanged(newValue) {
    this.handleAriaCurrentInSlottedA(newValue);
    this.syncActiveToCurrent(newValue);
  }
  componentDidLoad() {
    this.handleAriaCurrentInSlottedA(this.current);
    if (this.current) {
      this.syncActiveToCurrent(this.current);
    }
  }
  /**
   * If an item is `current`, it should be `active` as well
   */
  syncActiveToCurrent(newValue) {
    this.active = isActive(newValue);
  }
  /**
   * When `current` is set, this will:
   * - set the aria-current=page attribute on the link
   * - append a text-only hint for screen readers
   * so we end up with something like this:
   * <a href="..." aria-current="page">
   *    Example<span style="...visible to SR only..."> Active link</span>
   * </a>
   * @param current this.current
   */
  handleAriaCurrentInSlottedA(current) {
    const a = this.el.querySelector('a');
    if (this.srOnlyElement != null) {
      a.removeChild(this.srOnlyElement);
      this.srOnlyElement = null;
    }
    if (a != null) {
      a.removeAttribute('aria-current');
    }
    if (isActive(current) && a != null) {
      this.srOnlyElement = this.createScreenReaderOnlySpan();
      a.appendChild(this.srOnlyElement);
      a.setAttribute('aria-current', 'page');
    }
  }
  createScreenReaderOnlySpan() {
    const text = getScreenReaderText(this.current);
    const span = document.createElement('span');
    // .sr-only but inline
    Object.assign(span.style, {
      position: 'absolute',
      left: '-10000px',
      overflow: 'hidden',
    });
    span.textContent = text;
    return span;
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("li", { part: this.getBasePartMap(), class: this.getCssClassMap(), role: "listitem" },
        h("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'sidebar-nav-item';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classNames(component, this.bold && `${prefix}bold`, this.condensed && `${prefix}condensed`, this.active && `${prefix}active`);
  }
  static get is() { return "scale-sidebar-nav-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sidebar-nav-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sidebar-nav-item.css"]
  }; }
  static get properties() { return {
    "condensed": {
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
        "text": "Used normally for third level items, remove the bottom border"
      },
      "attribute": "condensed",
      "reflect": false,
      "defaultValue": "false"
    },
    "bold": {
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
        "text": "Bold text"
      },
      "attribute": "bold",
      "reflect": false,
      "defaultValue": "false"
    },
    "active": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Text gets the active color"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "current": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | null | boolean",
        "resolved": "boolean | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Mark the child link as \"current\" with `aria-current=page`.\nProvide the text hint if needed, default is: \"Zurzeit aktiv\""
      },
      "attribute": "current",
      "reflect": false,
      "defaultValue": "null"
    },
    "nestingLevel": {
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
        "text": "Nesting level within the <scale-sidebar-nav> parent, gets set automatically"
      },
      "attribute": "nesting-level",
      "reflect": false
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
        "text": "(optional) Extra styles"
      },
      "attribute": "styles",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "nestingLevel",
      "methodName": "nestingLevelChanged"
    }, {
      "propName": "current",
      "methodName": "currentChanged"
    }]; }
}
