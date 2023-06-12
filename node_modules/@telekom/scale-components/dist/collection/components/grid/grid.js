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
import { Component, h, Host, Element, Prop } from '@stencil/core';
import { createCssString, createBreakpointValuedProp, } from './valuesTransformation';
export class Grid {
  componentWillLoad() {
    const sizedProps = [
      createBreakpointValuedProp('columns', this.columns),
      createBreakpointValuedProp('gutter-y', this.gutterY),
      createBreakpointValuedProp('gutter-x', this.gutterX),
      createBreakpointValuedProp('spacing', this.spacing),
    ].filter((sizeProp) => sizeProp);
    const sizableCssStrings = sizedProps.map((sizedProp) => createCssString(sizedProp));
    const maxWidthCssStirng = this.maxWidth
      ? `--max-width:${this.maxWidth};`
      : '';
    const styleString = sizableCssStrings.join('') + maxWidthCssStirng;
    this.hostElement.setAttribute('style', styleString);
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "scale-grid"; }
  static get properties() { return {
    "columns": {
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
        "text": "(optional) Set amount of columns in container"
      },
      "attribute": "columns",
      "reflect": false
    },
    "gutterY": {
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
        "text": "(optional) Set gutter between columns"
      },
      "attribute": "gutter-y",
      "reflect": false
    },
    "gutterX": {
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
        "text": "(optioanl) Set gutter between rows"
      },
      "attribute": "gutter-x",
      "reflect": false
    },
    "spacing": {
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
        "text": "(optioanl) Set padding to container"
      },
      "attribute": "spacing",
      "reflect": false
    },
    "maxWidth": {
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
        "text": "(optioanl) Set max-width to contaier"
      },
      "attribute": "max-width",
      "reflect": false
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
