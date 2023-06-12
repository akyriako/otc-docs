'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');

const listCss = ":host{--spacing-left:0;--spacing-left-nested:var(--telekom-spacing-unit-x2)}.list{padding-left:var(--spacing-left)}.list--nested{margin-top:0;margin-bottom:0;padding-left:var(--spacing-left-nested)}";

const List = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isNested = false;
    /** (optional) Make the list ordered (ol) */
    this.ordered = false;
  }
  orderedChanged(newValue) {
    this.propagatePropsToChildren(newValue);
  }
  componentDidLoad() {
    this.propagatePropsToChildren(this.ordered);
  }
  connectedCallback() {
    this.isNested = this.el.closest('scale-list-item') != null;
    if (this.isNested) {
      this.el.setAttribute('slot', 'nested');
    }
    else {
      this.el.removeAttribute('slot');
    }
  }
  propagatePropsToChildren(ordered) {
    const items = Array.from(this.el.children).filter((child) => child.matches('scale-list-item'));
    items.forEach((item, index) => {
      item.ordered = ordered;
      item.index = index + 1;
    });
  }
  render() {
    const Tag = this.ordered ? 'ol' : 'ul';
    return (index.h(index.Host, null, this.styles && index.h("style", null, this.styles), index.h(Tag, { class: this.getCssClassMap(), part: index$1.classnames('base', this.ordered && 'ordered', this.isNested && 'nested') }, index.h("slot", null))));
  }
  getCssClassMap() {
    return index$1.classnames('list', this.ordered && 'list--type-ordered', this.isNested && 'list--nested');
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "ordered": ["orderedChanged"]
  }; }
};
List.style = listCss;

exports.scale_list = List;
