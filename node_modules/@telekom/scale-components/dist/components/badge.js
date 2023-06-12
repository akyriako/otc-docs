import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { s as statusNote } from './status-note.js';

const badgeCss = ":host{--background-color-circle:var(--telekom-color-primary-standard);--color-circle:var(--telekom-color-text-and-icon-inverted-standard);--font-size-circle:var(--telekom-typography-font-size-badge);--font-weight-circle:bold;--border-radius-circle:var(--telekom-radius-circle);--font-color-label:var(--telekom-color-text-and-icon-standard);--_display-circle:flex;display:flex}:host([no-dot]){--_display-circle:none}:host::part(base){display:inline-flex;position:relative;align-items:center}:host::part(circle){display:var(--_display-circle);position:absolute;align-items:center;justify-content:center;font-size:var(--font-size-circle);font-weight:var(--font-weight-circle);border-radius:var(--border-radius-circle);background-color:var(--background-color-circle);color:var(--color-circle)}:host::part(circle has-count){padding:0 2px;top:-8px;right:-5px;height:14px;min-width:10px}:host::part(circle no-count){top:-4px;right:-2px;height:8px;min-width:8px}:host::part(label){margin-left:8px;font-weight:400;font-size:12px;color:var(--font-color-label);display:flex;align-items:center}:host::part(visually-hidden){clip-path:inset(100%);clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}";

const Badge = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** a11y text for getting meaningful value. */
    this.ariaLabelTranslation = '$label - $count item';
    this.formatter = new Intl.NumberFormat('en', {
      // @ts-ignore
      notation: 'compact',
    });
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: 'beta' });
  }
  getAriaLabel() {
    const filledText = this.ariaLabelTranslation
      .replace(/\$count/g, `${this.count}`)
      .replace(/\$label/g, `${this.label}`);
    return filledText;
  }
  render() {
    return (h(Host, null, h("span", { part: "base", "aria-label": this.count ? this.getAriaLabel() : this.label }, h("slot", null), h("span", { "aria-hidden": "true", part: classnames(`circle`, this.count ? `has-count` : 'no-count') }, !this.count ? '' : this.formatter.format(this.count)), h("span", { "aria-hidden": "true", id: "raw-count", part: "visually-hidden" }, this.count)), h("span", { id: "label", part: classnames('label', this.labelVisuallyHidden && 'visually-hidden'), "aria-hidden": "true" }, this.label)));
  }
  get hostElement() { return this; }
  static get style() { return badgeCss; }
}, [1, "scale-badge", {
    "count": [2],
    "label": [1],
    "labelVisuallyHidden": [4, "label-visually-hidden"],
    "ariaLabelTranslation": [1, "aria-label-translation"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-badge"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-badge":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Badge);
      }
      break;
  } });
}

export { Badge as B, defineCustomElement as d };
