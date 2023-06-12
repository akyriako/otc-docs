import { Component, Element, h, Prop } from '@stencil/core';
export class DropdownSelectItem {
  render() {
    return (h("div", { part: "base" },
      h("div", { part: "prefix" },
        h("slot", { name: "prefix" })),
      h("div", { part: "label" },
        h("slot", null)),
      h("div", { part: "suffix" },
        h("slot", { name: "suffix" }))));
  }
  static get is() { return "scale-dropdown-select-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dropdown-select-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["dropdown-select-item.css"]
  }; }
  static get properties() { return {
    "selected": {
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
        "text": ""
      },
      "attribute": "selected",
      "reflect": false
    },
    "focused": {
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
        "text": ""
      },
      "attribute": "focused",
      "reflect": false
    },
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": true
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
