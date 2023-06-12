'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');

const telekomFooterExtendedNavigationColumnCss = "[part~='telekom-footer-extended-navigation-column']{--heading-color:var(--telekom-color-text-and-icon-standard);--heading-weight:var(--telekom-typography-font-weight-bold);--link-color:var(--telekom-color-text-and-icon-standard)}[part~='links-hidden']{display:none}[part~='links-expanded']{display:block}[part~='telekom-footer-extended-navigation-column-links']{font-size:var(--telekom-typography-font-size-body);line-height:140%}[part~='heading'],[part~='heading-button']{font-family:var(--telekom-typography-font-family-sans);font-size:var(--telekom-typography-font-size-body);line-height:140%;margin:0;color:var(--heading-color);font-weight:var(--heading-weight);background:none;border:none}[part~='heading-button']{display:flex;padding:0;width:100%;cursor:pointer;align-items:center;justify-content:space-between}[part~='heading']{display:none}[part~='heading-container'] h2{margin-block-start:0;margin-block-end:0}[part~='heading-container'] button{padding-top:20px;padding-bottom:20px}scale-divider{--spacing:0}@media screen and (min-width: 640px){[part~='heading-with-button']{display:none}[part~='heading']{display:block}[part~='telekom-footer-extended-navigation-column-links']{display:block}scale-divider{display:none}}[part~='expanded'] scale-icon-navigation-collapse-down{transform:rotate(0.5turn)}";

const TelekomFooterExtendedNavigationColumn = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("div", { part: index$1.classnames('telekom-footer-extended-navigation-column', {
        expanded: this.expanded,
      }) }, index.h("div", { part: "heading-container" }, index.h("span", { role: "heading", "aria-level": this.headingLevel, part: "heading-with-button" }, index.h("button", { onClick: this.handleClick, part: "heading-button" }, index.h("span", null, " ", this.heading), index.h("scale-icon-navigation-collapse-down", { selected: true, size: 16 }))), index.h("span", { part: "heading", role: "heading", "aria-level": this.headingLevel }, this.heading)), index.h("div", { part: index$1.classnames('telekom-footer-extended-navigation-column-links', this.expanded ? 'links-expanded' : 'links-hidden') }, index.h("slot", null)))));
  }
  get hostElement() { return index.getElement(this); }
};
TelekomFooterExtendedNavigationColumn.style = telekomFooterExtendedNavigationColumnCss;

exports.scale_telekom_footer_extended_navigation_column = TelekomFooterExtendedNavigationColumn;
