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
/**
 * @see https://github.com/carbon-design-system/carbon-web-components/tree/master/src/components/list
 */
export class List {
  constructor() {
    this.isNested = false;
    /** (optional) Make the list ordered (ol) */
    this.ordered = false;
  }
  orderedChanged(newValue) {
    this.propagatePropsToChildren(newValue);
  }
  componentDidLoad() {
    this.propagatePropsToChildren(this.ordered);
  }
  connectedCallback() {
    this.isNested = this.el.closest('scale-list-item') != null;
    if (this.isNested) {
      this.el.setAttribute('slot', 'nested');
    }
    else {
      this.el.removeAttribute('slot');
    }
  }
  propagatePropsToChildren(ordered) {
    const items = Array.from(this.el.children).filter((child) => child.matches('scale-list-item'));
    items.forEach((item, index) => {
      item.ordered = ordered;
      item.index = index + 1;
    });
  }
  render() {
    const Tag = this.ordered ? 'ol' : 'ul';
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h(Tag, { class: this.getCssClassMap(), part: classNames('base', this.ordered && 'ordered', this.isNested && 'nested') },
        h("slot", null))));
  }
  getCssClassMap() {
    return classNames('list', this.ordered && 'list--type-ordered', this.isNested && 'list--nested');
  }
  static get is() { return "scale-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["list.css"]
  }; }
  static get properties() { return {
    "ordered": {
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
        "text": "(optional) Make the list ordered (ol)"
      },
      "attribute": "ordered",
      "reflect": false,
      "defaultValue": "false"
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
  static get watchers() { return [{
      "propName": "ordered",
      "methodName": "orderedChanged"
    }]; }
}
