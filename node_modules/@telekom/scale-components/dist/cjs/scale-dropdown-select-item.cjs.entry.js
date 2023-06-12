'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const dropdownSelectItemCss = "/*!*option*!*/[part~='base']{display:flex;justify-content:flex-start;align-items:center}[part~='prefix'],[part~='label'],[part~='suffix']{display:flex}";

const DropdownSelectItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { part: "base" }, index.h("div", { part: "prefix" }, index.h("slot", { name: "prefix" })), index.h("div", { part: "label" }, index.h("slot", null)), index.h("div", { part: "suffix" }, index.h("slot", { name: "suffix" }))));
  }
  get hostElement() { return index.getElement(this); }
};
DropdownSelectItem.style = dropdownSelectItemCss;

exports.scale_dropdown_select_item = DropdownSelectItem;
