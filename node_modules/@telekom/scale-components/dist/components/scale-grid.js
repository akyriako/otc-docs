import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createBreakpointValuedProp, a as createCssString } from './valuesTransformation.js';

const Grid = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  componentWillLoad() {
    const sizedProps = [
      createBreakpointValuedProp('columns', this.columns),
      createBreakpointValuedProp('gutter-y', this.gutterY),
      createBreakpointValuedProp('gutter-x', this.gutterX),
      createBreakpointValuedProp('spacing', this.spacing),
    ].filter((sizeProp) => sizeProp);
    const sizableCssStrings = sizedProps.map((sizedProp) => createCssString(sizedProp));
    const maxWidthCssStirng = this.maxWidth
      ? `--max-width:${this.maxWidth};`
      : '';
    const styleString = sizableCssStrings.join('') + maxWidthCssStirng;
    this.hostElement.setAttribute('style', styleString);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get hostElement() { return this; }
}, [4, "scale-grid", {
    "columns": [1],
    "gutterY": [1, "gutter-y"],
    "gutterX": [1, "gutter-x"],
    "spacing": [1],
    "maxWidth": [1, "max-width"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-grid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Grid);
      }
      break;
  } });
}

const ScaleGrid = Grid;
const defineCustomElement = defineCustomElement$1;

export { ScaleGrid, defineCustomElement };
