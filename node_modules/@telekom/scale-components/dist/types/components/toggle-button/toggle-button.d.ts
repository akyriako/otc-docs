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
export declare class ToggleButton {
  hostElement: HTMLElement;
  /** (optional) The size of the button */
  size?: 'large' | 'regular' | 'small' | 'xs';
  /** (optional) Button background */
  background?: 'grey' | 'white';
  /** @deprecated - variant should replace colorScheme */
  colorScheme?: 'monochrome' | 'color';
  /** (optional) background variant of a selected toggle-button */
  variant?: 'monochrome' | 'color';
  /** (optional) If `true`, the button is disabled */
  disabled?: boolean;
  /** (optional) If `true`, the button is selected */
  selected?: boolean;
  /** (optional) Button type */
  iconOnly?: boolean;
  /** (optional) Icon position related to the label */
  iconPosition: 'before' | 'after';
  /** (optional) set the border-radius left, right or both */
  hideBorder: false;
  /** (optional) set the border-radius left, right or both */
  radius: 'left' | 'right' | 'both' | 'neither' | null;
  /** (optional) toggle button's id */
  toggleButtonId?: string;
  /** (optional) aria-label attribute needed for icon-only buttons */
  ariaLabelToggleButton: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional) position within group */
  position?: number;
  /** (optional) translation of 'selected */
  ariaLangSelected?: string;
  /** (optional) translation of 'deselected */
  ariaLangDeselected?: string;
  /** a11y text for getting meaningful value. `$buttonNumber` and `$selected` are template variables and will be replaces by their corresponding properties.  */
  ariaDescriptionTranslation: string;
  /** Emitted when button is clicked */
  scaleClick: EventEmitter<{
    id: string;
    selected: boolean;
  }>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleClickLegacy: EventEmitter<{
    id: string;
    selected: boolean;
  }>;
  hasScaleIcon: boolean;
  private focusableElement;
  setFocus(): Promise<void>;
  connectedCallback(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  componentWillLoad(): void;
  getAriaDescriptionTranslation(): string;
  handleIconSize(): void;
  handleClick: (event: MouseEvent) => void;
  handleIconShape: () => void;
  /**
   * Detect whether a child node is a scale icon and contains text.
   * If so, we set `iconPosition` to `after`, if the icon comes after the text.
   */
  setIconPositionProp(): void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
