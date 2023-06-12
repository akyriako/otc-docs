/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Component, Prop, Event, h, Host, State, Watch, Element, } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
import { emitEvent, generateUniqueId } from '../../utils/utils';
const SELECT_ICON = 'M20.65 7.4c-.3-.3-.75-.3-1.05 0L12 15 4.4 7.4c-.3-.3-.75-.3-1.05 0s-.3.75 0 1.05L12 17.1l8.65-8.65c.3-.25.3-.75 0-1.05z';
export class Input {
  constructor() {
    /** (optional) Input type */
    this.type = 'text';
    /** (optional) Input name */
    this.name = '';
    /** (optional) Input label variant */
    this.variant = 'static';
    /** (optional) Input label */
    this.label = '';
    /** (optional) Input size */
    this.size = '';
    /** (optional) Input helper text */
    this.helperText = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Input placeHolder */
    this.placeholder = '';
    /** (optional) Active switch */
    this.checked = false;
    /** (optional) Input value */
    this.value = '';
    /** (optional) Makes type `select` behave as a controlled component in React */
    this.controlled = false;
    /** Whether the input element has focus */
    this.hasFocus = false;
    this.internalId = generateUniqueId();
    // Handle checkbox/radio change (click on label)
    this.handleCheckChange = (event) => {
      this.checked = event.target.checked;
    };
    // Handle click on checkbox visual element
    this.handleCheckboxClick = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
      }
    };
    // Handle change on <select> independently
    // so we can allow "controlled" (React) behavior,
    // in which only the `value` changing does update
    // the actual <select> value, not the user's input.
    this.handleSelectChange = (event) => {
      const target = event.target;
      if (this.controlled) {
        emitEvent(this, 'scaleChange', { value: target.value });
        this.selectElement.value = String(this.value);
        this.forceUpdate = String(Date.now());
      }
      else {
        this.value = target.value || '';
        this.emitChange();
      }
    };
    this.handleInput = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
      emitEvent(this, 'scaleInput', event);
    };
    this.handleChange = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
    };
    this.handleFocus = () => {
      emitEvent(this, 'scaleFocus');
      this.hasFocus = true;
    };
    this.handleBlur = () => {
      emitEvent(this, 'scaleBlur');
      this.hasFocus = false;
    };
    this.handleKeyDown = (event) => {
      emitEvent(this, 'scaleKeyDown', event);
    };
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-' + this.internalId;
    }
    // Default icon for `select` type
    if (this.type === 'select' && this.icon == null) {
      this.icon = SELECT_ICON;
    }
  }
  componentDidLoad() {
    // tslint:disable-next-line:no-console
    statusNote({
      tag: 'deprecated',
      source: this.el,
      type: 'warn',
      extraMessage: `Please use <${{
        select: 'scale-dropdown',
        checkbox: 'scale-checkbox',
        radio: 'scale-radio-button',
        textarea: 'scale-textarea',
      }[this.type] || 'scale-text-field'}> instead.`,
    });
    // Keep this.value up-to-date for type="select".
    // This is important also for React, where `value` is used to control the element state.
    if (this.type === 'select') {
      const select = this.selectElement;
      const selectedValue = select.selectedIndex > -1
        ? select.options[select.selectedIndex].value
        : null;
      // If we have a `value` passed, set it on the <select> element
      // Otherwise, if we have an <option selected>, set its value on `value`
      if (this.value) {
        select.value = String(this.value);
      }
      else if (selectedValue) {
        this.value = selectedValue;
      }
    }
    // This is a workaroud to prevent a bug in Stencil:
    // when using slots without Shadow DOM (possible only with Stencil)
    // sometimes an update in the Light DOM does not trigger a re-render
    // thus causing unexpected results.
    // https://gitlab.com/scale-ds/scale-telekom/-/issues/16
    if (this.type === 'select' && this.selectElement) {
      this.mutationObserver = new MutationObserver(() => {
        this.forceUpdate = String(Date.now());
      });
      this.mutationObserver.observe(this.el, {
        childList: true,
        subtree: true,
      });
    }
  }
  componentWillUpdate() { }
  componentDidRender() {
    // When type `select` and `controlled` is true,
    // make sure the <select> is always in sync with the value.
    const value = this.value == null ? '' : this.value.toString();
    if (this.type === 'select' &&
      this.controlled &&
      this.selectElement.value.toString() !== value) {
      this.selectElement.value = value;
    }
    if (this.status !== '') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.el,
      });
    }
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  // We're not watching `value` like we used to
  // because we get unwanted `scaleChange` events
  // because how we keep this.value up-to-date for type="select"
  // `this.value = selectedValue`
  emitChange() {
    emitEvent(this, 'scaleChange', {
      value: this.value == null ? this.value : this.value.toString(),
    });
  }
  checkedChanged() {
    emitEvent(this, 'scaleChange', { value: this.checked });
  }
  render() {
    const Tag = this.type === 'textarea' ? 'textarea' : 'input';
    const ariaInvalidAttr = this.status === 'error' || this.invalid ? { 'aria-invalid': true } : {};
    const helperTextId = `helper-message-${this.internalId}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    if (this.type === 'checkbox') {
      return (h(Host, { checked: this.checked },
        h("div", { class: this.getCssClassMap() },
          h("input", Object.assign({ type: "checkbox", name: this.name, id: this.inputId, onChange: this.handleCheckChange, value: this.value, checked: this.checked, disabled: this.disabled }, ariaInvalidAttr, ariaDescribedByAttr)),
          h("div", { class: classNames('input__checkbox-container'), onClick: this.handleCheckboxClick },
            h("span", { class: classNames('input__checkbox-placeholder') }),
            !!this.icon && this.checked && (h("scale-icon", { path: this.icon, size: 12 }))),
          h("label", { htmlFor: this.inputId }, this.label),
          !!this.helperText && (h("div", { class: "input__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" },
            h("div", { class: "input__helper-text" }, this.helperText))))));
    }
    if (this.type === 'radio') {
      return (h(Host, null,
        h("div", { class: this.getCssClassMap() },
          h("input", Object.assign({ type: "radio", name: this.name, id: this.inputId, onChange: this.handleCheckChange, value: this.value, checked: this.checked, disabled: this.disabled }, ariaInvalidAttr, ariaDescribedByAttr)),
          h("label", { htmlFor: this.inputId }, this.label),
          !!this.helperText && (h("div", { class: "input__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" },
            h("div", { class: "input__helper-text" }, this.helperText))))));
    }
    return (h(Host, null,
      h("div", { class: this.getCssClassMap() },
        h("label", { class: "input__label", htmlFor: this.inputId }, this.label),
        this.type === 'select' ? (h("div", { class: "input__select-wrapper" },
          h("select", Object.assign({ ref: (el) => (this.selectElement = el), class: classNames('input__select'), 
            // @ts-ignore
            value: this.value, onChange: this.handleSelectChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, disabled: this.disabled, required: this.required, multiple: this.multiple, id: this.inputId, name: this.name, size: this.visibleSize }, ariaInvalidAttr, ariaDescribedByAttr),
            h("slot", null)),
          !!this.icon && h("scale-icon", { path: this.icon }))) : (h(Tag, Object.assign({ type: this.type, class: classNames(`input__${this.type === 'textarea' ? 'textarea' : 'input'}`, this.customResize && this.customResize.id), style: !!this.resize && { resize: this.resize }, value: this.value }, (!!this.name ? { name: this.name } : {}), { required: this.required, minLength: this.minLength, maxLength: this.maxLength, id: this.inputId, onInput: this.handleInput, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown }, (!!this.placeholder ? { placeholder: this.placeholder } : {}), { disabled: this.disabled }, (!!this.rows ? { rows: this.rows } : {}), (!!this.cols ? { cols: this.cols } : {}), ariaInvalidAttr, ariaDescribedByAttr))),
        this.type === 'textarea' && this.variant === 'animated' && (h("span", { class: "input__textarea-label-safety-background", "aria-hidden": "true" })),
        (!!this.helperText || !!this.counter) && (h("div", { class: "input__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" },
          !!this.helperText && (h("div", { class: "input__helper-text" }, this.helperText)),
          this.counter && (h("div", { class: "input__counter" },
            !!this.value ? String(this.value).length : 0,
            " /",
            ' ',
            this.maxLength)))))));
  }
  getCssClassMap() {
    return classNames('input', this.type && `input--type-${this.type}`, this.hasFocus && 'input--has-focus', this.checked && `input--checked`, this.resize && `input--resize-${this.resize}`, this.variant && `input--variant-${this.variant}`, this.disabled && `input--disabled`, this.transparent && 'input--transparent', this.status && `input--status-${this.status}`, this.invalid && `input--status-error`, this.size && `input--size-${this.size}`, this.value != null && this.value !== '' && 'animated');
  }
  static get is() { return "scale-input"; }
  static get originalStyleUrls() { return {
    "$": ["./input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'email'\n    | 'hidden'\n    | 'number'\n    | 'password'\n    | 'tel'\n    | 'text'\n    | 'checkbox'\n    | 'radio'\n    | 'select'\n    | 'textarea'\n    | 'url'",
        "resolved": "\"checkbox\" | \"email\" | \"hidden\" | \"number\" | \"password\" | \"radio\" | \"select\" | \"tel\" | \"text\" | \"textarea\" | \"url\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input type"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input name"
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'animated' | 'static'",
        "resolved": "\"animated\" | \"static\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input label variant"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'static'"
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) Input label"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input size"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "''"
    },
    "rows": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) textarea row"
      },
      "attribute": "rows",
      "reflect": false
    },
    "cols": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) textarea column"
      },
      "attribute": "cols",
      "reflect": false
    },
    "helperText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input helper text"
      },
      "attribute": "helper-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "status": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "- invalid should replace status"
          }],
        "text": ""
      },
      "attribute": "status",
      "reflect": false,
      "defaultValue": "''"
    },
    "invalid": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input status"
      },
      "attribute": "invalid",
      "reflect": false,
      "defaultValue": "false"
    },
    "maxLength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input max length"
      },
      "attribute": "max-length",
      "reflect": false
    },
    "minLength": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input min length"
      },
      "attribute": "min-length",
      "reflect": false
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input placeHolder"
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "''"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input disabled"
      },
      "attribute": "disabled",
      "reflect": false
    },
    "required": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input required"
      },
      "attribute": "required",
      "reflect": false
    },
    "counter": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input counter"
      },
      "attribute": "counter",
      "reflect": false
    },
    "checked": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Active switch"
      },
      "attribute": "checked",
      "reflect": true,
      "defaultValue": "false"
    },
    "resize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'unset' | 'none' | 'vertical' | 'horizontal'",
        "resolved": "\"horizontal\" | \"none\" | \"unset\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) textarea resize"
      },
      "attribute": "resize",
      "reflect": false
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "string | number | null",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input value"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "inputId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input checkbox id"
      },
      "attribute": "input-id",
      "reflect": false
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Input checkbox checked icon"
      },
      "attribute": "icon",
      "reflect": false
    },
    "multiple": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) select multiple options"
      },
      "attribute": "multiple",
      "reflect": false
    },
    "visibleSize": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) the number of visible options in a select drop-down list"
      },
      "attribute": "visible-size",
      "reflect": false
    },
    "transparent": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) input background transparent"
      },
      "attribute": "transparent",
      "reflect": false
    },
    "controlled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Makes type `select` behave as a controlled component in React"
      },
      "attribute": "controlled",
      "reflect": false,
      "defaultValue": "false"
    },
    "styles": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Injected CSS styles"
      },
      "attribute": "styles",
      "reflect": false
    }
  }; }
  static get states() { return {
    "customResize": {},
    "hasFocus": {},
    "forceUpdate": {}
  }; }
  static get events() { return [{
      "method": "scaleInput",
      "name": "scale-input",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a keyboard input occurred."
      },
      "complexType": {
        "original": "KeyboardEvent",
        "resolved": "KeyboardEvent",
        "references": {
          "KeyboardEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "scaleInputLegacy",
      "name": "scaleInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "KeyboardEvent",
        "resolved": "KeyboardEvent",
        "references": {
          "KeyboardEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "scaleChange",
      "name": "scale-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the value has changed."
      },
      "complexType": {
        "original": "InputChangeEventDetail",
        "resolved": "InputChangeEventDetail",
        "references": {
          "InputChangeEventDetail": {
            "location": "local"
          }
        }
      }
    }, {
      "method": "scaleChangeLegacy",
      "name": "scaleChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "InputChangeEventDetail",
        "resolved": "InputChangeEventDetail",
        "references": {
          "InputChangeEventDetail": {
            "location": "local"
          }
        }
      }
    }, {
      "method": "scaleFocus",
      "name": "scale-focus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the input has focus."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "scaleFocusLegacy",
      "name": "scaleFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "scaleBlur",
      "name": "scale-blur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the input loses focus."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "scaleBlurLegacy",
      "name": "scaleBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "scaleKeyDown",
      "name": "scale-keydown",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted on keydown."
      },
      "complexType": {
        "original": "KeyboardEvent",
        "resolved": "KeyboardEvent",
        "references": {
          "KeyboardEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "scaleKeyDownLegacy",
      "name": "scaleKeyDown",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "KeyboardEvent",
        "resolved": "KeyboardEvent",
        "references": {
          "KeyboardEvent": {
            "location": "global"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "checked",
      "methodName": "checkedChanged"
    }]; }
}
