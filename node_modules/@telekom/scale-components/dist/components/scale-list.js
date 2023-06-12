import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const listCss = ":host{--spacing-left:0;--spacing-left-nested:var(--telekom-spacing-unit-x2)}.list{padding-left:var(--spacing-left)}.list--nested{margin-top:0;margin-bottom:0;padding-left:var(--spacing-left-nested)}";

const List = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    return (h(Host, null, this.styles && h("style", null, this.styles), h(Tag, { class: this.getCssClassMap(), part: classnames('base', this.ordered && 'ordered', this.isNested && 'nested') }, h("slot", null))));
  }
  getCssClassMap() {
    return classnames('list', this.ordered && 'list--type-ordered', this.isNested && 'list--nested');
  }
  get el() { return this; }
  static get watchers() { return {
    "ordered": ["orderedChanged"]
  }; }
  static get style() { return listCss; }
}, [1, "scale-list", {
    "ordered": [4],
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-list"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, List);
      }
      break;
  } });
}

const ScaleList = List;
const defineCustomElement = defineCustomElement$1;

export { ScaleList, defineCustomElement };
