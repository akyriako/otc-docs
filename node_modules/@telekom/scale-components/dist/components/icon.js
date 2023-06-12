import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const Icon = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    return (h(Host, null, h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", class: this.getCssClassMap(), part: "base", width: this.size, height: this.size, viewBox: "0 0 24 24", role: "img" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), this.path ? (h("path", Object.assign({ d: this.path }, pathAttributes, { part: "path" }))) : (h("use", Object.assign({ xlinkHref: `#icon-${this.name}` }, pathAttributes))))));
  }
  getCssClassMap() {
    return classnames('icon');
  }
  static get style() { return iconCss; }
}, [0, "scale-icon", {
    "name": [1],
    "path": [1],
    "size": [514],
    "fill": [1],
    "stroke": [1],
    "focusable": [4],
    "decorative": [4],
    "accessibilityTitle": [1, "accessibility-title"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}

export { Icon as I, defineCustomElement as d };
