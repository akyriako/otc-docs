import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';

const Accordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "headingLevel": ["headingLevelChanged"],
    "iconLocation": ["iconLocationChanged"]
  }; }
};

export { Accordion as scale_accordion };
