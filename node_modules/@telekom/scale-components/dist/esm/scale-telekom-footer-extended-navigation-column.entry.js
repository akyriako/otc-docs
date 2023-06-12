import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';

const telekomFooterExtendedNavigationColumnCss = "[part~='telekom-footer-extended-navigation-column']{--heading-color:var(--telekom-color-text-and-icon-standard);--heading-weight:var(--telekom-typography-font-weight-bold);--link-color:var(--telekom-color-text-and-icon-standard)}[part~='links-hidden']{display:none}[part~='links-expanded']{display:block}[part~='telekom-footer-extended-navigation-column-links']{font-size:var(--telekom-typography-font-size-body);line-height:140%}[part~='heading'],[part~='heading-button']{font-family:var(--telekom-typography-font-family-sans);font-size:var(--telekom-typography-font-size-body);line-height:140%;margin:0;color:var(--heading-color);font-weight:var(--heading-weight);background:none;border:none}[part~='heading-button']{display:flex;padding:0;width:100%;cursor:pointer;align-items:center;justify-content:space-between}[part~='heading']{display:none}[part~='heading-container'] h2{margin-block-start:0;margin-block-end:0}[part~='heading-container'] button{padding-top:20px;padding-bottom:20px}scale-divider{--spacing:0}@media screen and (min-width: 640px){[part~='heading-with-button']{display:none}[part~='heading']{display:block}[part~='telekom-footer-extended-navigation-column-links']{display:block}scale-divider{display:none}}[part~='expanded'] scale-icon-navigation-collapse-down{transform:rotate(0.5turn)}";

const TelekomFooterExtendedNavigationColumn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Set to `true` to expand */
    this.expanded = false;
    // Optional heading level - default h2
    this.headingLevel = '2';
    this.handleClick = () => {
      this.expanded = !this.expanded;
      // emitEvent(this, 'scaleExpand', { expanded: this.expanded });
    };
  }
  render() {
    return (h(Host, null, h("div", { part: classnames('telekom-footer-extended-navigation-column', {
        expanded: this.expanded,
      }) }, h("div", { part: "heading-container" }, h("span", { role: "heading", "aria-level": this.headingLevel, part: "heading-with-button" }, h("button", { onClick: this.handleClick, part: "heading-button" }, h("span", null, " ", this.heading), h("scale-icon-navigation-collapse-down", { selected: true, size: 16 }))), h("span", { part: "heading", role: "heading", "aria-level": this.headingLevel }, this.heading)), h("div", { part: classnames('telekom-footer-extended-navigation-column-links', this.expanded ? 'links-expanded' : 'links-hidden') }, h("slot", null)))));
  }
  get hostElement() { return getElement(this); }
};
TelekomFooterExtendedNavigationColumn.style = telekomFooterExtendedNavigationColumnCss;

export { TelekomFooterExtendedNavigationColumn as scale_telekom_footer_extended_navigation_column };
