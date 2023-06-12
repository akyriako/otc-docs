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
import { Component, h, Prop, Host, Element, Watch } from '@stencil/core';
import classNames from 'classnames';
export class SidebarNavCollapsible {
  constructor() {
    /** The parent wrapper */
    this.tag = 'li';
    /** The URL where the link should point to */
    this.href = '#';
    /** Label and icon get the active color */
    this.active = false;
    /** Bold label and icon */
    this.bold = false;
    /** Used normally for third level items */
    this.condensed = false;
    this.handleClick = (event) => {
      event.preventDefault();
      this.expanded = !this.expanded;
    };
    /**
     * Simulate a <button> allowing using the Space key for toggling the menu.
     */
    this.handleKeydown = (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey) {
        return;
      }
      if (event.defaultPrevented) {
        return;
      }
      if (event.code === 'Space') {
        this.expanded = !this.expanded;
      }
    };
  }
  nestingLevelChanged(newValue) {
    if (newValue === 1) {
      this.bold = true;
    }
  }
  render() {
    const Tag = this.tag;
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h(Tag, { part: this.getBasePartMap(), class: this.getCssClassMap(), role: "listitem" },
        h("div", { class: "sidebar-nav-collapsible__wrapper", part: "wrapper" },
          h("a", { href: this.href, class: "sidebar-nav-collapsible__button", onClick: this.handleClick, onKeyDown: this.handleKeydown, role: "button", "aria-expanded": this.expanded ? 'true' : 'false', part: classNames('button', this.active && 'button-active') },
            this.label,
            h("scale-icon-navigation-collapse-down", { class: "sidebar-nav-collapsible__icon", selected: this.bold, size: 16, part: "icon" }))),
        h("ul", { hidden: !this.expanded, class: "sidebar-nav-collapsible__list", part: "list" },
          h("slot", null)))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'sidebar-nav-collapsible';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classNames(component, this.condensed && `${prefix}condensed`, this.active && `${prefix}active`);
  }
  static get is() { return "scale-sidebar-nav-collapsible"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sidebar-nav-collapsible.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sidebar-nav-collapsible.css"]
  }; }
  static get properties() { return {
    "tag": {
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
        "text": "The parent wrapper"
      },
      "attribute": "tag",
      "reflect": false,
      "defaultValue": "'li'"
    },
    "label": {
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
        "text": "The text for the button"
      },
      "attribute": "label",
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The URL where the link should point to"
      },
      "attribute": "href",
      "reflect": false,
      "defaultValue": "'#'"
    },
    "expanded": {
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
        "text": "Set this to `true` to expand"
      },
      "attribute": "expanded",
      "reflect": true
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
        "text": "Label and icon get the active color"
      },
      "attribute": "active",
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
        "text": "Bold label and icon"
      },
      "attribute": "bold",
      "reflect": false,
      "defaultValue": "false"
    },
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
        "text": "Used normally for third level items"
      },
      "attribute": "condensed",
      "reflect": false,
      "defaultValue": "false"
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
    }]; }
}
