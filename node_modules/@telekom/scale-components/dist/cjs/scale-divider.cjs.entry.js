'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');

const dividerCss = ":host{--width:100%;--height:100%;--spacing:var(--telekom-spacing-unit-x3);--color:var(--telekom-color-ui-faint);--border-width:var(--telekom-spacing-unit-x025);--min-height-vertical:var(--telekom-spacing-unit-x6);width:var(--width);height:var(--height)}.divider{padding:var(--spacing)}.divider--vertical{display:inline-flex;height:inherit}.divider__horizontal{margin:0;border:0;border-top:var(--border-width) solid var(--color)}.divider__vertical{display:inline-flex;height:inherit;min-height:var(--min-height-vertical);border-left:var(--border-width) solid var(--color)}";

const Divider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** (optional) Divider vertical */
    this.vertical = false;
  }
  render() {
    return (index.h(index.Host, null, this.styles && index.h("style", null, this.styles), index.h("div", { class: this.getCssClassMap(), "aria-hidden": "true", part: index$1.classnames('base', this.vertical && 'vertical') }, !this.vertical ? (index.h("hr", { class: "divider__horizontal", part: "rule-horizontal" })) : (index.h("span", { class: "divider__vertical", part: "rule-vertical" })))));
  }
  getCssClassMap() {
    return index$1.classnames('divider', this.vertical && `divider--vertical`);
  }
};
Divider.style = dividerCss;

exports.scale_divider = Divider;
