import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const telekomAppShellCss = ":host{--spacing-x:0;--min-height:100vh}[part~='base']{display:flex;min-height:var(--min-height);flex-direction:column}[part~='content']{box-sizing:border-box;align-self:center;width:100%;padding-left:var(--spacing-x);padding-right:var(--spacing-x);flex:1}";

const Shell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: "base" }, h("slot", { name: "header" }), h("main", { part: "content" }, h("slot", null)), h("slot", { name: "footer" }))));
  }
  get hostElement() { return getElement(this); }
};
Shell.style = telekomAppShellCss;

export { Shell as scale_telekom_app_shell };
