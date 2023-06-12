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
export declare class Card {
  /** (optional) Link card */
  to?: string;
  /** (optional) Label of the card */
  label?: string;
  /** (optional) Link card target */
  target?: string;
  /** (optional) Link card rel */
  rel?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  render(): any;
  getCssClassMap(): string;
}
