import { r as registerInstance, h, a as Host } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';

const menuFlyoutDividerCss = ":host{display:block;--color:var(--telekom-color-ui-faint)}.menu-flyout-divider{border-top:var(--telekom-line-weight-standard) solid var(--color);margin:6px 0}";

const MenuFlyoutDivider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getCssClassMap() {
    return classnames('menu-flyout-divider');
  }
  render() {
    return (h(Host, { role: "separator" }, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), part: "base", "aria-hidden": "true" })));
  }
};
MenuFlyoutDivider.style = menuFlyoutDividerCss;

export { MenuFlyoutDivider as scale_menu_flyout_divider };
