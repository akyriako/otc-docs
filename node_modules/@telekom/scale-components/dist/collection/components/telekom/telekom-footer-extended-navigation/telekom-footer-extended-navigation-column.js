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
import { Component, h, Host, Element } from '@stencil/core';
import { Prop } from '@stencil/core/internal';
import cx from 'classnames';
// import { emitEvent } from '../../../utils/utils';
export class TelekomFooterExtendedNavigationColumn {
  constructor() {
    /** Set to `true` to expand */
    this.expanded = false;
    // Optional heading level - default h2
    this.headingLevel = '2';
    this.handleClick = () => {
      this.expanded = !this.expanded;
      // emitEvent(this, 'scaleExpand', { expanded: this.expanded });
    };
  }
  render() {
    return (h(Host, null,
      h("div", { part: cx('telekom-footer-extended-navigation-column', {
          expanded: this.expanded,
        }) },
        h("div", { part: "heading-container" },
          h("span", { role: "heading", "aria-level": this.headingLevel, part: "heading-with-button" },
            h("button", { onClick: this.handleClick, part: "heading-button" },
              h("span", null,
                " ",
                this.heading),
              h("scale-icon-navigation-collapse-down", { selected: true, size: 16 }))),
          h("span", { part: "heading", role: "heading", "aria-level": this.headingLevel }, this.heading)),
        h("div", { part: cx('telekom-footer-extended-navigation-column-links', this.expanded ? 'links-expanded' : 'links-hidden') },
          h("slot", null)))));
  }
  static get is() { return "scale-telekom-footer-extended-navigation-column"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-footer-extended-navigation-column.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-footer-extended-navigation-column.css"]
  }; }
  static get properties() { return {
    "heading": {
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
      "attribute": "heading",
      "reflect": false
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
        "text": "Set to `true` to expand"
      },
      "attribute": "expanded",
      "reflect": true,
      "defaultValue": "false"
    },
    "headingLevel": {
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
      "attribute": "heading-level",
      "reflect": false,
      "defaultValue": "'2'"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
