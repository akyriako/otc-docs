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
import { Component, h, State, Element, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
/*
    @see https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html
  */
export class Breadcrumb {
  constructor() {
    this.linksArray = [];
    this.separatorSlot = null;
  }
  componentWillLoad() {
    if (this.linksArray.length === 0) {
      this.setLinksArray();
    }
    this.separatorSlot = this.hostElement.querySelector('[slot="separator"]');
  }
  componentDidLoad() {
    const observer = new MutationObserver(() => {
      this.setLinksArray();
    });
    observer.observe(this.hostElement, {
      attributes: false,
      childList: true,
      subtree: true,
    });
    this.mo = observer;
  }
  disconnectedCallback() {
    if (this.mo) {
      this.mo.disconnect();
    }
  }
  setLinksArray() {
    this.linksArray = Array.from(this.hostElement.children).filter((element) => element.slot === '');
  }
  render() {
    const isLast = (index) => index === this.linksArray.length - 1;
    // Set aria-current="page" to the last item if it's a link
    const getCurrentAttr = (index) => isLast(index) === true ? { 'aria-current': 'page' } : undefined;
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("nav", { "aria-label": "Breadcrumb", class: this.getCssClassMap(), part: "base" },
        h("ol", { class: "breadcrumb__list", part: "list" }, this.linksArray.map((element, index) => {
          const separator = this.separatorSlot != null ? (h("span", { class: "breadcrumb__separator", part: "separator", innerHTML: this.separatorSlot.innerHTML })) : (h("span", { class: "breadcrumb__separator", part: "separator" }, this.separator || (h("scale-icon-navigation-right", { size: 12 }))));
          return (h("li", { class: "breadcrumb__list-item", part: "list-item" },
            element.href || element.tagName === 'SCALE-LINK' ? (h("a", Object.assign({ href: element.href, class: classNames(isLast(index) && 'breadcrumb__current', 'breadcrumb__link'), part: classNames(isLast(index) && 'current', 'link') }, getCurrentAttr(index)), element.textContent)) : (h("span", { class: classNames(isLast(index) && 'breadcrumb__current', 'breadcrumb__item'), part: classNames(isLast(index) && 'current', 'item') }, element.textContent)),
            isLast(index) ? null : separator));
        })))));
  }
  getCssClassMap() {
    return classNames('breadcrumb');
  }
  static get is() { return "scale-breadcrumb"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["breadcrumb.css"]
  }; }
  static get styleUrls() { return {
    "$": ["breadcrumb.css"]
  }; }
  static get properties() { return {
    "separator": {
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
      "attribute": "separator",
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
        "text": "(optional) Injected CSS styles"
      },
      "attribute": "styles",
      "reflect": false
    }
  }; }
  static get states() { return {
    "linksArray": {},
    "separatorSlot": {}
  }; }
  static get elementRef() { return "hostElement"; }
}
