import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const dividerCss = ":host{--width:100%;--height:100%;--spacing:var(--telekom-spacing-unit-x3);--color:var(--telekom-color-ui-faint);--border-width:var(--telekom-spacing-unit-x025);--min-height-vertical:var(--telekom-spacing-unit-x6);width:var(--width);height:var(--height)}.divider{padding:var(--spacing)}.divider--vertical{display:inline-flex;height:inherit}.divider__horizontal{margin:0;border:0;border-top:var(--border-width) solid var(--color)}.divider__vertical{display:inline-flex;height:inherit;min-height:var(--min-height-vertical);border-left:var(--border-width) solid var(--color)}";

const Divider = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** (optional) Divider vertical */
    this.vertical = false;
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), "aria-hidden": "true", part: classnames('base', this.vertical && 'vertical') }, !this.vertical ? (h("hr", { class: "divider__horizontal", part: "rule-horizontal" })) : (h("span", { class: "divider__vertical", part: "rule-vertical" })))));
  }
  getCssClassMap() {
    return classnames('divider', this.vertical && `divider--vertical`);
  }
  static get style() { return dividerCss; }
}, [1, "scale-divider", {
    "vertical": [4],
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-divider"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-divider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Divider);
      }
      break;
  } });
}

const ScaleDivider = Divider;
const defineCustomElement = defineCustomElement$1;

export { ScaleDivider, defineCustomElement };
