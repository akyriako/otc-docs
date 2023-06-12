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
export declare class ProgressBar {
  hostElement: HTMLElement;
  /** (optional) Progress bar busy switch */
  busy?: boolean;
  /** (required) Progress bar percentage */
  percentage: number;
  /** (optional) Progress bar percentage to start the animation from (default: 0) */
  percentageStart: number;
  /** @deprecated - (optional) Progress bar customColor */
  customColor?: string;
  /** (optional) Progress bar percentage text */
  showStatus?: boolean;
  /** (optional) Progress bar icon indicator */
  icon?: string;
  /** (optional) Progress bar status description text */
  statusDescription?: string;
  /** (optional) Progress bar error */
  hasError?: boolean;
  /** (optional) Progress bar disabled */
  disabled?: boolean;
  /** (optional) Progress bar id */
  progressBarId?: string;
  /** (optional) Progress bar label */
  label?: string;
  /** (optional) disables aria-live */
  mute?: boolean;
  /** (optional) Injected CSS styles */
  styles?: string;
  componentWillLoad(): void;
  componentWillUpdate(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  transitions: (width: number, widthStart: number) => string;
  progressStyle: () => {
    '--background': string;
    '--progress': string;
  } | {
    '--background'?: undefined;
    '--progress': string;
  };
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
