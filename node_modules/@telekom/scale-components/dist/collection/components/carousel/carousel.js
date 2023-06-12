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
import { Component, Prop, h, State, Element, Host } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
export class Carousel {
  constructor() {
    /** (optional) carousel display direction */
    this.vertical = false;
    this.slidesArray = [];
    this.value = 0;
    this.handleSlideChange = (direction) => {
      const val = this.value;
      if (direction === 'prev') {
        val === 0
          ? (this.value = -100 * (this.slidesArray.length - 1))
          : (this.value = val + 100);
      }
      if (direction === 'next') {
        val === -100 * (this.slidesArray.length - 1)
          ? (this.value = 0)
          : (this.value = val - 100);
      }
    };
    this.setActiveSlide = (index) => {
      this.value = -100 * index;
    };
    this.setTransformValue = () => {
      if (!!this.vertical) {
        return `translateY(${this.value}%)`;
      }
      return `translateX(${this.value}%)`;
    };
    this.setActiveCssClass = (index) => {
      if (Math.abs(this.value) / 100 === index) {
        return 'carousel__indicator--active';
      }
      return '';
    };
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, type: 'warn' });
  }
  componentWillLoad() {
    if (this.slidesArray.length === 0) {
      const children = this.hostElement.children;
      // tslint:disable-next-line: prefer-for-of
      for (let childIndex = 0; childIndex < children.length; childIndex++) {
        if (children[childIndex].slot === '') {
          // tslint:disable-next-line: prefer-for-of
          for (let slideIndex = 0; slideIndex < children[childIndex].children.length; slideIndex++) {
            const element = children[childIndex].children[slideIndex];
            this.slidesArray.push(element);
          }
        }
      }
    }
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap() },
        h("div", { class: "carousel__container" },
          h("div", { class: "carousel__arrow carousel__arrow--left", onClick: () => this.handleSlideChange('prev') },
            h("slot", { name: "arrow-left" })),
          this.slidesArray.map((element) => (h("div", { class: "carousel__slide", style: { transform: this.setTransformValue() } },
            h("div", { innerHTML: element.outerHTML })))),
          h("div", { class: "carousel__arrow carousel__arrow--right", onClick: () => this.handleSlideChange('next') },
            h("slot", { name: "arrow-right" }))),
        h("ul", { class: "carousel__indicators" }, Array.from(Array(this.slidesArray.length).keys()).map((index) => (h("li", { key: index, class: `carousel__indicator ${this.setActiveCssClass(index)}`, onClick: () => this.setActiveSlide(index) })))))));
  }
  getCssClassMap() {
    return classNames('carousel', this.vertical && `carousel--vertical`);
  }
  static get is() { return "scale-carousel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./carousel.css"]
  }; }
  static get styleUrls() { return {
    "$": ["carousel.css"]
  }; }
  static get properties() { return {
    "vertical": {
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
        "text": "(optional) carousel display direction"
      },
      "attribute": "vertical",
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
  static get states() { return {
    "slidesArray": {},
    "value": {}
  }; }
  static get elementRef() { return "hostElement"; }
}
