'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');

const Accordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, this.styles && index.h("style", null, this.styles), index.h("div", { class: this.getCssClassMap(), part: "base" }, index.h("slot", null))));
  }
  getCssClassMap() {
    return index$1.classnames('accordion');
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "headingLevel": ["headingLevelChanged"],
    "iconLocation": ["iconLocationChanged"]
  }; }
};

exports.scale_accordion = Accordion;
