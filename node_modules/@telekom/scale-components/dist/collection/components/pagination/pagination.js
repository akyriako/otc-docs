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
import { Component, Prop, h, Host, Element, Event, Watch, } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
import { emitEvent } from '../../utils/utils';
const name = 'pagination';
export class Pagination {
  /* 6. Lifecycle Events (call order) */
  constructor() {
    /* 2. State Variables (alphabetical) */
    /* 3. Public Properties (alphabetical) */
    /** (optional) Deprecated; hideBorder should replace hideBorders */
    this.hideBorders = false;
    /** (optional) Set to true to hide top and bottom borders */
    this.hideBorder = false;
    /** (optional) Set number of rows/elements to show per page */
    this.pageSize = 10;
    /** (optional) Index of first element to display */
    this.startElement = 0;
    /** (optional) Total number of rows/elements used to calculate page displays */
    this.totalElements = 1;
    /** @deprecated - size should replace small */
    this.small = false;
    /** (optional) translation to 'Go to first page'  */
    this.ariaLabelFirstPage = 'Go to first page';
    /** (optional) translation to 'Go to next page'  */
    this.ariaLabelNextPage = 'Go to next page';
    /** (optional) translation to 'Go to previous page'  */
    this.ariaLabelPreviousPage = 'Go to previous page';
    /** (optional) translation to 'Go to last page'  */
    this.ariaLabelLastPage = 'Go to last page';
    /* 5. Private Properties (alphabetical) */
    /** Calculated width of largest text so buttons don't move while changing pages */
    this.maxWidth = 100;
  }
  componentWillLoad() {
    this.calculateWidth();
  }
  componentWillUpdate() { }
  componentDidRender() {
    if (this.hideBorders !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "hideBorders" is deprecated. Please use the "hideBorder" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.small !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "small" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.size) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "size" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  componentDidLoad() { }
  componentDidUpdate() { }
  disconnectedCallback() { }
  /* 7. Listeners */
  calculateWidth() {
    // calculate max possible width
    this.maxWidth = (this.totalElements.toString().length * 3 + 3) * 9;
  }
  /* 8. Public Methods */
  /* 9. Local Methods */
  goFirstPage() {
    this.startElement = 0;
    this.emitUpdate('FIRST');
  }
  goPreviousPage() {
    // Min to prevent going below 0
    this.startElement -= Math.min(this.pageSize, this.startElement);
    this.emitUpdate('PREVIOUS');
  }
  goNextPage() {
    this.startElement += this.pageSize;
    this.emitUpdate('NEXT');
  }
  goLastPage() {
    const p = this.pageSize;
    // Make sure startElement is multiple of pageSize
    this.startElement = Math.ceil((this.totalElements - p) / p) * p;
    this.emitUpdate('LAST');
  }
  emitUpdate(direction) {
    const data = {
      startElement: this.startElement,
      direction,
    };
    emitEvent(this, 'scalePagination', data);
  }
  /* 10. Render */
  render() {
    const total = this.totalElements;
    const start = this.startElement + 1;
    const end = Math.min(this.startElement + this.pageSize, total);
    const isAtStart = start === 1;
    const isAtEnd = end === total;
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() },
        h("div", { part: "info-responsive", class: `${name}__info-responsive` },
          h("span", null,
            start,
            "-",
            end),
          ' ',
          "/ ",
          total),
        h("div", { class: `${name}__button-wrapper` },
          h("div", { part: "info", class: `${name}__info`, style: { width: `${this.maxWidth}px` } },
            h("span", null,
              start,
              "-",
              end),
            ' ',
            "/ ",
            total),
          h("button", { class: `${name}__first-prompt`, part: "first-prompt", disabled: isAtStart, onClick: () => this.goFirstPage(), "aria-label": this.ariaLabelFirstPage },
            h("svg", { height: "12", viewBox: "0 0 48 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#cacaca" },
              h("path", { d: "M44.5 48.5L21.5 26L44.5 3.5M27.5 48.5L4.5 26L27.5 3.5", "stroke-width": "6", "stroke-linecap": "round" }))),
          h("button", { class: `${name}__prev-prompt`, part: "prev-prompt", disabled: isAtStart, onClick: () => this.goPreviousPage(), "aria-label": this.ariaLabelPreviousPage },
            h("svg", { height: "12", viewBox: "0 0 37 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#cacaca" },
              h("path", { d: "M33 48L6 26L33 4", "stroke-width": "7", "stroke-linecap": "round" }))),
          h("button", { class: `${name}__next-prompt`, part: "next-prompt", disabled: isAtEnd, onClick: () => this.goNextPage(), "aria-label": this.ariaLabelNextPage },
            h("svg", { height: "12", viewBox: "0 0 37 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#cacaca" },
              h("path", { d: "M4 4L31 26L4 48", "stroke-width": "7", "stroke-linecap": "round" }))),
          h("button", { class: `${name}__last-prompt`, part: "last-prompt", disabled: isAtEnd, onClick: () => this.goLastPage(), "aria-label": this.ariaLabelLastPage },
            h("svg", { height: "12", viewBox: "0 0 48 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#cacaca" },
              h("path", { d: "M3.5 3.5L26.5 26L3.5 48.5M20.5 3.5L43.5 26L20.5 48.5", "stroke-width": "6", "stroke-linecap": "round" })))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : `${name}--`;
    return classNames(name, (this.hideBorder || this.hideBorders) && `${prefix}hide-borders`);
  }
  static get is() { return "scale-pagination"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["pagination.css"]
  }; }
  static get styleUrls() { return {
    "$": ["pagination.css"]
  }; }
  static get properties() { return {
    "hideBorders": {
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
        "text": "(optional) Deprecated; hideBorder should replace hideBorders"
      },
      "attribute": "hide-borders",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideBorder": {
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
        "text": "(optional) Set to true to hide top and bottom borders"
      },
      "attribute": "hide-border",
      "reflect": false,
      "defaultValue": "false"
    },
    "pageSize": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set number of rows/elements to show per page"
      },
      "attribute": "page-size",
      "reflect": false,
      "defaultValue": "10"
    },
    "startElement": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Index of first element to display"
      },
      "attribute": "start-element",
      "reflect": false,
      "defaultValue": "0"
    },
    "totalElements": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Total number of rows/elements used to calculate page displays"
      },
      "attribute": "total-elements",
      "reflect": false,
      "defaultValue": "1"
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
        "text": "(optional) Injected styles"
      },
      "attribute": "styles",
      "reflect": false
    },
    "small": {
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
        "tags": [{
            "name": "deprecated",
            "text": "- size should replace small"
          }],
        "text": ""
      },
      "attribute": "size",
      "reflect": false
    },
    "ariaLabelFirstPage": {
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
        "text": "(optional) translation to 'Go to first page'"
      },
      "attribute": "aria-label-first-page",
      "reflect": false,
      "defaultValue": "'Go to first page'"
    },
    "ariaLabelNextPage": {
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
        "text": "(optional) translation to 'Go to next page'"
      },
      "attribute": "aria-label-next-page",
      "reflect": false,
      "defaultValue": "'Go to next page'"
    },
    "ariaLabelPreviousPage": {
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
        "text": "(optional) translation to 'Go to previous page'"
      },
      "attribute": "aria-label-previous-page",
      "reflect": false,
      "defaultValue": "'Go to previous page'"
    },
    "ariaLabelLastPage": {
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
        "text": "(optional) translation to 'Go to last page'"
      },
      "attribute": "aria-label-last-page",
      "reflect": false,
      "defaultValue": "'Go to last page'"
    }
  }; }
  static get events() { return [{
      "method": "scalePagination",
      "name": "scale-pagination",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggered every time the data is edited, changing original rows data"
      },
      "complexType": {
        "original": "{\n    startElement?: number;\n    currentPage?: number;\n    direction: PaginationEventDirection;\n  }",
        "resolved": "{ startElement?: number; currentPage?: number; direction: PaginationEventDirection; }",
        "references": {
          "PaginationEventDirection": {
            "location": "local"
          }
        }
      }
    }, {
      "method": "scalePaginationLegacy",
      "name": "scalePagination",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "{\n    startElement?: number;\n    currentPage?: number;\n    direction: PaginationEventDirection;\n  }",
        "resolved": "{ startElement?: number; currentPage?: number; direction: PaginationEventDirection; }",
        "references": {
          "PaginationEventDirection": {
            "location": "local"
          }
        }
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "totalElements",
      "methodName": "calculateWidth"
    }]; }
}
