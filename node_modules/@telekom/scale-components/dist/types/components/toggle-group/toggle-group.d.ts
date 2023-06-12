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
interface ButtonStatus {
  id: string;
  selected: boolean;
}
export declare class ToggleGroup {
  /** toggle button position within group */
  position: number;
  /** number of slotted toggle-buttons */
  slottedButtons: number;
  hostElement: HTMLElement;
  /** state */
  status: ButtonStatus[];
  /** (optional) The size of the button */
  size?: 'large' | 'regular' | 'small' | 'xs';
  /** (optional) Button Group background */
  background?: 'grey' | 'white';
  /** (optional) 100% width */
  fullWidth?: boolean;
  /** (optional) If `true`, the button is disabled */
  disabled?: boolean;
  /** (optional) If `true`, the group has a border */
  hideBorder?: boolean;
  /** (optional) more than one button selected possible */
  singleSelect: boolean;
  /** (optional) aria-label attribute needed for icon-only buttons */
  ariaLabelTranslation: string;
  /** @deprecated - variant should replace colorScheme */
  colorScheme?: 'monochrome' | 'color';
  /** (optional) background variant of a selected toggle-button */
  variant?: 'monochrome' | 'color';
  /** (optional) Injected CSS styles */
  styles?: string;
  /** Emitted when button is clicked */
  scaleChange: EventEmitter;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter;
  scaleClickHandler(ev: {
    detail: {
      id: string;
      selected: boolean;
    };
  }): void;
  handlePropsChange(): void;
  componentDidLoad(): void;
  getAllToggleButtons(): Element[];
  /**
   * Keep props, needed in children buttons, in sync
   */
  propagatePropsToChildren(): void;
  getAriaLabelTranslation(): string;
  componentDidRender(): void;
  setNewState(tempState: ButtonStatus[]): void;
  setButtonWidth(): void;
  setChildrenCorners(): void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
export {};
