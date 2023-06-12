import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const appNavigationSectorMobileCss = "app-navigation-sector-mobile{--border-bottom:1px solid var(--telekom-color-ui-subtle);--color:var(--telekom-color-text-and-icon-standard);--font-weight:var(--telekom-typography-font-weight-bold);--font-size:var(--telekom-typography-font-size-body);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--border-bottom-selected:1px solid var(--telekom-color-primary-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);width:100%}.sector-navigation-mobile{display:flex;width:100%;list-style:none;padding:0;margin:0;border-bottom:var(--border-bottom)}.sector-navigation-mobile__item{width:100%}.sector-navigation-mobile__item-link{color:var(--color);text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);width:100%;height:54px;display:flex;align-items:center;justify-content:center;transition:var(--transition)}.sector-navigation-mobile__item-link--selected{border-bottom:var(--border-bottom-selected);color:var(--color-selected);transition:var(--transition)}";

const NavigationSectorMobile = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    // @ts-ignore
    this.selected = this.navigation
      ? // @ts-ignore
        this.navigation.find(({ id }) => id === this.activeSectorId) ||
          // @ts-ignore
          this.navigation[0]
      : {};
  }
  handleActiveSegment(newValue) {
    this.selected =
      this.navigation.find(({ id }) => id === newValue) || this.navigation[0];
  }
  handleSelected(event, item) {
    this.selected = item;
    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }
  }
  render() {
    return (h("ul", { class: "sector-navigation-mobile" }, (this.navigation || []).map((item) => (h("li", { class: "sector-navigation-mobile__item" }, h("a", { class: `sector-navigation-mobile__item-link${this.selected.id === item.id
        ? ' sector-navigation-mobile__item-link--selected'
        : ''}`, href: item.href || 'javascript:void(0);', onClick: (event) => this.handleSelected(event, item), onKeyDown: (event) => {
        if (['Escape', 'Esc'].includes(event.key)) {
          this.hide();
        }
      }, "aria-current": this.selected.id === item.id ? 'true' : 'false' }, item.name, this.selected.id === item.id && (h("span", { class: "sr-only" }, "active"))))))));
  }
  static get watchers() { return {
    "activeSectorId": ["handleActiveSegment"]
  }; }
  static get style() { return appNavigationSectorMobileCss; }
}, [0, "app-navigation-sector-mobile", {
    "hide": [16],
    "navigation": [16],
    "activeSectorId": [1, "active-sector-id"],
    "selected": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["app-navigation-sector-mobile"];
  components.forEach(tagName => { switch (tagName) {
    case "app-navigation-sector-mobile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationSectorMobile);
      }
      break;
  } });
}

export { NavigationSectorMobile as N, defineCustomElement as d };
