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
import { Component, Prop, h, Element, Host } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
export class Table {
  constructor() {
    /** (optional) Display sort arrows on/off */
    this.showSort = false;
    /** (optional) Striped Table */
    this.striped = false;
    /** object of the slots in use */
    this.slots = {};
  }
  componentWillLoad() {
    this.hostElement.querySelectorAll('th').forEach((th) => {
      th.insertAdjacentHTML('afterbegin', `
          <span class="scale-sort-indicator" aria-hidden="true">
            <svg viewBox="0 0 16 16">
             <polygon transform="translate(8.242641, 10.242641) rotate(45.000000) translate(-8.242641, -10.242641) " points="5.24264069 7.24264069 11.2426407 7.24264069 5.24264069 13.2426407"/></polygon>
             <polygon transform="translate(8.242641, 6.242641) scale(1, -1) rotate(45.000000) translate(-8.242641, -6.242641) " points="5.24264069 3.24264069 11.2426407 3.24264069 5.24264069 9.24264069"/>
            </svg>
          </span>`);
    });
  }
  componentDidLoad() {
    const table = this.hostElement;
    const progressbar = table.querySelectorAll('scale-progress-bar');
    if (progressbar) {
      progressbar.forEach((el) => {
        el.showStatus = false;
      });
    }
  }
  componentDidRender() {
    if (this.size) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "size" is deprecated. Please use css overwrites for a small version!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  render() {
    return (h(Host, { class: this.getCssClassMap() },
      this.styles && h("style", null, this.styles),
      h("slot", null)));
  }
  getCssClassMap() {
    return classNames('table', this.showSort && 'table--sortable', this.striped && 'table--striped');
  }
  static get is() { return "scale-table"; }
  static get originalStyleUrls() { return {
    "$": ["./table.css"]
  }; }
  static get styleUrls() { return {
    "$": ["table.css"]
  }; }
  static get properties() { return {
    "showSort": {
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
        "text": "(optional) Display sort arrows on/off"
      },
      "attribute": "show-sort",
      "reflect": false,
      "defaultValue": "false"
    },
    "size": {
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
        "tags": [{
            "name": "deprecated",
            "text": "- css overwrite should replace size"
          }],
        "text": ""
      },
      "attribute": "size",
      "reflect": false
    },
    "striped": {
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
        "text": "(optional) Striped Table"
      },
      "attribute": "striped",
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
  static get elementRef() { return "hostElement"; }
}
