/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export declare class Grid {
  hostElement: HTMLElement;
  /** (optional) Set amount of columns in container */
  columns?: string;
  /** (optional) Set gutter between columns */
  gutterY?: string;
  /** (optioanl) Set gutter between rows */
  gutterX?: string;
  /** (optioanl) Set padding to container */
  spacing?: string;
  /** (optioanl) Set max-width to contaier */
  maxWidth?: string;
  componentWillLoad(): void;
  render(): any;
}
