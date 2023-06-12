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
export interface CheckboxInterface extends HTMLElement {
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  value: string;
  label: string;
  ariaLabelCheckbox?: string;
}
export declare class Checkbox {
  host: HTMLElement;
  /** (optional) Input name */
  name?: string;
  /** (optional) Input label */
  label: string;
  /** (optional) Input label output */
  ariaLabelCheckbox?: string;
  /** (optional) Hides the specified label visually */
  hideLabel?: boolean;
  /** (optional) Input helper text */
  helperText?: string;
  /** @deprecated - invalid should replace status */
  status?: string;
  /** (optional) Input status */
  invalid?: boolean;
  /** (optional) Input disabled */
  disabled?: boolean;
  /** (optional) Active switch */
  checked?: boolean;
  /** (optional) indeterminate */
  indeterminate?: boolean;
  /** (optional) Input value */
  value?: string;
  /** (optional) Input checkbox id */
  inputId?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** Emitted when the value has changed. */
  scaleChange: EventEmitter;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter;
  private readonly internalId;
  componentDidRender(): void;
  handleChange: (ev: any) => void;
  connectedCallback(): void;
  renderIcon(): any;
  renderHelperIcon(): any;
  renderHelperText(text: any): any;
  render(): any;
}
