import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { s as statusNote } from './status-note.js';

const calloutCss = ":host{--position:absolute;--background:var(--telekom-color-ui-extra-strong);--color:var(--telekom-color-text-and-icon-inverted-standard);--spacing:var(--telekom-spacing-unit-x6);--min-width:6rem;--aspect-ratio:1;--rotation:0deg;--font-standard:var(--telekom-text-style-lead-text);--font-small:var(--telekom-text-style-body-bold);--font-large:var(--telekom-text-style-heading-1);box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;text-align:center;border-radius:50%;position:var(--position);background:var(--background);color:var(--color);min-width:var(--min-width);aspect-ratio:var(--aspect-ratio);min-height:var(--min-width);transform:rotateZ(var(--rotation, 0deg))}[part='base']{box-sizing:border-box;padding:var(--spacing);font:var(--font-standard);font-weight:var(--telekom-typography-font-weight-bold);line-height:var(--telekom-typography-line-spacing-tight)}:host([variant='primary']){--background:var(--telekom-color-primary-standard);--color:var(--telekom-color-text-and-icon-white-standard)}:host([variant='black']){--background:var(--telekom-color-ui-black, #000000);--color:var(--telekom-color-text-and-icon-white-standard)}:host([variant='white']){--background:var(--telekom-color-ui-white, #ffffff);--color:var(--telekom-color-text-and-icon-black-standard)}:host([variant='blue']){--background:var(--telekom-color-additional-cyan-400);--color:var(--telekom-color-text-and-icon-black-standard)}::slotted(*){display:block}::slotted(.scl-callout-text-small){font:var(--font-small)}::slotted(.scl-callout-text-large){font:var(--font-large)}";

/**
 * Adds the `px` suffix to a string number
 * but leaves other units untouched.
 * 1  -> 1px
 * 5% -> 5%
 */
const numToPx = (val) => (Number.isNaN(Number(val)) ? val : val + 'px');
const Callout = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** (optional) Degree of rotation */
    this.rotation = 0;
    /**
     * `aspect-ratio` is not enough when dealing with text :(
     */
    this.adjustSize = () => {
      const { width, height } = this.baseEl.getBoundingClientRect();
      const largest = Math.max(width, height);
      this.hostElement.style.setProperty('--min-width', `${largest}px`);
    };
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: 'beta' });
    this.syncPropsToCSS();
  }
  componentDidLoad() {
    const observer = new MutationObserver(() => {
      this.adjustSize();
    });
    observer.observe(this.hostElement, {
      attributes: false,
      childList: true,
      subtree: true,
      characterData: true,
    });
    this.mo = observer;
    // Wait for full styles before measuring
    window.requestAnimationFrame(this.adjustSize);
  }
  disconnectedCallback() {
    if (this.mo) {
      this.mo.disconnect();
    }
  }
  rotationChanged() {
    this.syncPropsToCSS();
  }
  syncPropsToCSS() {
    this.hostElement.style.setProperty('--rotation', `${this.rotation}deg`);
    if (this.top != null ||
      this.right != null ||
      this.bottom != null ||
      this.left != null) {
      Object.assign(this.hostElement.style, {
        top: numToPx(this.top),
        right: numToPx(this.right),
        bottom: numToPx(this.bottom),
        left: numToPx(this.left),
      });
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: "base", ref: (el) => (this.baseEl = el) }, h("slot", null))));
  }
  get hostElement() { return this; }
  static get watchers() { return {
    "rotation": ["rotationChanged"],
    "top": ["rotationChanged"],
    "right": ["rotationChanged"],
    "bottom": ["rotationChanged"],
    "left": ["rotationChanged"]
  }; }
  static get style() { return calloutCss; }
}, [1, "scale-callout", {
    "variant": [1],
    "rotation": [2],
    "top": [1],
    "right": [1],
    "bottom": [1],
    "left": [1],
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-callout"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-callout":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Callout);
      }
      break;
  } });
}

const ScaleCallout = Callout;
const defineCustomElement = defineCustomElement$1;

export { ScaleCallout, defineCustomElement };
