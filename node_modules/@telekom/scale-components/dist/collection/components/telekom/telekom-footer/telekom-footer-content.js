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
import { Component, h, Host } from '@stencil/core';
export class TelekomFooterContent {
  render() {
    return (h(Host, null,
      h("footer", null,
        h("slot", { name: "extended-navigation" }),
        h("div", { part: "base" },
          h("div", { part: "logo" },
            h("scale-logo", { part: "app-logo", variant: "white", style: {
                '--focus-outline': 'var(--telekom-line-weight-highlight) solid var(--telekom-color-functional-focus-on-dark-background)',
              }, transparent: true })),
          h("div", { part: "body" },
            h("div", { part: "notice" },
              h("slot", { name: "notice" })),
            h("div", { part: "navigation" },
              h("slot", { name: "navigation" })))))));
  }
  static get is() { return "scale-telekom-footer-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-footer-content.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-footer-content.css"]
  }; }
}
