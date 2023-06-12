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
export declare class Segment {
  hostElement: HTMLElement;
  /** (optional) The size of the segment */
  size?: 'small' | 'medium' | 'large';
  /** (optional) If `true`, the segment is selected */
  selected?: boolean;
  /** (optional) If `true`, the segment is disabled */
  disabled?: boolean;
  /** (optional) segment's id */
  segmentId?: string;
  /** (optional) aria-label attribute needed for icon-only segments */
  ariaLabelSegment: string;
  /** (optional) Segment width set to ensure that all segments have the same width */
  width?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  adjacentSiblings?: 'left' | 'right' | 'leftright';
  /** (optional) translation of 'selected */
  ariaLangSelected?: string;
  /** (optional) translation of 'deselected */
  ariaLangDeselected?: string;
  /** a11y text for getting meaningful value. `$buttonNumber` and `$selected` are template variables and will be replaces by their corresponding properties.  */
  ariaDescriptionTranslation: string;
  /** (optional) position within group */
  position?: number;
  /** (optional) position within group */
  hasIcon?: boolean;
  /** (optional) position within group */
  textOnly?: boolean;
  /** (optional) position within group */
  iconOnly?: boolean;
  /** (optional) the index of the currently selected segment in the segmented-button */
  selectedIndex?: string;
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
  private focusableElement;
  setFocus(): Promise<void>;
  componentWillLoad(): void;
  componentDidUpdate(): void;
  getAriaDescriptionTranslation(): string;
  handleIcon(): void;
  handleClick: (event: MouseEvent) => void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
