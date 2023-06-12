import { r as registerInstance, h, a as Host } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';

const dividerCss = ":host{--width:100%;--height:100%;--spacing:var(--telekom-spacing-unit-x3);--color:var(--telekom-color-ui-faint);--border-width:var(--telekom-spacing-unit-x025);--min-height-vertical:var(--telekom-spacing-unit-x6);width:var(--width);height:var(--height)}.divider{padding:var(--spacing)}.divider--vertical{display:inline-flex;height:inherit}.divider__horizontal{margin:0;border:0;border-top:var(--border-width) solid var(--color)}.divider__vertical{display:inline-flex;height:inherit;min-height:var(--min-height-vertical);border-left:var(--border-width) solid var(--color)}";

const Divider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** (optional) Divider vertical */
    this.vertical = false;
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), "aria-hidden": "true", part: classnames('base', this.vertical && 'vertical') }, !this.vertical ? (h("hr", { class: "divider__horizontal", part: "rule-horizontal" })) : (h("span", { class: "divider__vertical", part: "rule-vertical" })))));
  }
  getCssClassMap() {
    return classnames('divider', this.vertical && `divider--vertical`);
  }
};
Divider.style = dividerCss;

export { Divider as scale_divider };
