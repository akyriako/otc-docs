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
import { Component, h, Prop, Host, Element, State } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
export class SidebarNav {
  constructor() {
    /** Set to `true` to make the sidebar toggleable (useful for small screens) */
    this.collapsible = false;
    /** Automatically set `collapsible` based on this media query */
    this.collapsibleMediaQuery = '(max-width: 30em)';
    /** Label for toggle button */
    this.collapsibleLabel = 'Menu';
    this.collapsed = true;
    this.handleMediaQueryChange = (event) => {
      this.collapsible = event.matches;
    };
    this.toggle = () => {
      this.collapsed = !this.collapsed;
    };
  }
  componentDidLoad() {
    this.setNestingLevelOnChildren();
    this.setMatchMedia();
  }
  disconnectedCallback() {
    if (this.mq != null) {
      this.mq.removeListener(this.handleMediaQueryChange);
    }
  }
  componentDidRender() {
    if (this.el.hasAttribute('aria-label')) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelSidebarNav" property!',
        type: 'warn',
        source: this.el,
      });
    }
  }
  /**
   * Set `nesting-level` and `condensed` attributes in
   * <scale-sidebar-nav-collapsible> and <scale-sidebar-nav-item> children,
   * so styling different levels "automatically" is possible.
   */
  setNestingLevelOnChildren() {
    function setNestingLevel(el, level = 1) {
      Array.from(el.children).forEach((child) => {
        if (child.tagName.toUpperCase() === 'SCALE-SIDEBAR-NAV-COLLAPSIBLE') {
          setNestingLevel(child, level + 1);
          if (!child.hasAttribute('nesting-level')) {
            child.setAttribute('nesting-level', String(level));
          }
          if (level === 2 && !child.hasAttribute('condensed')) {
            child.setAttribute('condensed', 'true');
          }
        }
        if (child.tagName.toUpperCase() === 'SCALE-SIDEBAR-NAV-ITEM') {
          if (!child.hasAttribute('nesting-level')) {
            child.setAttribute('nesting-level', String(level));
          }
          if (level === 3 && !child.hasAttribute('condensed')) {
            child.setAttribute('condensed', 'true');
          }
        }
      });
    }
    setNestingLevel(this.el);
  }
  setMatchMedia() {
    if (this.collapsibleMediaQuery) {
      this.mq = window.matchMedia(this.collapsibleMediaQuery);
      // Recent versions of Safari throw with `addEventListener`
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
      this.mq.addListener(this.handleMediaQueryChange);
      this.collapsible = this.mq.matches;
    }
  }
  render() {
    const label = this.ariaLabelSidebarNav
      ? { 'aria-label': this.ariaLabelSidebarNav }
      : {};
    const hidden = this.collapsible ? { hidden: this.collapsed } : {};
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() },
        this.collapsible === true && (h("button", { part: "toggle-button", class: "sidebar-nav__toggle-button", "aria-expanded": this.collapsed ? 'false' : 'true', onClick: this.toggle },
          this.collapsibleLabel,
          h("scale-icon-navigation-collapse-down", { part: "icon", class: "sidebar-nav__icon", size: 16 }))),
        h("nav", Object.assign({ part: "nav" }, label, hidden),
          h("ul", { part: "list", class: "sidebar-nav__list", role: "list" },
            h("slot", null))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'sidebar-nav';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classNames(component, this.collapsible && `${prefix}collapsible`);
  }
  static get is() { return "scale-sidebar-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sidebar-nav.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sidebar-nav.css"]
  }; }
  static get properties() { return {
    "ariaLabelSidebarNav": {
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
        "text": "From mdn: A brief description of the purpose of the navigation,\nomitting the term \"navigation\", as the screen reader will read\nboth the role and the contents of the label."
      },
      "attribute": "aria-label-sidebar-nav",
      "reflect": false
    },
    "collapsible": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Set to `true` to make the sidebar toggleable (useful for small screens)"
      },
      "attribute": "collapsible",
      "reflect": true,
      "defaultValue": "false"
    },
    "collapsibleMediaQuery": {
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
        "text": "Automatically set `collapsible` based on this media query"
      },
      "attribute": "collapsible-media-query",
      "reflect": false,
      "defaultValue": "'(max-width: 30em)'"
    },
    "collapsibleLabel": {
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
        "text": "Label for toggle button"
      },
      "attribute": "collapsible-label",
      "reflect": false,
      "defaultValue": "'Menu'"
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
  static get states() { return {
    "collapsed": {}
  }; }
  static get elementRef() { return "el"; }
}
