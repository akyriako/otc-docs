import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const menuFlyoutDividerCss = ":host{display:block;--color:var(--telekom-color-ui-faint)}.menu-flyout-divider{border-top:var(--telekom-line-weight-standard) solid var(--color);margin:6px 0}";

const MenuFlyoutDivider = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getCssClassMap() {
    return classnames('menu-flyout-divider');
  }
  render() {
    return (h(Host, { role: "separator" }, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), part: "base", "aria-hidden": "true" })));
  }
  static get style() { return menuFlyoutDividerCss; }
}, [1, "scale-menu-flyout-divider", {
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-menu-flyout-divider"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-menu-flyout-divider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuFlyoutDivider);
      }
      break;
  } });
}

const ScaleMenuFlyoutDivider = MenuFlyoutDivider;
const defineCustomElement = defineCustomElement$1;

export { ScaleMenuFlyoutDivider, defineCustomElement };
