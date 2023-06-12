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
import { Component, h, Prop, Host, Element, Event, } from '@stencil/core';
import { emitEvent } from '../../utils/utils';
import statusNote from '../../utils/status-note';
const sizes = {
  small: 16,
  large: 24,
};
let ratingStarCount = 0;
export class RatingStars {
  constructor() {
    this.ratingStarId = `scale-rating-star-${ratingStarCount++}`;
    /** @deprecated; size should be used instead of starSize */
    this.starSize = 'large';
    /** size of the stars  */
    this.size = 'large';
    /** @deprecated; The lower limit of the rating */
    this.minRating = 0;
    /** @deprecated; max should be used instead of maxRating */
    this.maxRating = 5;
    /** The upper limit of the rating */
    this.max = 5;
    /** Represents the current value of the rating */
    this.rating = 0;
    /** makes the rating non-interactive (but still accessible)  */
    this.readonly = false;
    /** disables input  */
    this.disabled = false;
    /** a11y text for getting meaningful value. `$rating` and `$max` (deprecated `$maxRating`) are template variables and will be replaces by their corresponding properties.  */
    this.ariaLabelTranslation = '$rating out of $max stars';
    /** (optional) rating label */
    this.label = 'Rating';
    /** (optional) info text */
    this.hideLabel = false;
    this.handleInput = (ev) => {
      const input = ev.composedPath()[0];
      const value = Number(input.value);
      switch (true) {
        case value < this.minRating:
          input.value = this.minRating.toString();
          break;
        case value > this.max:
          input.value = this.max.toString();
          break;
      }
      this.rating = Number(input.value);
      emitEvent(this, 'scaleChange', { value: this.rating });
    };
    this.handleStarClick = (ev) => {
      const star = ev.composedPath()[0];
      const starValue = Number(star.dataset.value);
      // set focus on input to make arrow keys work to select stars
      const input = this.host.shadowRoot.querySelector('input');
      input.focus();
      if (starValue === 1 && this.rating === 1 && this.minRating === 0) {
        this.rating = this.minRating;
      }
      else {
        this.rating = starValue;
      }
      emitEvent(this, 'scaleChange', { value: this.rating });
    };
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.maxRating !== 5) {
      this.max = this.maxRating;
      statusNote({
        tag: 'deprecated',
        message: 'Property "maxRating" is deprecated. Please use the "max" property!',
        type: 'warn',
        source: this.host,
      });
    }
    if (this.minRating !== 0) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "minRating" is deprecated and will be deleted upon the next release',
        type: 'warn',
        source: this.host,
      });
    }
    if (this.starSize !== 'large') {
      this.size = this.starSize;
      statusNote({
        tag: 'deprecated',
        message: 'Property "starSize" is deprecated. Please use the "size" property!',
        type: 'warn',
        source: this.host,
      });
    }
    // deactivate showing half stars while keeping the code
    this.rating = Math.round(this.rating);
  }
  // constructs the aria message for the current rating
  getRatingText() {
    const filledText = this.ariaLabelTranslation
      .replace(/\$rating/g, `${this.rating}`)
      // TODO: remove when `maxRating` is also being removed
      .replace(/\$maxRating/g, `${this.max}`)
      .replace(/\$max/g, `${this.max}`);
    return filledText;
  }
  renderStar(index, selected = false, rating) {
    const size = sizes[this.size];
    const isWholeNumber = rating % 1 === 0;
    const isLastNumber = Math.ceil(rating) === index;
    return (h("div", { part: "star", "data-value": index, "data-selected": selected, "data-half": isLastNumber && !isWholeNumber, onMouseUp: !this.readonly && this.handleStarClick, 
      // sets up first star to be the resetter above the input element
      style: { zIndex: index === 1 ? '5' : 'auto' } },
      h("scale-icon-action-favorite", { size: size, part: "placeholder-star" }),
      h("div", { class: "icon-clip" },
        h("scale-icon-action-favorite", { size: size, selected: true, part: "selected-star" }))));
  }
  renderRating() {
    const stars = [];
    const roundedRating = Math.ceil(this.rating);
    const max = this.max;
    for (let index = 1; index <= max; index++) {
      const isSelected = roundedRating >= index;
      stars.push(this.renderStar(index, isSelected, this.rating));
    }
    return stars;
  }
  render() {
    return (h(Host, { class: {
        hideLabel: this.hideLabel,
        disabled: this.disabled,
        readonly: this.readonly,
      } },
      h("div", { part: "container" },
        h("label", { id: `${this.ratingStarId}-label`, part: "label", htmlFor: this.ratingStarId }, this.label),
        h("div", { part: "content" },
          h("div", { part: "wrapper", "aria-valuetext": this.getRatingText(), "aria-orientation": "horizontal", "aria-describedby": this.infoText ? `${this.ratingStarId}-infotext` : false },
            h("input", { disabled: this.disabled, readonly: this.readonly, part: "range-slider", type: this.readonly ? 'number' : 'range', id: this.ratingStarId, min: 0, max: this.max + 1, value: this.rating, step: "1", "aria-labelledby": `${this.ratingStarId}-label`, "aria-readonly": this.readonly ? 'true' : false, "aria-valuemin": this.minRating, "aria-valuemax": this.max, "aria-valuenow": this.rating, "aria-valuetext": this.getRatingText(), onInput: !this.readonly && this.handleInput }),
            this.renderRating()),
          this.infoText && (h("div", { part: "infotext", id: `${this.ratingStarId}-infotext` }, this.infoText))))));
  }
  static get is() { return "scale-rating-stars"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["rating-stars.css"]
  }; }
  static get styleUrls() { return {
    "$": ["rating-stars.css"]
  }; }
  static get properties() { return {
    "starSize": {
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
            "text": "; size should be used instead of starSize"
          }],
        "text": ""
      },
      "attribute": "star-size",
      "reflect": false,
      "defaultValue": "'large'"
    },
    "size": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'small' | 'large'",
        "resolved": "\"large\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "size of the stars"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "'large'"
    },
    "minRating": {
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
        "tags": [{
            "name": "deprecated",
            "text": "; The lower limit of the rating"
          }],
        "text": ""
      },
      "attribute": "min-rating",
      "reflect": false,
      "defaultValue": "0"
    },
    "maxRating": {
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
        "tags": [{
            "name": "deprecated",
            "text": "; max should be used instead of maxRating"
          }],
        "text": ""
      },
      "attribute": "max-rating",
      "reflect": false,
      "defaultValue": "5"
    },
    "max": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The upper limit of the rating"
      },
      "attribute": "max",
      "reflect": true,
      "defaultValue": "5"
    },
    "rating": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Represents the current value of the rating"
      },
      "attribute": "rating",
      "reflect": true,
      "defaultValue": "0"
    },
    "readonly": {
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
        "text": "makes the rating non-interactive (but still accessible)"
      },
      "attribute": "readonly",
      "reflect": true,
      "defaultValue": "false"
    },
    "disabled": {
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
        "text": "disables input"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "a11y text for getting meaningful value. `$rating` and `$max` (deprecated `$maxRating`) are template variables and will be replaces by their corresponding properties."
      },
      "attribute": "aria-label-translation",
      "reflect": false,
      "defaultValue": "'$rating out of $max stars'"
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
        "text": "(optional) rating label"
      },
      "attribute": "label",
      "reflect": true,
      "defaultValue": "'Rating'"
    },
    "hideLabel": {
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
        "text": "(optional) info text"
      },
      "attribute": "hide-label",
      "reflect": true,
      "defaultValue": "false"
    },
    "infoText": {
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
        "text": "(optional) info text"
      },
      "attribute": "info-text",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "scaleChange",
      "name": "scale-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the rating has changed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "scaleChangeLegacy",
      "name": "scaleChange",
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
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
}
