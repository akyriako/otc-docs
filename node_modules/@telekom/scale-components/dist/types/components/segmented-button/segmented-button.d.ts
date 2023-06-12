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
interface SegmentStatus {
  id: string;
  selected: boolean;
}
export declare class SegmentedButton {
  /** segment position within button */
  position: number;
  slottedSegments: number;
  hostElement: HTMLElement;
  /** state */
  status: SegmentStatus[];
  /** (optional) The size of the button */
  size?: 'small' | 'medium' | 'large';
  /** (optional) Allow more than one button to be selected */
  multiSelect: boolean;
  /** (optional) the index of the selected segment */
  selectedIndex?: number;
  /** (optional) If `true`, the button is disabled */
  disabled?: boolean;
  /** (optional) If `true`, expand to container width */
  fullWidth?: boolean;
  /** (optional) If `true`, show error message */
  invalid?: boolean;
  /** (optional) If `true`, show error message */
  helperText?: string;
  /** (optional) Button label */
  label?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional) aria-label attribute needed for icon-only buttons */
  ariaLabelTranslation: string;
  longestButtonWidth: string;
  /** Emitted when button is clicked */
  scaleChange: EventEmitter;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter;
  container: HTMLElement;
  showHelperText: boolean;
  scaleClickHandler(ev: {
    detail: {
      id: string;
      selected: boolean;
    };
  }): void;
  handlePropsChange(): void;
  /**
   * Keep props, needed in children buttons, in sync
   */
  propagatePropsToChildren(): void;
  componentDidLoad(): void;
  componentWillUpdate(): void;
  getSelectedIndex(): number;
  getAdjacentSiblings: (tempState: any, i: any) => string;
  getLongestButtonWidth(): number;
  setState(tempState: SegmentStatus[]): void;
  getAllSegments(): Element[];
  getAriaLabelTranslation(): string;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
export {};
