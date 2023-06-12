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
import { EventEmitter } from '../../stencil-public-runtime';
export declare class Switch {
  /** (optional) Active switch */
  checked?: boolean;
  /** (optional) Disabled switch */
  disabled?: boolean;
  /** (optional) Input name */
  name?: string;
  /** (optional) Input id */
  inputId?: string;
  /** (optional) switch label */
  label?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  size?: string;
  /** Emitted when the switch was clicked */
  scaleChange: EventEmitter;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter;
  componentWillLoad(): void;
  render(): any;
  getCssClassMap(): string;
}
