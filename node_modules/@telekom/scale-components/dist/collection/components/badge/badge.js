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
import { Component, Element, h, Host, Prop } from '@stencil/core';
import cx from 'classnames';
import statusNote from '../../utils/status-note';
export class Badge {
  constructor() {
    /** a11y text for getting meaningful value. */
    this.ariaLabelTranslation = '$label - $count item';
    this.formatter = new Intl.NumberFormat('en', {
      // @ts-ignore
      notation: 'compact',
    });
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: 'beta' });
  }
  getAriaLabel() {
    const filledText = this.ariaLabelTranslation
      .replace(/\$count/g, `${this.count}`)
      .replace(/\$label/g, `${this.label}`);
    return filledText;
  }
  render() {
    return (h(Host, null,
      h("span", { part: "base", "aria-label": this.count ? this.getAriaLabel() : this.label },
        h("slot", null),
        h("span", { "aria-hidden": "true", part: cx(`circle`, this.count ? `has-count` : 'no-count') }, !this.count ? '' : this.formatter.format(this.count)),
        h("span", { "aria-hidden": "true", id: "raw-count", part: "visually-hidden" }, this.count)),
      h("span", { id: "label", part: cx('label', this.labelVisuallyHidden && 'visually-hidden'), "aria-hidden": "true" }, this.label)));
  }
  static get is() { return "scale-badge"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./badge.css"]
  }; }
  static get styleUrls() { return {
    "$": ["badge.css"]
  }; }
  static get properties() { return {
    "count": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "count",
      "reflect": false
    },
    "label": {
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
      "attribute": "label",
      "reflect": false
    },
    "labelVisuallyHidden": {
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
        "text": ""
      },
      "attribute": "label-visually-hidden",
      "reflect": false
    },
    "ariaLabelTranslation": {
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
        "text": "a11y text for getting meaningful value."
      },
      "attribute": "aria-label-translation",
      "reflect": false,
      "defaultValue": "'$label - $count item'"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
