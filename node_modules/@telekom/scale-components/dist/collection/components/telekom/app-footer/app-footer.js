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
import { Component, h, Prop, Host, Element } from '@stencil/core';
import classNames from 'classnames';
import { renderIcon } from '../../../utils/render-icon';
const readData = (data) => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  }
  catch (error) {
    parsedData = data;
  }
  return parsedData;
};
export class AppFooter {
  constructor() {
    this.footerNavigation = [];
    this.variant = 'standard';
    this.copyright = '© Deutsche Telekom AG';
  }
  componentWillLoad() {
    this.hasSlotLogo = !!this.hostElement.querySelector('[slot="logo"]');
    this.hasSlotNavigation = !!this.hostElement.querySelector('[slot="navigation"]');
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap() },
        h("div", { class: "footer-mask" }),
        h("footer", { class: "footer" },
          h("div", { class: "footer-content" },
            h("div", { class: "footer-branding" }, this.hasSlotLogo ? (h("slot", { name: "logo" })) : (h("scale-logo", { transparent: true, variant: "white", language: this.claimLang, size: 24, href: this.logoHref, logoTitle: this.logoTitle, onClick: this.logoClick, logoAriaDescribedBy: this.logoAriaDescribedBy }))),
            h("div", { class: "footer-copyright" }, this.copyright),
            h("nav", { "aria-label": "bottom", class: "footer-navigation" }, this.hasSlotNavigation ? (h("slot", { name: "navigation" })) : (h("ul", null, readData(this.footerNavigation).map((item) => (h("li", { class: "footer-navigation__item" },
              h("a", { class: "footer-navigation__item-link", href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
                  if (typeof item.onClick === 'function') {
                    item.onClick(event);
                  }
                } },
                item.icon &&
                  renderIcon({
                    tag: `scale-icon-${item.icon}`,
                    attributes: {
                      class: 'footer-navigation__item-link',
                    },
                  }),
                h("span", null, item.name)))))))))))));
  }
  getCssClassMap() {
    return classNames('footer-container', this.variant && `footer--variant-${this.variant}`);
  }
  static get is() { return "scale-app-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["app-footer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["app-footer.css"]
  }; }
  static get properties() { return {
    "footerNavigation": {
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
      "attribute": "footer-navigation",
      "reflect": false,
      "defaultValue": "[]"
    },
    "variant": {
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
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'standard'"
    },
    "copyright": {
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
      "attribute": "copyright",
      "reflect": false,
      "defaultValue": "'\u00A9 Deutsche Telekom AG'"
    },
    "logoHref": {
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
      "attribute": "logo-href",
      "reflect": false
    },
    "logoTitle": {
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
      "attribute": "logo-title",
      "reflect": false
    },
    "logoClick": {
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
      "attribute": "logo-click",
      "reflect": false
    },
    "logoAriaDescribedBy": {
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
      "attribute": "logo-aria-described-by",
      "reflect": false
    },
    "claimLang": {
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
      "attribute": "claim-lang",
      "reflect": false
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
  static get elementRef() { return "hostElement"; }
}
