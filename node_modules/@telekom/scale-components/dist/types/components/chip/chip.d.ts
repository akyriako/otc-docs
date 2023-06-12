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
export declare class Chip {
  hostElement: HTMLElement;
  /** (optional) */
  variant?: 'standard' | 'outline';
  /** (optional) */
  type?: 'dynamic' | 'persistent';
  /** (optional) */
  selected?: boolean;
  /** (optional) chip aria-role */
  ariaRoleTitle?: string;
  /** (optional) chip aria-checked */
  ariaCheckedState?: boolean;
  /** (optional) chip label */
  label?: string;
  /** (optional) chip disabled */
  disabled?: boolean;
  /** (optional) Dismiss label */
  dismissText?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional) Change icon click event */
  scaleChange: EventEmitter<MouseEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter<MouseEvent>;
  /** (optional) Close icon click event */
  scaleClose: EventEmitter<MouseEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleCloseLegacy: EventEmitter<MouseEvent>;
  componentDidRender(): void;
  disconnectedCallback(): void;
  handleClose: (event: MouseEvent) => void;
  handleClick: (event: MouseEvent) => void;
  getIcon(): any;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
