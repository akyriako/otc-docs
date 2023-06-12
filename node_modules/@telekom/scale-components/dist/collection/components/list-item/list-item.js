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
/**
 * @todo styles for custom icon (no-marker prop?)
 * @see https://github.com/carbon-design-system/carbon-web-components/tree/master/src/components/list
 */
export class ListItem {
  constructor() {
    /** Whether this is a child of an ordered scale-list, gets set automatically by its parent */
    this.ordered = false;
    /** If `false`, no marker or left padding will be visible */
    this.marker = true;
    this.hasNestedChild = false;
    this.isNested = false;
    this.handleSlotChange = ({ target }) => {
      this.hasNestedChild =
        target.assignedNodes().length > 0;
      this.isNested = this.isNestedCheck();
    };
    this.isNestedCheck = () => {
      return this.el.closest('scale-list[slot="nested"]') != null;
    };
  }
  componentWillLoad() {
    this.isNested = this.isNestedCheck();
  }
  connectedCallback() {
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'listitem');
    }
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap(), "data-index": this.index, part: classNames('base', this.ordered ? 'ordered' : 'unordered', this.isNested && 'nested', !this.marker && 'no-marker') },
        h("slot", null),
        h("div", { class: "list-item__nested-list", part: "nested-list", hidden: !this.hasNestedChild },
          h("slot", { name: "nested", onSlotchange: this.handleSlotChange })))));
  }
  getCssClassMap() {
    const orderType = this.ordered ? 'ordered' : 'unordered';
    return classNames('list-item', this.isNested && 'list-item--nested', `list-item--${orderType}`, !this.marker && 'list-item--no-marker');
  }
  static get is() { return "scale-list-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./list-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["list-item.css"]
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
        "text": "Whether this is a child of an ordered scale-list, gets set automatically by its parent"
      },
      "attribute": "ordered",
      "reflect": false,
      "defaultValue": "false"
    },
    "index": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Index number, useful only for styling the `ordered` type"
      },
      "attribute": "index",
      "reflect": false
    },
    "marker": {
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
        "text": "If `false`, no marker or left padding will be visible"
      },
      "attribute": "marker",
      "reflect": false,
      "defaultValue": "true"
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
    "hasNestedChild": {},
    "isNested": {}
  }; }
  static get elementRef() { return "el"; }
}
