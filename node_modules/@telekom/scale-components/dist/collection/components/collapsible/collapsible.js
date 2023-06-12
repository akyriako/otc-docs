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
import classNames from 'classnames';
import { emitEvent } from '../../utils/utils';
let i = 0;
export class Collapsible {
  constructor() {
    /** Default aria-level for heading */
    this.headingLevel = 2;
    this.iconLocation = 'left';
    this.handleClick = () => {
      this.expanded = !this.expanded;
      emitEvent(this, 'scaleExpand', { expanded: this.expanded });
    };
  }
  componentWillLoad() {
    const j = i++;
    this.headingId = 'collapsable-heading-' + j;
    this.panelId = 'collapsable-panel-' + j;
  }
  componentDidLoad() {
    this.setHeadingFromLightDOM();
  }
  /**
   * @deprecated Safe to remove in 4.0
   * @see https://github.com/telekom/scale/pull/319
   */
  setHeadingFromLightDOM() {
    const lightHeading = this.hostElement.querySelector(':first-child');
    if (lightHeading == null) {
      return;
    }
    // Only proceed if the element is not a heading and has no `slot` attribute
    const isHeading = lightHeading.tagName.charAt(0).toUpperCase() === 'H';
    const hasSlotAttr = lightHeading.hasAttribute('slot');
    if (isHeading && !hasSlotAttr) {
      this.headingElement.innerHTML = lightHeading.innerHTML;
      lightHeading.style.display = 'none';
    }
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap(), part: classNames('base', this.expanded && 'expanded') },
        h("h2", { "aria-level": this.headingLevel, class: "collapsible__heading", part: "heading" },
          h("button", { id: this.headingId, class: "collapsible__button", part: "button", onClick: this.handleClick, "aria-expanded": this.expanded ? 'true' : 'false', "aria-controls": this.panelId },
            this.iconLocation === 'left' ? (h("scale-icon-navigation-collapse-down", { size: 16, decorative: true, class: "collapsible__icon", part: classNames('icon', this.expanded && 'expanded') })) : null,
            h("span", { ref: (el) => (this.headingElement = el), class: "collapsible__button-text", part: "button-text" },
              h("slot", { name: "heading" })),
            this.iconLocation === 'right' ? (h("scale-icon-navigation-collapse-down", { size: 16, decorative: true, class: "collapsible__icon collapsible__icon-right", part: classNames('icon', this.expanded && 'expanded') })) : null)),
        h("div", { id: this.panelId, role: "region", "aria-labelledby": this.headingId, hidden: !this.expanded, class: "collapsible__content", part: "content" },
          h("slot", null)))));
  }
  getCssClassMap() {
    return classNames('collapsible', this.expanded && 'collapsible--expanded');
  }
  static get is() { return "scale-collapsible"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./collapsible.css"]
  }; }
  static get styleUrls() { return {
    "$": ["collapsible.css"]
  }; }
  static get properties() { return {
    "expanded": {
      "type": "boolean",
      "mutable": true,
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
      "reflect": true
    },
    "headingLevel": {
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
        "text": "Default aria-level for heading"
      },
      "attribute": "heading-level",
      "reflect": false,
      "defaultValue": "2"
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
  static get events() { return [{
      "method": "scaleExpand",
      "name": "scale-expand",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted so parent <scale-accordion> knows about it"
      },
      "complexType": {
        "original": "CollapsibleEventDetail",
        "resolved": "CollapsibleEventDetail",
        "references": {
          "CollapsibleEventDetail": {
            "location": "local"
          }
        }
      }
    }, {
      "method": "scaleExpandLegacy",
      "name": "scaleExpand",
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
        "original": "CollapsibleEventDetail",
        "resolved": "CollapsibleEventDetail",
        "references": {
          "CollapsibleEventDetail": {
            "location": "local"
          }
        }
      }
    }]; }
  static get elementRef() { return "hostElement"; }
}
