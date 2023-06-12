import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const Accordion = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** If `true`, only one scale-collapsible within the accordion can be open at a time */
    this.dependent = false;
    /** If `true`, scale-collapsibles within the accordion will all be open initially, unless this is dependant */
    this.expanded = false;
    /** Heading level for scale-collapsible descendants */
    this.headingLevel = null;
    this.iconLocation = 'left';
  }
  /**
   * Handle `dependent`
   */
  collapsibleHandler(event) {
    event.stopPropagation();
    const { expanded } = event.detail;
    if (!this.dependent || expanded === false) {
      return;
    }
    this.getCollapsibleChildren().forEach((child) => {
      if (child !== event.target && child.hasAttribute('expanded')) {
        child.expanded = false;
      }
    });
  }
  headingLevelChanged(newValue) {
    this.propagatePropsToChildren(newValue, this.iconLocation);
  }
  iconLocationChanged(newValue) {
    this.propagatePropsToChildren(this.headingLevel, newValue);
  }
  connectedCallback() {
    /**
     * Handle `expanded`
     */
    if (!this.dependent) {
      this.getCollapsibleChildren().forEach((child) => {
        child.expanded = this.expanded;
      });
    }
  }
  componentDidLoad() {
    if (this.headingLevel !== null || this.iconLocation !== 'left') {
      this.propagatePropsToChildren(this.headingLevel, this.iconLocation);
    }
  }
  getCollapsibleChildren() {
    return Array.from(this.el.children).filter((el) => el.tagName === 'SCALE-COLLAPSIBLE');
  }
  propagatePropsToChildren(headingLevel, iconLocation) {
    this.getCollapsibleChildren().forEach((item) => {
      item.headingLevel = headingLevel;
      item.iconLocation = iconLocation;
    });
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), part: "base" }, h("slot", null))));
  }
  getCssClassMap() {
    return classnames('accordion');
  }
  get el() { return this; }
  static get watchers() { return {
    "headingLevel": ["headingLevelChanged"],
    "iconLocation": ["iconLocationChanged"]
  }; }
}, [1, "scale-accordion", {
    "styles": [1],
    "dependent": [4],
    "expanded": [4],
    "headingLevel": [2, "heading-level"],
    "iconLocation": [1, "icon-location"]
  }, [[0, "scale-expand", "collapsibleHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-accordion"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-accordion":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Accordion);
      }
      break;
  } });
}

const ScaleAccordion = Accordion;
const defineCustomElement = defineCustomElement$1;

export { ScaleAccordion, defineCustomElement };
