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
export interface StarInterface extends HTMLDivElement {
  dataset: {
    value: string;
    selected?: string;
  };
}
export declare class RatingStars {
  host: HTMLElement;
  ratingStarId: string;
  /** @deprecated; size should be used instead of starSize */
  starSize: 'small' | 'large';
  /** size of the stars  */
  size: 'small' | 'large';
  /** @deprecated; The lower limit of the rating */
  minRating: number;
  /** @deprecated; max should be used instead of maxRating */
  maxRating: number;
  /** The upper limit of the rating */
  max: number;
  /** Represents the current value of the rating */
  rating: number;
  /** makes the rating non-interactive (but still accessible)  */
  readonly: boolean;
  /** disables input  */
  disabled: boolean;
  /** a11y text for getting meaningful value. `$rating` and `$max` (deprecated `$maxRating`) are template variables and will be replaces by their corresponding properties.  */
  ariaLabelTranslation: string;
  /** (optional) rating label */
  label: string;
  /** (optional) info text */
  hideLabel: boolean;
  /** (optional) info text */
  infoText?: string;
  /** Emitted when the rating has changed */
  scaleChange: EventEmitter;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter;
  componentWillRender(): void;
  getRatingText(): string;
  handleInput: (ev: InputEvent) => void;
  handleStarClick: (ev: MouseEvent) => void;
  renderStar(index: number, selected: boolean, rating: number): any;
  renderRating(): any[];
  render(): any;
}
