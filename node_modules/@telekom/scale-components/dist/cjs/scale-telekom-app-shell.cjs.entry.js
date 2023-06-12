'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const telekomAppShellCss = ":host{--spacing-x:0;--min-height:100vh}[part~='base']{display:flex;min-height:var(--min-height);flex-direction:column}[part~='content']{box-sizing:border-box;align-self:center;width:100%;padding-left:var(--spacing-x);padding-right:var(--spacing-x);flex:1}";

const Shell = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, this.styles && index.h("style", null, this.styles), index.h("div", { part: "base" }, index.h("slot", { name: "header" }), index.h("main", { part: "content" }, index.h("slot", null)), index.h("slot", { name: "footer" }))));
  }
  get hostElement() { return index.getElement(this); }
};
Shell.style = telekomAppShellCss;

exports.scale_telekom_app_shell = Shell;
