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
import { Element, Component, h, Prop, Host, Listen } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
/**
 * @see https://github.com/GoogleChromeLabs/howto-components/blob/master/elements/howto-tabs/howto-tabs.js
 */
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const HOME = 'Home';
const END = 'End';
export class TabNav {
  constructor() {
    /** True for smaller height and font size in tab headers. */
    /** @deprecated - size should replace small */
    this.small = false;
    /** (optional) size  */
    this.size = 'small';
  }
  handleSelect(event) {
    const nextTab = event.target;
    // Act only if it's a direct child
    if (this.getAllEnabledTabs().includes(nextTab)) {
      this.selectTab(nextTab);
    }
  }
  handleKeydown(event) {
    const target = event.target;
    let nextTab;
    if (target.getAttribute('role') !== 'tab') {
      return;
    }
    // Do not handle modifier shortcuts typically used by assistive technology
    if (event.altKey) {
      return;
    }
    switch (event.key) {
      case ARROW_LEFT:
        nextTab = this.getPreviousTab();
        break;
      case ARROW_RIGHT:
        nextTab = this.getNextTab();
        break;
      case HOME:
        nextTab = this.getFirstTab();
        break;
      case END:
        nextTab = this.getLastTab();
        break;
      default:
        return;
    }
    event.preventDefault();
    this.selectTab(nextTab);
  }
  connectedCallback() {
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'tablist');
    }
  }
  componentDidRender() {
    Promise.all([
      customElements.whenDefined('scale-tab-header'),
      customElements.whenDefined('scale-tab-panel'),
    ]).then(() => {
      this.linkPanels();
      this.propagateSizeToTabs();
    });
    if (this.small !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "small" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.el,
      });
    }
  }
  getAllTabs() {
    return Array.from(this.el.querySelectorAll('scale-tab-header'));
  }
  getAllEnabledTabs() {
    return Array.from(this.el.querySelectorAll('scale-tab-header:not([disabled])'));
  }
  getAllPanels() {
    return Array.from(this.el.querySelectorAll('scale-tab-panel'));
  }
  getPreviousTab() {
    const tabs = this.getAllEnabledTabs();
    const index = tabs.findIndex((tab) => tab.selected) - 1;
    return tabs[(index + tabs.length) % tabs.length];
  }
  getNextTab() {
    const tabs = this.getAllEnabledTabs();
    const index = tabs.findIndex((tab) => tab.selected) + 1;
    return tabs[index % tabs.length];
  }
  getFirstTab() {
    const tabs = this.getAllEnabledTabs();
    return tabs[0];
  }
  getLastTab() {
    const tabs = this.getAllEnabledTabs();
    return tabs[tabs.length - 1];
  }
  linkPanels() {
    const tabs = this.getAllEnabledTabs();
    const selectedTab = tabs.find((x) => x.selected) || tabs[0];
    tabs.forEach((tab) => {
      const panel = tab.nextElementSibling;
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', tab.id);
    });
    this.selectTab(selectedTab);
  }
  reset() {
    const tabs = this.getAllEnabledTabs();
    const panels = this.getAllPanels();
    tabs.forEach((tab) => (tab.selected = false));
    panels.forEach((panel) => (panel.hidden = true));
  }
  findPanelForTab(tab) {
    const panelId = tab.getAttribute('aria-controls');
    return this.el.querySelector(`#${panelId}`);
  }
  selectTab(nextTab) {
    const nextPanel = this.findPanelForTab(nextTab);
    this.reset();
    nextPanel.hidden = false;
    nextTab.selected = true;
  }
  /**
   * Sets or removes the `large` prop in `scale-tab-header` and `scale-tab-panel` children.
   */
  propagateSizeToTabs() {
    const action = this.size === 'large' ? 'setAttribute' : 'removeAttribute';
    const tabs = this.getAllTabs();
    const panels = this.getAllPanels();
    [...tabs, ...panels].forEach((child) => child[action]('size', 'large'));
  }
  render() {
    return (h(Host, { class: "scale-tab-nav" },
      this.styles && h("style", null, this.styles),
      h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() },
        h("slot", { name: "tab" }),
        h("slot", { name: "panel" }))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tab-nav';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classNames(component, `${prefix}`);
  }
  static get is() { return "scale-tab-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./tab-nav.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tab-nav.css"]
  }; }
  static get properties() { return {
    "small": {
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
        "tags": [{
            "name": "deprecated",
            "text": "- size should replace small"
          }],
        "text": ""
      },
      "attribute": "small",
      "reflect": false,
      "defaultValue": "false"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'large'",
        "resolved": "\"large\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) size"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'small'"
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
        "text": "(optional) Injected CSS styles"
      },
      "attribute": "styles",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "scale-select",
      "method": "handleSelect",
      "target": undefined,
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
