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
import { Element, Component, h, Prop, Host, Listen, Watch, } from '@stencil/core';
import classnames from 'classnames';
export class Accordion {
  constructor() {
    /** If `true`, only one scale-collapsible within the accordion can be open at a time */
    this.dependent = false;
    /** If `true`, scale-collapsibles within the accordion will all be open initially, unless this is dependant */
    this.expanded = false;
    /** Heading level for scale-collapsible descendants */
    this.headingLevel = null;
    this.iconLocation = 'left';
  }
  /**
   * Handle `dependent`
   */
  collapsibleHandler(event) {
    event.stopPropagation();
    const { expanded } = event.detail;
    if (!this.dependent || expanded === false) {
      return;
    }
    this.getCollapsibleChildren().forEach((child) => {
      if (child !== event.target && child.hasAttribute('expanded')) {
        child.expanded = false;
      }
    });
  }
  headingLevelChanged(newValue) {
    this.propagatePropsToChildren(newValue, this.iconLocation);
  }
  iconLocationChanged(newValue) {
    this.propagatePropsToChildren(this.headingLevel, newValue);
  }
  connectedCallback() {
    /**
     * Handle `expanded`
     */
    if (!this.dependent) {
      this.getCollapsibleChildren().forEach((child) => {
        child.expanded = this.expanded;
      });
    }
  }
  componentDidLoad() {
    if (this.headingLevel !== null || this.iconLocation !== 'left') {
      this.propagatePropsToChildren(this.headingLevel, this.iconLocation);
    }
  }
  getCollapsibleChildren() {
    return Array.from(this.el.children).filter((el) => el.tagName === 'SCALE-COLLAPSIBLE');
  }
  propagatePropsToChildren(headingLevel, iconLocation) {
    this.getCollapsibleChildren().forEach((item) => {
      item.headingLevel = headingLevel;
      item.iconLocation = iconLocation;
    });
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap(), part: "base" },
        h("slot", null))));
  }
  getCssClassMap() {
    return classnames('accordion');
  }
  static get is() { return "scale-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
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
    },
    "dependent": {
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
        "text": "If `true`, only one scale-collapsible within the accordion can be open at a time"
      },
      "attribute": "dependent",
      "reflect": false,
      "defaultValue": "false"
    },
    "expanded": {
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
        "text": "If `true`, scale-collapsibles within the accordion will all be open initially, unless this is dependant"
      },
      "attribute": "expanded",
      "reflect": false,
      "defaultValue": "false"
    },
    "headingLevel": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number | null",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Heading level for scale-collapsible descendants"
      },
      "attribute": "heading-level",
      "reflect": false,
      "defaultValue": "null"
    },
    "iconLocation": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'right'",
        "resolved": "\"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-location",
      "reflect": false,
      "defaultValue": "'left'"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "headingLevel",
      "methodName": "headingLevelChanged"
    }, {
      "propName": "iconLocation",
      "methodName": "iconLocationChanged"
    }]; }
  static get listeners() { return [{
      "name": "scale-expand",
      "method": "collapsibleHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
