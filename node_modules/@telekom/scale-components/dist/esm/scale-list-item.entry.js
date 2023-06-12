import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';

const listItemCss = ":host(scale-list-item){--display:block;--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing-left:calc(0.25ch + var(--telekom-spacing-unit-x4));--font-size-marker-ordered:var(--telekom-typography-font-size-body);--font-weight-marker-ordered:var(--telekom-typography-font-weight-bold);--font-size-marker-ordered-nested:var(--telekom-typography-font-size-small);--line-height-marker-ordered-nested:var(\n    --telekom-typography-line-spacing-standard\n  );--spacing-top-marker-ordered-nested:calc(\n    var(--telekom-spacing-unit-x4) - var(--telekom-spacing-unit-x3)\n  );--spacing-right-no-marker:var(--telekom-spacing-unit-x2);display:var(--display)}.list-item{position:relative;font-size:var(--font-size);line-height:var(--line-height);padding-left:var(--spacing-left)}.list-item:before{content:'';position:absolute;top:0;left:0}.list-item--unordered:before{top:0.5em;border:var(--telekom-spacing-unit-x025) solid currentColor;display:block;transform:scale(0.66);background:currentColor;box-sizing:border-box;border-radius:50%;width:var(--telekom-spacing-unit-x2);height:var(--telekom-spacing-unit-x2)}.list-item--nested.list-item--unordered:before{border:var(--telekom-spacing-unit-x025) solid currentColor;background:transparent}.list-item--ordered:before{content:attr(data-index) '.';font-size:var(--font-size-marker-ordered);font-weight:var(--font-weight-marker-ordered)}.list-item--nested.list-item--ordered:before{font-size:var(--font-size-marker-ordered-nested);line-height:var(--line-height-marker-ordered-nested);padding-top:var(--spacing-top-marker-ordered-nested)}.list-item--no-marker{display:inline-flex;align-items:center;padding-left:0}.list-item--no-marker:before{display:none}.list-item--no-marker>::slotted(*){margin-right:var(--spacing-right-no-marker)}";

const ListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Whether this is a child of an ordered scale-list, gets set automatically by its parent */
    this.ordered = false;
    /** If `false`, no marker or left padding will be visible */
    this.marker = true;
    this.hasNestedChild = false;
    this.isNested = false;
    this.handleSlotChange = ({ target }) => {
      this.hasNestedChild =
        target.assignedNodes().length > 0;
      this.isNested = this.isNestedCheck();
    };
    this.isNestedCheck = () => {
      return this.el.closest('scale-list[slot="nested"]') != null;
    };
  }
  componentWillLoad() {
    this.isNested = this.isNestedCheck();
  }
  connectedCallback() {
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'listitem');
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), "data-index": this.index, part: classnames('base', this.ordered ? 'ordered' : 'unordered', this.isNested && 'nested', !this.marker && 'no-marker') }, h("slot", null), h("div", { class: "list-item__nested-list", part: "nested-list", hidden: !this.hasNestedChild }, h("slot", { name: "nested", onSlotchange: this.handleSlotChange })))));
  }
  getCssClassMap() {
    const orderType = this.ordered ? 'ordered' : 'unordered';
    return classnames('list-item', this.isNested && 'list-item--nested', `list-item--${orderType}`, !this.marker && 'list-item--no-marker');
  }
  get el() { return getElement(this); }
};
ListItem.style = listItemCss;

export { ListItem as scale_list_item };
