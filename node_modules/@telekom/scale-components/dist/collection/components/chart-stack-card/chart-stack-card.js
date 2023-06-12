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
import { Component, Element, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
export class ChartStackCard {
  constructor() {
    this.readData = (data) => {
      try {
        return Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
      }
      catch (error) {
        return Array.isArray(data) ? data : [];
      }
    };
  }
  getOpacity(item, index) {
    return JSON.stringify(index === 0 ? 1 : +item.percentage / 100);
  }
  getCardStyle() {
    return `
      .card:after {
          content: '';
          display: block;
          background: linear-gradient(0deg, white, rgba(255,255,255, 0));
          height: 2rem;
          margin-top: -2rem;
          position: relative;
        }

      .card__body: {
        padding-bottom: 0 !important;
      }
  `;
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, type: 'warn' });
  }
  render() {
    return (h(Host, null,
      h("div", { class: this.getCssClassMap() },
        h("scale-card", { styles: this.getCardStyle() },
          h("div", { class: "header" }, this.heading),
          h("div", { class: "bar" }, this.readData(this.data)
            .sort((a, b) => b.percentage - a.percentage)
            .map((item, index) => {
            if (+item.percentage > 0) {
              return (h("div", { class: "bar__item", style: {
                  opacity: this.getOpacity(item, index),
                  flex: JSON.stringify(+item.percentage),
                } }));
            }
          })),
          h("div", { class: "legend" }, this.readData(this.data)
            .sort((a, b) => b.percentage - a.percentage)
            .map((item, index) => (h("div", { class: "legend__row" },
            h("div", { class: "legend__row__item" },
              h("div", { class: "legend__item", style: {
                  opacity: this.getOpacity(item, index),
                } }),
              h("div", { class: "legend__label spacer" }, item.type)),
            h("div", { class: "legend__row__item" },
              h("div", { class: "spacer" }, item.value),
              h("div", { class: "spacer" },
                item.percentage,
                "%"))))))))));
  }
  getCssClassMap() {
    return classNames('chart-stack-card');
  }
  static get is() { return "scale-chart-stack-card"; }
  static get originalStyleUrls() { return {
    "$": ["chart-stack-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["chart-stack-card.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | Array<Record<'type' | 'value' | 'percentage', string>>",
        "resolved": "Record<\"type\" | \"value\" | \"percentage\", string>[] | string",
        "references": {
          "Array": {
            "location": "global"
          },
          "Record": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Chart Data"
      },
      "attribute": "data",
      "reflect": false
    },
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
        "text": "Chart Title"
      },
      "attribute": "heading",
      "reflect": false
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
