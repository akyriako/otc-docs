import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './logo.js';
import { d as defineCustomElement$4 } from './logo-svg.js';
import { d as defineCustomElement$3 } from './telekom-footer.js';
import { d as defineCustomElement$2 } from './telekom-footer-content.js';

// import { findRootNode, findSelected } from '../../../utils/menu-utils';
// import { renderIcon } from '../../../utils/render-icon';
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
const TelekomFooterDataBackCompat = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.type = 'standard';
    this.footerNavigation = [];
    this.copyright = '© Deutsche Telekom AG';
  }
  render() {
    return (h("scale-telekom-footer", { type: this.type }, h("scale-telekom-footer-content", null, h("span", { slot: "notice" }, " ", this.copyright, " "), h("ul", { slot: "navigation" }, readData(this.footerNavigation).map(({ name, id, href = 'javascript:void(0);', target = '_self', }) => {
      return (h("li", null, h("a", { href: href, id: id, target: target }, name)));
    })))));
  }
}, [0, "scale-telekom-footer-data-back-compat", {
    "type": [513],
    "footerNavigation": [8, "footer-navigation"],
    "copyright": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-telekom-footer-data-back-compat", "scale-logo", "scale-logo-svg", "scale-telekom-footer", "scale-telekom-footer-content"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-telekom-footer-data-back-compat":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TelekomFooterDataBackCompat);
      }
      break;
    case "scale-logo":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "scale-logo-svg":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "scale-telekom-footer":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "scale-telekom-footer-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const ScaleTelekomFooterDataBackCompat = TelekomFooterDataBackCompat;
const defineCustomElement = defineCustomElement$1;

export { ScaleTelekomFooterDataBackCompat, defineCustomElement };
