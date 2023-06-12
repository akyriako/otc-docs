import { Component, h, Host, Prop } from '@stencil/core';
import classNames from 'classnames';
let i = 0;
export class LoadingSpinner {
  constructor() {
    // todo the variant white should be renamed for dark mode
    this.variant = 'primary';
    this.alignment = 'horizontal';
    this.size = 'small';
  }
  componentWillLoad() {
    i++;
  }
  render() {
    return (h(Host, null,
      h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() },
        h("div", { part: "container", class: "spinner__container" },
          h("svg", { class: "spinner__circle", viewBox: "0 0 50 50", "aria-hidden": "true" },
            h("circle", { class: "path", cx: "25", cy: "25", r: "20", fill: "none", "stroke-width": "4" })),
          h("svg", { class: "spinner__circle-background", viewBox: "0 0 50 50", "aria-hidden": "true" },
            h("circle", { class: "path", cx: "25", cy: "25", r: "20", fill: "none", "stroke-width": "4" }))),
        h("div", { class: "sr-only", "aria-live": "polite", id: `spinner-label-${i}` }, this.text || 'Loading'),
        this.text ? (h("div", { part: "text", class: "spinner__text", "aria-hidden": "true" }, this.text)) : (h("div", null)))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const name = 'spinner';
    const prefix = mode === 'basePart' ? '' : `${name}--`;
    return classNames(name, this.alignment && `${prefix}alignment-${this.alignment}`, this.variant && `${prefix}variant-${this.variant}`, this.size && `${prefix}size-${this.size}`, this.text && `${prefix}text`);
  }
  static get is() { return "scale-loading-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./loading-spinner.css"]
  }; }
  static get styleUrls() { return {
    "$": ["loading-spinner.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'white' | 'primary'",
        "resolved": "\"primary\" | \"white\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'horizontal' | 'vertical'",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "alignment",
      "reflect": false,
      "defaultValue": "'horizontal'"
    },
    "text": {
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
        "text": ""
      },
      "attribute": "text",
      "reflect": false
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
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'small'"
    }
  }; }
}
