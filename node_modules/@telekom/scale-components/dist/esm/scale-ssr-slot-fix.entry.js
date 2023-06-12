import { r as registerInstance, h, a as Host } from './index-6d95a4bc.js';

const SsrSlotFix = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};

export { SsrSlotFix as scale_ssr_slot_fix };
