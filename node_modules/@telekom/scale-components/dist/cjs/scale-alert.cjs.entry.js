'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');
const statusNote = require('./status-note-dceee5a3.js');

const alertCss = ".alert{box-sizing:border-box;background:#eee;color:#333;width:100%;padding:1rem;text-align:left;position:relative;display:flex;justify-content:space-between}.alert__body{display:flex}.alert__headline{font-size:var(--type-size-3, 1rem);color:white;margin:0}.alert__icon{display:flex;align-items:center;justify-content:center;background:none;height:24px;width:24px;margin:0 0.5rem 0 0;border-radius:var(--telekom-radius-standard)}.alert__close{height:16px;opacity:0.5;cursor:pointer}.alert__close:hover{opacity:1}.alert--variant-primary{background:blue;color:#fff}.alert--variant-secondary{background:#eee;color:#333}.alert--variant-variant-warning{background:orange;color:#fff}.alert--variant-danger{background:red;color:#fff}.alert--variant-success{background:green;color:#fff}.alert--variant-info{background:lightblue;color:#fff}";

const Alert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** (optional) Alert size */
    this.size = '';
    /** (optional) Alert variant */
    this.variant = '';
    /** (optional) Alert timeout */
    this.timeout = false;
    /** (optional) Alert icon */
    this.icon = '';
    this.defaultTimeout = 2000;
    this.close = () => {
      this.opened = false;
    };
    this.onCloseAlertWithTimeout = () => {
      if (this.timeout !== false) {
        if (typeof this.timeout === 'number') {
          setTimeout(this.close, this.timeout);
        }
        else {
          setTimeout(this.close, this.defaultTimeout);
        }
      }
      else {
        return null;
      }
    };
  }
  componentWillLoad() {
    this.hasSlotClose = !!this.hostElement.querySelector('[slot="close"]');
  }
  connectedCallback() {
    statusNote.statusNote({ source: this.hostElement, type: 'warn' });
  }
  /** Alert method: open() */
  async open() {
    this.opened = true;
  }
  render() {
    this.onCloseAlertWithTimeout();
    if (!this.opened) {
      return null;
    }
    return (index.h(index.Host, null, this.styles && index.h("style", null, this.styles), index.h("div", { class: this.getCssClassMap() }, index.h("div", { class: "alert__body" }, index.h("div", { class: "alert__icon" }, this.icon), index.h("div", { class: "alert__content" }, index.h("div", { class: "alert__headline" }, this.headline), index.h("slot", null))), index.h("a", { class: "alert__close", onClick: this.close }, this.hasSlotClose ? (index.h("div", { class: "alert__close-icon" }, index.h("slot", { name: "close" }))) : ('x')))));
  }
  getCssClassMap() {
    return index$1.classnames('alert', this.size && `alert--size-${this.size}`, this.variant && `alert--variant-${this.variant}`);
  }
  get hostElement() { return index.getElement(this); }
};
Alert.style = alertCss;

exports.scale_alert = Alert;
