import { Component, h, Host, Prop, Element, Watch } from '@stencil/core';
import statusNote from '../../utils/status-note';
/**
 * Adds the `px` suffix to a string number
 * but leaves other units untouched.
 * 1  -> 1px
 * 5% -> 5%
 */
const numToPx = (val) => (Number.isNaN(Number(val)) ? val : val + 'px');
export class Callout {
  constructor() {
    /** (optional) Degree of rotation */
    this.rotation = 0;
    /**
     * `aspect-ratio` is not enough when dealing with text :(
     */
    this.adjustSize = () => {
      const { width, height } = this.baseEl.getBoundingClientRect();
      const largest = Math.max(width, height);
      this.hostElement.style.setProperty('--min-width', `${largest}px`);
    };
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: 'beta' });
    this.syncPropsToCSS();
  }
  componentDidLoad() {
    const observer = new MutationObserver(() => {
      this.adjustSize();
    });
    observer.observe(this.hostElement, {
      attributes: false,
      childList: true,
      subtree: true,
      characterData: true,
    });
    this.mo = observer;
    // Wait for full styles before measuring
    window.requestAnimationFrame(this.adjustSize);
  }
  disconnectedCallback() {
    if (this.mo) {
      this.mo.disconnect();
    }
  }
  rotationChanged() {
    this.syncPropsToCSS();
  }
  syncPropsToCSS() {
    this.hostElement.style.setProperty('--rotation', `${this.rotation}deg`);
    if (this.top != null ||
      this.right != null ||
      this.bottom != null ||
      this.left != null) {
      Object.assign(this.hostElement.style, {
        top: numToPx(this.top),
        right: numToPx(this.right),
        bottom: numToPx(this.bottom),
        left: numToPx(this.left),
      });
    }
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { part: "base", ref: (el) => (this.baseEl = el) },
        h("slot", null))));
  }
  static get is() { return "scale-callout"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["callout.css"]
  }; }
  static get styleUrls() { return {
    "$": ["callout.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'primary' | 'blue' | 'white' | 'black' | string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Color variant of the callout"
      },
      "attribute": "variant",
      "reflect": false
    },
    "rotation": {
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
        "text": "(optional) Degree of rotation"
      },
      "attribute": "rotation",
      "reflect": false,
      "defaultValue": "0"
    },
    "top": {
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
        "text": "(optional) CSS `top` value for absolute position"
      },
      "attribute": "top",
      "reflect": false
    },
    "right": {
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
        "text": "(optional) CSS `right` value for absolute position"
      },
      "attribute": "right",
      "reflect": false
    },
    "bottom": {
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
        "text": "(optional) CSS `bottom` value for absolute position"
      },
      "attribute": "bottom",
      "reflect": false
    },
    "left": {
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
        "text": "(optional) CSS `left` value for absolute position"
      },
      "attribute": "left",
      "reflect": false
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
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "rotation",
      "methodName": "rotationChanged"
    }, {
      "propName": "top",
      "methodName": "rotationChanged"
    }, {
      "propName": "right",
      "methodName": "rotationChanged"
    }, {
      "propName": "bottom",
      "methodName": "rotationChanged"
    }, {
      "propName": "left",
      "methodName": "rotationChanged"
    }]; }
}
