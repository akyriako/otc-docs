import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { s as statusNote } from './status-note.js';
import { d as defineCustomElement$6 } from './checkbox.js';
import { d as defineCustomElement$5 } from './action-indeterminate.js';
import { d as defineCustomElement$4 } from './action-success.js';
import { d as defineCustomElement$3 } from './alert-error.js';
import { d as defineCustomElement$2 } from './alert-information.js';

const checkboxGroupCss = ":host,.checkbox-group{--spacing-left-container:var(--telekom-spacing-unit-x8);--spacing-left-checkbox:var(--telekom-spacing-unit-x2);--spacing-top-slotted-item:var(--telekom-spacing-unit-x3)}.checkbox-group{display:inline-flex;flex-direction:column;position:relative}.checkbox-group [part='fieldset']{display:flex;flex-direction:column;border:0;padding:0;margin:0;margin-left:var(--spacing-left-container)}.checkbox-group [part='parent-checkbox']{line-height:var(--telekom-typography-line-spacing-standard);--font-weight-label:var(--telekom-typography-font-weight-bold)}.checkbox-group legend{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.checkbox-group scale-checkbox{margin-top:var(--spacing-top-slotted-item)}";

const CheckboxGroup = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
      statusNote({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.host,
      });
    }
    if (this.host.hasAttribute('aria-label')) {
      statusNote({
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
    return (h(Host, { class: "checkbox-group" }, h("scale-checkbox", { ref: (el) => (this.groupNode = el), name: this.name, label: this.label, ariaLabelCheckbox: `${this.ariaLabelCheckboxGroup || this.label} - ${this.actionText}`, helperText: this.helperText, status: this.status, invalid: this.invalid, value: this.value, inputId: this.inputId, checked: this.checked, indeterminate: this.indeterminate, disabled: this.disabled, part: "parent-checkbox" }), h("fieldset", { part: "fieldset" }, h("legend", null, this.ariaLabelCheckboxGroup || this.label), h("slot", null))));
  }
  componentDidLoad() {
    this.updateParentCheckboxState();
  }
  get host() { return this; }
  static get style() { return checkboxGroupCss; }
}, [4, "scale-checkbox-group", {
    "name": [1],
    "label": [1],
    "ariaLabelCheckboxGroup": [1, "aria-label-checkbox-group"],
    "helperText": [1, "helper-text"],
    "status": [1],
    "invalid": [4],
    "value": [1],
    "inputId": [1025, "input-id"],
    "styles": [1],
    "selectText": [1, "select-text"],
    "unselectText": [1, "unselect-text"],
    "checked": [32],
    "indeterminate": [32],
    "disabled": [32]
  }, [[0, "scaleChange", "handleCheckboxChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-checkbox-group", "scale-checkbox", "scale-icon-action-indeterminate", "scale-icon-action-success", "scale-icon-alert-error", "scale-icon-alert-information"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-checkbox-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CheckboxGroup);
      }
      break;
    case "scale-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "scale-icon-action-indeterminate":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "scale-icon-action-success":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "scale-icon-alert-error":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "scale-icon-alert-information":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const ScaleCheckboxGroup = CheckboxGroup;
const defineCustomElement = defineCustomElement$1;

export { ScaleCheckboxGroup, defineCustomElement };
