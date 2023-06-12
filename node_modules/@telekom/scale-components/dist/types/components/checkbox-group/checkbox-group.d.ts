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
import { CheckboxInterface } from '../checkbox/checkbox';
export declare class CheckboxGroup {
  host: HTMLElement;
  /** (optional) Input name */
  name?: string;
  /** (optional) Input label */
  label: string;
  /** @deprecated - ariaLabelCheckboxGroup should replace ariaLabel */
  ariaLabelCheckboxGroup?: string;
  /** (optional) Input helper text */
  helperText?: string;
  /** @deprecated - invalid should replace status */
  status?: string;
  /** (optional) Input status */
  invalid?: boolean;
  /** (optional) Input value */
  value?: string;
  /** (optional) Input checkbox id */
  inputId?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  selectText?: string;
  unselectText?: string;
  checked: any;
  indeterminate: any;
  disabled: any;
  private groupNode;
  private actionText;
  handleCheckboxChange(ev: any): void;
  componentDidRender(): void;
  getChildNodes(): CheckboxInterface[];
  updateChildrenCheckboxStates(checked: any): void;
  updateParentCheckboxState(): void;
  render(): any;
  componentDidLoad(): void;
}
