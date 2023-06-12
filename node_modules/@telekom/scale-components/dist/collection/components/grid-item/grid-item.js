/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Component, Prop, h, Host, Element } from '@stencil/core';
import { createBreakpointValuedProp, createCssString, } from '../grid/valuesTransformation';
export class GridItem {
  componentWillLoad() {
    const setProps = [
      createBreakpointValuedProp('size', this.size),
      createBreakpointValuedProp('offset', this.offset),
    ].filter((setProp) => setProp);
    const cssStrings = setProps.map((setProp) => createCssString(setProp));
    this.hostElement.setAttribute('style', cssStrings.join(''));
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "scale-grid-item"; }
  static get properties() { return {
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
        "tags": [],
        "text": "(optional) Set size of column"
      },
      "attribute": "size",
      "reflect": false
    },
    "offset": {
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
        "text": "(optional) Set starting column"
      },
      "attribute": "offset",
      "reflect": false
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
