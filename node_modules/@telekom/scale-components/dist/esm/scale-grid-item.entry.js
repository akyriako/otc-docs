import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as createBreakpointValuedProp, a as createCssString } from './valuesTransformation-ce891c3a.js';

const GridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get hostElement() { return getElement(this); }
};

export { GridItem as scale_grid_item };
