import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createBreakpointValuedProp, a as createCssString } from './valuesTransformation.js';

const GridItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  componentWillLoad() {
    const setProps = [
      createBreakpointValuedProp('size', this.size),
      createBreakpointValuedProp('offset', this.offset),
    ].filter((setProp) => setProp);
    const cssStrings = setProps.map((setProp) => createCssString(setProp));
    this.hostElement.setAttribute('style', cssStrings.join(''));
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get hostElement() { return this; }
}, [4, "scale-grid-item", {
    "size": [1],
    "offset": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-grid-item"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-grid-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GridItem);
      }
      break;
  } });
}

const ScaleGridItem = GridItem;
const defineCustomElement = defineCustomElement$1;

export { ScaleGridItem, defineCustomElement };
