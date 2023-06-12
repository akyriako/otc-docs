import { r as registerInstance, h, g as getElement } from './index-6d95a4bc.js';

const dropdownSelectItemCss = "/*!*option*!*/[part~='base']{display:flex;justify-content:flex-start;align-items:center}[part~='prefix'],[part~='label'],[part~='suffix']{display:flex}";

const DropdownSelectItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { part: "base" }, h("div", { part: "prefix" }, h("slot", { name: "prefix" })), h("div", { part: "label" }, h("slot", null)), h("div", { part: "suffix" }, h("slot", { name: "suffix" }))));
  }
  get hostElement() { return getElement(this); }
};
DropdownSelectItem.style = dropdownSelectItemCss;

export { DropdownSelectItem as scale_dropdown_select_item };
