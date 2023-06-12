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
export declare type PaginationEventDirection = 'FIRST' | 'PREVIOUS' | 'NEXT' | 'LAST';
export declare class Pagination {
  hostElement: HTMLElement;
  /** (optional) Deprecated; hideBorder should replace hideBorders */
  hideBorders?: boolean;
  /** (optional) Set to true to hide top and bottom borders */
  hideBorder?: boolean;
  /** (optional) Set number of rows/elements to show per page */
  pageSize?: number;
  /** (optional) Index of first element to display */
  startElement?: number;
  /** (optional) Total number of rows/elements used to calculate page displays */
  totalElements?: number;
  /** (optional) Injected styles */
  styles?: string;
  /** @deprecated - size should replace small */
  small: boolean;
  /** (optional) size  */
  /** @deprecated - size should replace small */
  size: 'small' | 'large';
  /** (optional) translation to 'Go to first page'  */
  ariaLabelFirstPage: string;
  /** (optional) translation to 'Go to next page'  */
  ariaLabelNextPage: string;
  /** (optional) translation to 'Go to previous page'  */
  ariaLabelPreviousPage: string;
  /** (optional) translation to 'Go to last page'  */
  ariaLabelLastPage: string;
  /** Event triggered every time the data is edited, changing original rows data */
  scalePagination: EventEmitter<{
    startElement?: number;
    currentPage?: number;
    direction: PaginationEventDirection;
  }>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scalePaginationLegacy: EventEmitter<{
    startElement?: number;
    currentPage?: number;
    direction: PaginationEventDirection;
  }>;
  /** Calculated width of largest text so buttons don't move while changing pages */
  maxWidth: number;
  constructor();
  componentWillLoad(): void;
  componentWillUpdate(): void;
  componentDidRender(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  disconnectedCallback(): void;
  calculateWidth(): void;
  goFirstPage(): void;
  goPreviousPage(): void;
  goNextPage(): void;
  goLastPage(): void;
  emitUpdate(direction: PaginationEventDirection): void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
