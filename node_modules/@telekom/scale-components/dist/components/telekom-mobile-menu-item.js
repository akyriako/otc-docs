import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { e as emitEvent } from './utils.js';
import { d as defineCustomElement$1 } from './navigation-right.js';

const telekomMobileMenuItemCss = ":host{--height:72px;--max-width:572px;--font-bold:var(--telekom-text-style-heading-5);--font-thin:var(--telekom-text-style-lead-text);--color:var(--telekom-color-text-and-icon-standard);--color-active:var(--telekom-color-primary-standard);--border-color:var(--telekom-color-ui-faint);--_box-shadow-active:none;--_spacing-level:0px;--_font:var(--font-thin);--_color:var(--color);position:relative}:host::part(level-0){--_spacing-level:0px;--_font:var(--font-bold)}:host::part(level-0 active){--_spacing-level:0px}:host::part(level-0 open){--_spacing-level:36px}:host::part(level-1),:host::part(level-2),:host::part(level-3),:host::part(level-4){--_spacing-level:36px}:host::part(level-1 current-level-2),:host::part(level-2 current-level-3),:host::part(level-3 current-level-4){--_font:var(--font-bold)}:host::part(active),:host::part(level-0 current-level-0 active),:host::part(level-1 current-level-1 active),:host::part(level-2 current-level-2 active),:host::part(level-3 current-level-3 active){--_color:var(--color-active);--_box-shadow-active:2px 0px 0px 0px var(--color-active) inset}:host::part(level-0 current-level-1),:host::part(level-1 current-level-2),:host::part(level-2 current-level-3),:host::part(level-3 current-level-4){--_color:var(--color)}:host::part(active-indicator){box-shadow:var(--_box-shadow-active);min-height:28px;min-width:2px}:host::part(base){font:var(--_font);max-width:var(--max-width)}::slotted(a){position:absolute;display:flex;align-items:center;height:var(--height);width:calc(100% - var(--_spacing-level));max-width:572px;padding-left:var(--_spacing-level);color:var(--_color);text-decoration:none}:host::part(header){height:var(--height);border-style:solid;border-width:0 0 1px 0;border-color:var(--border-color);display:flex;width:100%;align-items:center;justify-content:flex-end;border-style:solid;border-width:0 0 1px 0;border-color:var(--border-color)}:host::part(hidden){display:none}:host::part(icon-right-container){display:flex;align-items:center}";

const TelekomMobileMenuItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.scaleSetMenuItemActive = createEvent(this, "scale-set-menu-item-active", 7);
    this.scaleSetMenuItemOpen = createEvent(this, "scale-set-menu-item-open", 7);
    this.scaleCloseNavFlyout = createEvent(this, "scale-close-nav-flyout", 7);
    this.open = false;
    this.active = false;
    this.level = '0';
    this.currentLevel = '0';
    this.handleClick = (e) => {
      e.stopImmediatePropagation();
      const hasLink = !(e.target.getAttribute('href') || '').includes('javascript:void(0)');
      const hasLinkNoChildren = hasLink && !this.children.length;
      if (hasLinkNoChildren) {
        emitEvent(this, 'scaleCloseNavFlyout', e);
        return emitEvent(this, 'scaleSetMenuItemActive', e.detail);
      }
      const hasLinkAndChildrenAndOpen = hasLink && this.children.length && this.open;
      if (hasLinkAndChildrenAndOpen) {
        emitEvent(this, 'scaleCloseNavFlyout', e);
        return emitEvent(this, 'scaleSetMenuItemActive', e.detail);
      }
      // EITHER hos link and children - ready to expand children without firing the link click
      // OR no link but has children
      e.preventDefault();
      this.toggleChildrenVisibility(true);
      return emitEvent(this, 'scaleSetMenuItemOpen', e.detail);
    };
  }
  openChanged(newValue) {
    this.toggleChildrenVisibility(newValue);
  }
  toggleChildrenVisibility(show) {
    this.children.forEach((element) => {
      show && element.getAttribute('level') === String(+this.level + 1)
        ? element.removeAttribute('hidden')
        : element.setAttribute('hidden', '');
    });
  }
  get children() {
    return this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item');
  }
  get openChildren() {
    return Array.from(this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item')).filter((element) => element.hasAttribute('open') || element.open);
  }
  render() {
    return (h(Host, { onClick: this.handleClick }, h("nav", { part: classnames('base', `level-${this.level}`, `current-level-${this.currentLevel}`, {
        open: this.open,
        active: this.active,
        hidden: !this.open && this.level !== this.currentLevel,
      }) }, h("div", { part: classnames('header', {
        hidden: !!this.openChildren.length,
      }) }, h("slot", null), h("div", { part: "icon-right-container" }, !!this.children.length && !this.open && (h("scale-icon-navigation-right", { size: 20, color: this.active
        ? 'var(--telekom-color-primary-standard)'
        : 'var(--telekom-color-text-and-icon-standard)' })))), h("slot", { name: "children" }))));
  }
  get hostElement() { return this; }
  static get watchers() { return {
    "open": ["openChanged"]
  }; }
  static get style() { return telekomMobileMenuItemCss; }
}, [1, "scale-telekom-mobile-menu-item", {
    "open": [4],
    "active": [4],
    "level": [1],
    "currentLevel": [1, "current-level"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-telekom-mobile-menu-item", "scale-icon-navigation-right"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-telekom-mobile-menu-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TelekomMobileMenuItem);
      }
      break;
    case "scale-icon-navigation-right":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { TelekomMobileMenuItem as T, defineCustomElement as d };
