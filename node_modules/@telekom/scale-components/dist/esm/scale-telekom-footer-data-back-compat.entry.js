import { r as registerInstance, h } from './index-6d95a4bc.js';

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
    registerInstance(this, hostRef);
    this.type = 'standard';
    this.footerNavigation = [];
    this.copyright = '© Deutsche Telekom AG';
  }
  render() {
    return (h("scale-telekom-footer", { type: this.type }, h("scale-telekom-footer-content", null, h("span", { slot: "notice" }, " ", this.copyright, " "), h("ul", { slot: "navigation" }, readData(this.footerNavigation).map(({ name, id, href = 'javascript:void(0);', target = '_self', }) => {
      return (h("li", null, h("a", { href: href, id: id, target: target }, name)));
    })))));
  }
};

export { TelekomFooterDataBackCompat as scale_telekom_footer_data_back_compat };
