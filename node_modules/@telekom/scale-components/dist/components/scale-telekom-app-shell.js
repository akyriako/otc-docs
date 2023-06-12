import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const telekomAppShellCss = ":host{--spacing-x:0;--min-height:100vh}[part~='base']{display:flex;min-height:var(--min-height);flex-direction:column}[part~='content']{box-sizing:border-box;align-self:center;width:100%;padding-left:var(--spacing-x);padding-right:var(--spacing-x);flex:1}";

const Shell = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: "base" }, h("slot", { name: "header" }), h("main", { part: "content" }, h("slot", null)), h("slot", { name: "footer" }))));
  }
  get hostElement() { return this; }
  static get style() { return telekomAppShellCss; }
}, [1, "scale-telekom-app-shell", {
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-telekom-app-shell"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-telekom-app-shell":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Shell);
      }
      break;
  } });
}

const ScaleTelekomAppShell = Shell;
const defineCustomElement = defineCustomElement$1;

export { ScaleTelekomAppShell, defineCustomElement };
