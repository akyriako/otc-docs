'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');

const menuFlyoutDividerCss = ":host{display:block;--color:var(--telekom-color-ui-faint)}.menu-flyout-divider{border-top:var(--telekom-line-weight-standard) solid var(--color);margin:6px 0}";

const MenuFlyoutDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getCssClassMap() {
    return index$1.classnames('menu-flyout-divider');
  }
  render() {
    return (index.h(index.Host, { role: "separator" }, this.styles && index.h("style", null, this.styles), index.h("div", { class: this.getCssClassMap(), part: "base", "aria-hidden": "true" })));
  }
};
MenuFlyoutDivider.style = menuFlyoutDividerCss;

exports.scale_menu_flyout_divider = MenuFlyoutDivider;
