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
import { Component, h, Host, Element } from '@stencil/core';
export class TelekomFooterExtendedNavigation {
  //   @Prop() variant: 'standard' | 'slim' = 'standard';
  render() {
    return (h(Host, { part: "telekom-footer-extended-navigation" },
      h("div", { part: "extended-navigation-container" },
        h("slot", null))));
  }
  static get is() { return "scale-telekom-footer-extended-navigation"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-footer-extended-navigation.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-footer-extended-navigation.css"]
  }; }
  static get elementRef() { return "hostElement"; }
}
