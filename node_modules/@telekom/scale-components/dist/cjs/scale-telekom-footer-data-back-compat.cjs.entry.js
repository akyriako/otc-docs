'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

// import { findRootNode, findSelected } from '../../../utils/menu-utils';
// import { renderIcon } from '../../../utils/render-icon';
const readData = (data) => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  }
  catch (error) {
    parsedData = data;
  }
  return parsedData;
};
const TelekomFooterDataBackCompat = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.type = 'standard';
    this.footerNavigation = [];
    this.copyright = '© Deutsche Telekom AG';
  }
  render() {
    return (index.h("scale-telekom-footer", { type: this.type }, index.h("scale-telekom-footer-content", null, index.h("span", { slot: "notice" }, " ", this.copyright, " "), index.h("ul", { slot: "navigation" }, readData(this.footerNavigation).map(({ name, id, href = 'javascript:void(0);', target = '_self', }) => {
      return (index.h("li", null, index.h("a", { href: href, id: id, target: target }, name)));
    })))));
  }
};

exports.scale_telekom_footer_data_back_compat = TelekomFooterDataBackCompat;
