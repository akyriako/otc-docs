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
import { Component, Prop, State, h, Element, Host, Watch, Event, } from '@stencil/core';
import classNames from 'classnames';
import { queryShadowRoot, isHidden, isFocusable } from '../../utils/focus-trap';
import { animateTo, KEYFRAMES } from '../../utils/animate';
import { emitEvent } from '../../utils/utils';
const supportsResizeObserver = 'ResizeObserver' in window;
/*
  TODO
  ====
  - [ ] save focus of last element previous to opening the modal
  - [ ] put animations in tokens
 */
export class Modal {
  constructor() {
    /** (optional) Modal size */
    this.size = 'default';
    /** (optional) If `true`, the Modal is open. */
    this.opened = false;
    /** (optional) Transition duration */
    this.duration = 200;
    /** (optional) Label for close button */
    this.closeButtonLabel = 'Close Pop-up';
    /** (optional) title for close button */
    this.closeButtonTitle = 'Close';
    /** (optional) hide close button */
    this.omitCloseButton = false;
    /** (optional) Alignment of action buttons */
    this.alignActions = 'right';
    /** (optional) allow to inject css style {overflow: hidden} to body when modal is open */
    this.allowInjectingStyleToBody = false;
    /** What actually triggers opening/closing the modal */
    this.isOpen = this.opened || false;
    /** Check wheter there are actions slots, style accordingly */
    this.hasActionsSlot = false;
    /** Check wheter there's content in the body, style accordingly */
    this.hasBody = false;
    /** Useful for toggling scroll-specific styles */
    this.hasScroll = false;
    /** store document body original overflow style if applicable, this is useful when modal opens and inject overflow style to body */
    this.bodyOverflowValue = '';
    this.focusableElements = [];
    this.handleKeypress = (event) => {
      if (!this.isOpen) {
        return;
      }
      if (event.key === 'Escape') {
        this.emitBeforeClose('ESCAPE_KEY');
      }
    };
    this.handleTopFocus = () => {
      this.attemptFocus(this.getLastFocusableElement());
    };
    this.handleBottomFocus = () => {
      this.attemptFocus(this.getFirstFocusableElement());
    };
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  /**
   * Set `hasActionsSlot` and `hasBody`.
   */
  componentWillRender() {
    const actionSlots = this.hostElement.querySelectorAll('[slot="action"]');
    const bodySlot = Array.from(this.hostElement.shadowRoot.querySelectorAll('slot')).find((x) => !x.name);
    this.hasActionsSlot = actionSlots.length > 0;
    if (bodySlot != null) {
      this.hasBody = bodySlot.assignedElements().length > 0;
    }
  }
  emitBeforeClose(trigger) {
    const emittedEvents = emitEvent(this, 'scaleBeforeClose', { trigger });
    const prevented = emittedEvents.some((event) => event.defaultPrevented);
    if (!prevented) {
      this.opened = false;
    }
  }
  componentDidLoad() {
    // Query all focusable elements and store them in `focusableElements`.
    // Needed for the "focus trap" functionality.
    this.focusableElements = queryShadowRoot(this.hostElement.shadowRoot, (el) => isHidden(el) || el.matches('[data-focus-trap-edge]'), isFocusable);
    // Set `hasScroll` state dynamically on resize.
    if (supportsResizeObserver) {
      // @ts-ignore
      this.resizeObserver = new ResizeObserver(() => {
        this.setHasScroll();
      });
      this.resizeObserver.observe(this.modalBody);
    }
    this.setHasScroll();
  }
  setHasScroll() {
    const container = this.modalBody;
    this.hasScroll = container.scrollHeight > container.clientHeight;
  }
  getFirstFocusableElement() {
    return this.focusableElements[0];
  }
  getLastFocusableElement() {
    return this.focusableElements[this.focusableElements.length - 1];
  }
  attemptFocus(element) {
    if (element == null) {
      this.closeButton.focus();
      return;
    }
    element.focus();
  }
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
      if (this.allowInjectingStyleToBody) {
        this.bodyOverflowValue = document.body.style.overflow;
        // The following style will disable body from scrolling when modal is open
        document.body.style.setProperty('overflow', 'hidden');
      }
    }
    else {
      this.close();
      if (this.allowInjectingStyleToBody) {
        // remove injected overflow style or set it to original value
        document.body.style.setProperty('overflow', this.bodyOverflowValue);
      }
    }
  }
  open() {
    this.isOpen = true;
    try {
      animateTo(this.modalWindow, KEYFRAMES.fadeInTop, {
        duration: this.duration,
        delay: this.duration * 0.5,
      });
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeIn, {
        duration: this.duration,
      });
      anim.addEventListener('finish', () => {
        this.attemptFocus(this.getFirstFocusableElement());
        emitEvent(this, 'scaleOpen');
      });
      this.hostElement.addEventListener('keydown', this.handleKeypress);
    }
    catch (err) {
      emitEvent(this, 'scaleOpen');
    }
  }
  close() {
    try {
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeOut, {
        duration: this.duration,
      });
      anim.addEventListener('finish', () => {
        this.isOpen = false;
        emitEvent(this, 'scaleClose');
      });
      this.hostElement.removeEventListener('keydown', this.handleKeypress);
    }
    catch (err) {
      this.isOpen = false;
      emitEvent(this, 'scaleClose');
    }
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { ref: (el) => (this.modalContainer = el), class: this.getCssClassMap(), part: classNames('base', this.isOpen && 'open') },
        h("div", { class: "modal__backdrop", part: "backdrop", onClick: () => this.emitBeforeClose('BACKDROP') }),
        h("div", { "data-focus-trap-edge": true, onFocus: this.handleTopFocus, tabindex: "0" }),
        h("div", { class: "modal__window", part: classNames('window', this.size && `size-${this.size}`), ref: (el) => (this.modalWindow = el), role: "dialog", "aria-modal": "true", "aria-label": this.heading },
          h("div", { class: "modal__header", part: classNames('header', this.hasScroll && 'has-scroll') },
            h("h2", { class: "modal__heading", part: "heading" }, this.heading),
            !this.omitCloseButton && (h("button", { ref: (el) => (this.closeButton = el), class: "modal__close-button", part: "close-button", onClick: () => this.emitBeforeClose('CLOSE_BUTTON'), "aria-label": this.closeButtonLabel, title: this.closeButtonTitle },
              h("slot", { name: "close-icon" },
                h("scale-icon-action-circle-close", { decorative: true }))))),
          h("div", { ref: (el) => (this.modalBody = el), class: "modal__body-wrapper", part: classNames('body-wrapper', this.hasBody && 'has-body') },
            h("div", { class: "modal__body", part: classNames('body', this.hasBody && 'has-body') },
              h("slot", null))),
          h("div", { class: "modal__actions", part: classNames('actions', `align-${this.alignActions}`, this.hasActionsSlot && 'has-actions', this.hasScroll && 'has-scroll') },
            h("slot", { name: "action" }))),
        h("div", { "data-focus-trap-edge": true, onFocus: this.handleBottomFocus, tabindex: "0" }))));
  }
  getCssClassMap() {
    return classNames('modal', this.isOpen && 'modal--is-open', this.hasActionsSlot && 'modal--has-actions', `modal--align-actions-${this.alignActions}`, this.hasScroll && 'modal--has-scroll', this.hasBody && 'modal--has-body', this.size && `modal--size-${this.size}`);
  }
  static get is() { return "scale-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./modal.css"]
  }; }
  static get styleUrls() { return {
    "$": ["modal.css"]
  }; }
  static get properties() { return {
    "heading": {
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
        "text": "Modal heading"
      },
      "attribute": "heading",
      "reflect": false
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
        "text": "(optional) Modal size"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "opened": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) If `true`, the Modal is open."
      },
      "attribute": "opened",
      "reflect": true,
      "defaultValue": "false"
    },
    "duration": {
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
        "text": "(optional) Transition duration"
      },
      "attribute": "duration",
      "reflect": false,
      "defaultValue": "200"
    },
    "closeButtonLabel": {
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
        "text": "(optional) Label for close button"
      },
      "attribute": "close-button-label",
      "reflect": false,
      "defaultValue": "'Close Pop-up'"
    },
    "closeButtonTitle": {
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
        "text": "(optional) title for close button"
      },
      "attribute": "close-button-title",
      "reflect": false,
      "defaultValue": "'Close'"
    },
    "omitCloseButton": {
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
        "text": "(optional) hide close button"
      },
      "attribute": "omit-close-button",
      "reflect": false,
      "defaultValue": "false"
    },
    "alignActions": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'right' | 'left'",
        "resolved": "\"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Alignment of action buttons"
      },
      "attribute": "align-actions",
      "reflect": false,
      "defaultValue": "'right'"
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
    },
    "allowInjectingStyleToBody": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) allow to inject css style {overflow: hidden} to body when modal is open"
      },
      "attribute": "allow-injecting-style-to-body",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "isOpen": {},
    "hasActionsSlot": {},
    "hasBody": {},
    "hasScroll": {},
    "bodyOverflowValue": {}
  }; }
  static get events() { return [{
      "method": "scaleOpen",
      "name": "scale-open",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires when the modal has been opened"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "scaleOpenLegacy",
      "name": "scaleOpen",
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
      "method": "scaleBeforeClose",
      "name": "scale-before-close",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires on every close attempt. Calling `event.preventDefault()` will prevent the modal from closing"
      },
      "complexType": {
        "original": "BeforeCloseEventDetail",
        "resolved": "BeforeCloseEventDetail",
        "references": {
          "BeforeCloseEventDetail": {
            "location": "local"
          }
        }
      }
    }, {
      "method": "scaleBeforeCloseLegacy",
      "name": "scaleBeforeClose",
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
        "original": "BeforeCloseEventDetail",
        "resolved": "BeforeCloseEventDetail",
        "references": {
          "BeforeCloseEventDetail": {
            "location": "local"
          }
        }
      }
    }, {
      "method": "scaleClose",
      "name": "scale-close",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires when the modal has been closed"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "scaleCloseLegacy",
      "name": "scaleClose",
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
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "opened",
      "methodName": "openedChanged"
    }]; }
}
