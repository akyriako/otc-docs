import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const SsrSlotFix = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
}, [4, "scale-ssr-slot-fix"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-ssr-slot-fix"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-ssr-slot-fix":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SsrSlotFix);
      }
      break;
  } });
}

const ScaleSsrSlotFix = SsrSlotFix;
const defineCustomElement = defineCustomElement$1;

export { ScaleSsrSlotFix, defineCustomElement };
