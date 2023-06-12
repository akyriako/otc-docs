import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { s as statusNote } from './status-note-0089e9c9.js';

const calloutCss = ":host{--position:absolute;--background:var(--telekom-color-ui-extra-strong);--color:var(--telekom-color-text-and-icon-inverted-standard);--spacing:var(--telekom-spacing-unit-x6);--min-width:6rem;--aspect-ratio:1;--rotation:0deg;--font-standard:var(--telekom-text-style-lead-text);--font-small:var(--telekom-text-style-body-bold);--font-large:var(--telekom-text-style-heading-1);box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;text-align:center;border-radius:50%;position:var(--position);background:var(--background);color:var(--color);min-width:var(--min-width);aspect-ratio:var(--aspect-ratio);min-height:var(--min-width);transform:rotateZ(var(--rotation, 0deg))}[part='base']{box-sizing:border-box;padding:var(--spacing);font:var(--font-standard);font-weight:var(--telekom-typography-font-weight-bold);line-height:var(--telekom-typography-line-spacing-tight)}:host([variant='primary']){--background:var(--telekom-color-primary-standard);--color:var(--telekom-color-text-and-icon-white-standard)}:host([variant='black']){--background:var(--telekom-color-ui-black, #000000);--color:var(--telekom-color-text-and-icon-white-standard)}:host([variant='white']){--background:var(--telekom-color-ui-white, #ffffff);--color:var(--telekom-color-text-and-icon-black-standard)}:host([variant='blue']){--background:var(--telekom-color-additional-cyan-400);--color:var(--telekom-color-text-and-icon-black-standard)}::slotted(*){display:block}::slotted(.scl-callout-text-small){font:var(--font-small)}::slotted(.scl-callout-text-large){font:var(--font-large)}";

/**
 * Adds the `px` suffix to a string number
 * but leaves other units untouched.
 * 1  -> 1px
 * 5% -> 5%
 */
const numToPx = (val) => (Number.isNaN(Number(val)) ? val : val + 'px');
const Callout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "rotation": ["rotationChanged"],
    "top": ["rotationChanged"],
    "right": ["rotationChanged"],
    "bottom": ["rotationChanged"],
    "left": ["rotationChanged"]
  }; }
};
Callout.style = calloutCss;

export { Callout as scale_callout };
