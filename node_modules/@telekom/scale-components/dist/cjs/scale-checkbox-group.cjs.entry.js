'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const statusNote = require('./status-note-dceee5a3.js');

const checkboxGroupCss = ":host,.checkbox-group{--spacing-left-container:var(--telekom-spacing-unit-x8);--spacing-left-checkbox:var(--telekom-spacing-unit-x2);--spacing-top-slotted-item:var(--telekom-spacing-unit-x3)}.checkbox-group{display:inline-flex;flex-direction:column;position:relative}.checkbox-group [part='fieldset']{display:flex;flex-direction:column;border:0;padding:0;margin:0;margin-left:var(--spacing-left-container)}.checkbox-group [part='parent-checkbox']{line-height:var(--telekom-typography-line-spacing-standard);--font-weight-label:var(--telekom-typography-font-weight-bold)}.checkbox-group legend{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.checkbox-group scale-checkbox{margin-top:var(--spacing-top-slotted-item)}";

const CheckboxGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** (optional) Input label */
    this.label = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Input value */
    this.value = '';
    this.selectText = 'Select all';
    this.unselectText = 'Unselect all';
  }
  handleCheckboxChange(ev) {
    const el = ev.composedPath()[0];
    const { tagName, checked } = el;
    // make sure the event belongs to a scale checkbox
    if (tagName.toLowerCase() === 'scale-checkbox') {
      if (el !== this.groupNode) {
        this.updateParentCheckboxState();
      }
      else {
        this.updateChildrenCheckboxStates(checked);
        this.updateParentCheckboxState();
      }
    }
  }
  componentDidRender() {
    if (this.status !== '') {
      statusNote.statusNote({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.host,
      });
    }
    if (this.host.hasAttribute('aria-label')) {
      statusNote.statusNote({
        tag: 'deprecated',
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckboxGroup" property!',
        type: 'warn',
        source: this.host,
      });
    }
  }
  getChildNodes() {
    return Array.from(this.host.querySelector('fieldset').querySelectorAll('scale-checkbox'));
  }
  updateChildrenCheckboxStates(checked) {
    const childNodes = this.getChildNodes().filter((node) => !node.disabled);
    childNodes.forEach((node) => {
      if (checked !== undefined) {
        node.checked = checked;
        node.indeterminate = false;
      }
    });
  }
  updateParentCheckboxState() {
    const childNodes = this.getChildNodes();
    const checked = childNodes === null || childNodes === void 0 ? void 0 : childNodes.map((childNode) => childNode.checked);
    const indeterminate = childNodes === null || childNodes === void 0 ? void 0 : childNodes.map((childNode) => childNode.indeterminate);
    const disabled = childNodes === null || childNodes === void 0 ? void 0 : childNodes.map((childNode) => childNode.disabled);
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const someIndeterminate = indeterminate.some(Boolean);
    const allDisabled = disabled.every(Boolean);
    this.checked = allChecked || someChecked;
    this.indeterminate = someIndeterminate || (someChecked && !allChecked);
    this.disabled = allDisabled;
    this.actionText = allChecked ? this.unselectText : this.selectText;
  }
  render() {
    return (index.h(index.Host, { class: "checkbox-group" }, index.h("scale-checkbox", { ref: (el) => (this.groupNode = el), name: this.name, label: this.label, ariaLabelCheckbox: `${this.ariaLabelCheckboxGroup || this.label} - ${this.actionText}`, helperText: this.helperText, status: this.status, invalid: this.invalid, value: this.value, inputId: this.inputId, checked: this.checked, indeterminate: this.indeterminate, disabled: this.disabled, part: "parent-checkbox" }), index.h("fieldset", { part: "fieldset" }, index.h("legend", null, this.ariaLabelCheckboxGroup || this.label), index.h("slot", null))));
  }
  componentDidLoad() {
    this.updateParentCheckboxState();
  }
  get host() { return index.getElement(this); }
};
CheckboxGroup.style = checkboxGroupCss;

exports.scale_checkbox_group = CheckboxGroup;
