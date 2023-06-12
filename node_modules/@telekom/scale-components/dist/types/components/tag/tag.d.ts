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
export declare class Tag {
  /** (optional) Tag size */
  size?: 'small';
  /** (optional) Tag type */
  type?: 'standard' | 'strong';
  /** (optional) Tag color */
  color?: 'cyan' | 'yellow' | 'green' | 'orange' | 'red' | 'violet' | 'brown' | 'olive' | 'teal' | 'black' | 'dismissable' | 'standard';
  /** (optional) Tag href */
  href?: string;
  /** (optional) Tag target */
  target?: string;
  /** (optional) Tag dismissable */
  dismissable?: boolean;
  /** (optional) Tag disabled */
  disabled?: boolean;
  /** (optional) Dismiss label */
  dismissText?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional) Close icon click event */
  scaleClose: EventEmitter<MouseEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleCloseLegacy: EventEmitter<MouseEvent>;
  componentWillUpdate(): void;
  disconnectedCallback(): void;
  handleClose: (event: MouseEvent) => void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
