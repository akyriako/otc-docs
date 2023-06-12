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
/**
 * This is a superset of the default anchor `<a>` element.
 * @part anchor - the native achor element wrapping all contents
 * @part content - a wrapper around the default slot with the underline
 *
 * @slot default - here goes the actual text of the
 * @slot icon - a slot that will not be underlined and which position can be changed
 */
export declare class HelperText {
  /** (optional) Helper text */
  helperText?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional) Injected CSS styles */
  variant?: 'neutral' | 'informational' | 'warning' | 'danger' | 'success';
  renderHelperIcon(): any;
  render(): any;
}
