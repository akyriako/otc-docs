import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { s as statusNote } from './status-note.js';

const navMainCss = "scale-nav-main{--spacing-x:var(--telekom-typography-font-size-body);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-hovered);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-size:var(--telekom-typography-font-size-callout);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:var(--telekom-typography-line-spacing-tight);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard)}.main-navigation__item{height:100%;margin-left:var(--spacing-x);margin-right:var(--spacing-x)}.main-navigation__item:has(a[href]){cursor:pointer}.main-navigation__item-link-text{white-space:nowrap}.main-navigation__item.mega-menu--visible .mega-menu{display:block}.main-navigation__item.mega-menu--visible .mega-menu__wrapper{pointer-events:visible}.main-navigation__item .main-navigation__item-link{display:flex;height:100%;color:var(--color);font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);transition:color, border 0.2s ease-in-out;align-items:center;text-decoration:none}.main-navigation__item:hover .main-navigation__item-link{color:var(--color-hover)}.main-navigation__item:hover .main-navigation__item-link-text{border-bottom:2px solid var(--color-hover);color:var(--color-hover);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item-link:focus{outline:var(--focus-outline)}.main-navigation__item:active .main-navigation__item-link{color:var(--color-active)}.main-navigation__item:active .main-navigation__item-link-text{border-bottom:2px solid var(--color-active);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item.selected .main-navigation__item-link{color:var(--color-selected)}.main-navigation__item.selected:hover .main-navigation__item-link{color:var(--color-hover)}.main-navigation__item.selected .main-navigation__item-link-text{border-bottom:2px solid var(--color-selected);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item.selected:hover .main-navigation__item-link-text{color:var(--color-hover);border-bottom:2px solid var(--color-hover)}.main-navigation__item.mega-menu--visible .main-navigation__item-link-text{border-bottom:2px solid var(--color-hover);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.sr-only{position:absolute;left:-10000px;overflow:hidden}";

const NavMain = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    // DEPRECATED - megaMenuVisible should replace isMegaMenuVisible
    this.isMegaMenuVisible = false;
    /** (optional) if this mega-menu is visible */
    this.megaMenuVisible = false;
    /** (optional) href value */
    this.href = 'javascript:void(0);';
    /** (optional) target value */
    this.target = '_self';
  }
  componentWillLoad() {
    this.hasPopup =
      this.popup || !!this.hostElement.querySelector('app-mega-menu');
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isMegaMenuVisible !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isMegaMenuVisible" is deprecated. Please use the "megaMenuVisible" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.isActive !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  render() {
    return (h(Host, null, h("li", { class: this.getCssClassMap() }, h("a", { class: "main-navigation__item-link", href: this.href, target: this.target || '_self', "aria-current": this.active || this.isActive ? 'true' : 'false', "aria-haspopup": this.hasPopup ? 'true' : 'false', onClick: this.clickLink, id: this.innerId }, h("span", { class: "main-navigation__item-link-text" }, this.name), (this.active || this.isActive) && (h("span", { class: "sr-only" }, "active"))), h("slot", null))));
  }
  getCssClassMap() {
    return classnames('main-navigation__item', (this.megaMenuVisible || this.isMegaMenuVisible) && 'mega-menu--visible', (this.active || this.isActive) && 'selected');
  }
  get hostElement() { return this; }
  static get style() { return navMainCss; }
}, [4, "scale-nav-main", {
    "isActive": [4, "is-active"],
    "active": [4],
    "popup": [4],
    "isMegaMenuVisible": [4, "is-mega-menu-visible"],
    "megaMenuVisible": [4, "mega-menu-visible"],
    "href": [1],
    "name": [1],
    "target": [1],
    "innerId": [1, "inner-id"],
    "clickLink": [8, "click-link"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-nav-main"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-nav-main":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavMain);
      }
      break;
  } });
}

export { NavMain as N, defineCustomElement as d };
