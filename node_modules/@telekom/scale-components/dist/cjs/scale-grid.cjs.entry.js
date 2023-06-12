'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const valuesTransformation = require('./valuesTransformation-39fd947d.js');

const Grid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const sizedProps = [
      valuesTransformation.createBreakpointValuedProp('columns', this.columns),
      valuesTransformation.createBreakpointValuedProp('gutter-y', this.gutterY),
      valuesTransformation.createBreakpointValuedProp('gutter-x', this.gutterX),
      valuesTransformation.createBreakpointValuedProp('spacing', this.spacing),
    ].filter((sizeProp) => sizeProp);
    const sizableCssStrings = sizedProps.map((sizedProp) => valuesTransformation.createCssString(sizedProp));
    const maxWidthCssStirng = this.maxWidth
      ? `--max-width:${this.maxWidth};`
      : '';
    const styleString = sizableCssStrings.join('') + maxWidthCssStirng;
    this.hostElement.setAttribute('style', styleString);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
};

exports.scale_grid = Grid;
