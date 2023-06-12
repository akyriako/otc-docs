import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as createBreakpointValuedProp, a as createCssString } from './valuesTransformation-ce891c3a.js';

const Grid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get hostElement() { return getElement(this); }
};

export { Grid as scale_grid };
