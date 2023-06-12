import { r as registerInstance, h, a as Host } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';

const loadingSpinnerCss = ":host{display:inline-flex;--size-outer-small:28px;--size-outer-large:56px;--size-inner-small:28px;--size-inner-large:56px;--line-height-size-small:24px;--line-height-size-large:48px;--font-weight:var(--telekom-typography-font-weight-bold);--font-size:var(--telekom-typography-font-size-body);--color-circle-primary:var(--telekom-color-primary-standard);--color-circle-primary-inner:var(--telekom-color-ui-subtle);--color-text-primary:var(--telekom-color-text-and-icon-additional);--color-circle-white:var(--telekom-color-ui-base);--color-circle-white-inner:var(--telekom-color-ui-regular);--color-text-white:var(--telekom-color-text-and-icon-white-standard)}.sr-only{position:absolute;left:-10000px;overflow:hidden}.spinner{display:inline-flex;align-items:center}.spinner.spinner--alignment-vertical{flex-direction:column}.spinner .spinner__text{font-weight:var(--font-weight);font-size:var(--font-size);color:var(--color-text-primary)}.spinner.spinner--variant-white .spinner__text{color:var(--color-text-white)}.spinner.spinner--alignment-horizontal .spinner__text{display:flex;align-self:center;margin-left:var(--spacing);margin-top:3px}.spinner.spinner--alignment-horizontal.spinner--size-small .spinner__text{line-height:var(--line-height-size-small);padding-left:12px}.spinner.spinner--alignment-horizontal.spinner--size-large .spinner__text{line-height:var(--line-height-size-large);margin-top:5px;padding-left:12px}.spinner.spinner--alignment-vertical .spinner__text{margin-top:var(--spacing)}.spinner.spinner--alignment-vertical.spinner--size-small .spinner__container{height:28px;width:28px;padding-bottom:4px}.spinner.spinner--alignment-vertical.spinner--size-large .spinner__container{height:56px;width:56px;padding-bottom:4px}.spinner.spinner--alignment-horizontal.spinner--size-small .spinner__container{height:28px;width:28px;text-align:left}.spinner.spinner--alignment-horizontal.spinner--size-large .spinner__container{height:56px;width:56px;text-align:left}.spinner .spinner__container .spinner__circle{animation:rotate 2s linear infinite;z-index:2;position:absolute;width:var(--size-inner-small);height:var(--size-inner-small)}.spinner .spinner__container .spinner__circle-background{animation:rotate 2s linear infinite;position:absolute;width:var(--size-outer-small);height:var(--size-outer-small)}.spinner.spinner--size-large .spinner__container .spinner__circle-background{width:var(--size-outer-large);height:var(--size-outer-large)}.spinner.spinner--size-large .spinner__container .spinner__circle{width:var(--size-inner-large);height:var(--size-inner-large)}.spinner.spinner--variant-white .spinner__container .spinner__circle-background .path{stroke:var(--color-circle-white-inner)}.spinner .spinner__container .spinner__circle-background .path{stroke:var(--color-circle-primary-inner)}.spinner.spinner--variant-white .spinner__container .spinner__circle .path{stroke:white}.spinner .spinner__container .spinner__circle .path{animation:dash 1.5s ease-in-out infinite;stroke:var(--color-circle-primary)}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}@media screen and (forced-colors: active), (-ms-high-contrast: active){.spinner .spinner__container .spinner__circle-background .path{stroke:none}.spinner .spinner__container .spinner__circle .path{stroke:white}.spinner.spinner--variant-white .spinner__container .spinner__circle-background .path{stroke:none}.spinner.spinner--variant-white .spinner__container .spinner__circle .path{stroke:white}}";

let i = 0;
const LoadingSpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // todo the variant white should be renamed for dark mode
    this.variant = 'primary';
    this.alignment = 'horizontal';
    this.size = 'small';
  }
  componentWillLoad() {
    i++;
  }
  render() {
    return (h(Host, null, h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, h("div", { part: "container", class: "spinner__container" }, h("svg", { class: "spinner__circle", viewBox: "0 0 50 50", "aria-hidden": "true" }, h("circle", { class: "path", cx: "25", cy: "25", r: "20", fill: "none", "stroke-width": "4" })), h("svg", { class: "spinner__circle-background", viewBox: "0 0 50 50", "aria-hidden": "true" }, h("circle", { class: "path", cx: "25", cy: "25", r: "20", fill: "none", "stroke-width": "4" }))), h("div", { class: "sr-only", "aria-live": "polite", id: `spinner-label-${i}` }, this.text || 'Loading'), this.text ? (h("div", { part: "text", class: "spinner__text", "aria-hidden": "true" }, this.text)) : (h("div", null)))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const name = 'spinner';
    const prefix = mode === 'basePart' ? '' : `${name}--`;
    return classnames(name, this.alignment && `${prefix}alignment-${this.alignment}`, this.variant && `${prefix}variant-${this.variant}`, this.size && `${prefix}size-${this.size}`, this.text && `${prefix}text`);
  }
};
LoadingSpinner.style = loadingSpinnerCss;

export { LoadingSpinner as scale_loading_spinner };
