'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Will be used for both `width` and `height`, all icons are square.
     * Keep in mind the `viewBox` attribute is set to "0 0 24 24".
     */
    this.size = 24;
    /** The SVG `fill` attribute */
    this.fill = 'var(--icon-color, currentColor)';
    /** The SVG `stroke` attribute */
    this.stroke = 'transparent';
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
    /** (optional) If `true` the svg element will get aria-hidden="true" */
    this.decorative = false;
  }
  render() {
    const pathAttributes = {
      fill: this.fill,
      stroke: this.stroke,
    };
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return (index.h(index.Host, null, index.h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", class: this.getCssClassMap(), part: "base", width: this.size, height: this.size, viewBox: "0 0 24 24", role: "img" }, ariaHidden, focusable), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), this.path ? (index.h("path", Object.assign({ d: this.path }, pathAttributes, { part: "path" }))) : (index.h("use", Object.assign({ xlinkHref: `#icon-${this.name}` }, pathAttributes))))));
  }
  getCssClassMap() {
    return index$1.classnames('icon');
  }
};
Icon.style = iconCss;

exports.scale_icon = Icon;
