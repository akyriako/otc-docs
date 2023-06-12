'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const valuesTransformation = require('./valuesTransformation-39fd947d.js');

const GridItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const setProps = [
      valuesTransformation.createBreakpointValuedProp('size', this.size),
      valuesTransformation.createBreakpointValuedProp('offset', this.offset),
    ].filter((setProp) => setProp);
    const cssStrings = setProps.map((setProp) => valuesTransformation.createCssString(setProp));
    this.hostElement.setAttribute('style', cssStrings.join(''));
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
};

exports.scale_grid_item = GridItem;
