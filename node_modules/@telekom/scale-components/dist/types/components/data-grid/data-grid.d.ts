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
export interface DataGridEditEventDetail {
  rows: any;
  rowIndex: number;
  columnIndex: number;
  value: string | number | boolean | undefined | null;
}
export interface DataGridSortedEventDetail {
  rows: any;
  type: 'text' | 'number';
  sortDirection: 'ascending' | 'descending' | 'none';
  columnIndex: number;
}
export declare class DataGrid {
  hostElement: HTMLElement;
  /** Used to force render after sorting/selection */
  forceRender: number;
  /** Pagination starting index */
  paginationStart: number;
  /** Table scroll value for frozen header  */
  scrollY: number;
  /** Input fields config array */
  fields: any;
  /** (optional) Freeze header row from scrolling */
  freezeHeader?: boolean;
  /** (optional) Heading string */
  heading?: string;
  /** (optional) Set static table height, by default will auto-resize */
  height?: string;
  /** (optional) Set to true to remove border */
  hideBorder?: boolean;
  /** (optional) Set to true to hide header row */
  hideHeader?: boolean;
  /** (optional) Set to true to remove info footer block including pagination and selection status */
  hideInfo?: boolean;
  /** (optional) Set to true to hide settings menu */
  hideMenu?: boolean;
  /** (optional) Set to true to add numbers column */
  numbered?: boolean;
  /** (optional) Set number of rows to display per pagination page */
  pageSize?: number;
  /** Input data array */
  rows: any;
  /** (optional) Set to true to add selection column */
  selectable?: boolean;
  /** Read-only selection array - populated with raw data from selected rows */
  selection: string[];
  /** (optional) Shade every second row darker */
  shadeAlternate?: boolean;
  /** (optional) Injected css styles */
  styles: any;
  /** (optional) Set to false to hide table, used for nested tables to re-render upon toggle */
  visible?: boolean;
  /** Event triggered every time the editable cells are changed, updating the original rows data */
  scaleEdit: EventEmitter<DataGridEditEventDetail>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleEditLegacy: EventEmitter<DataGridEditEventDetail>;
  /** Event triggered every time the data is sorted, changing original rows data */
  scaleSort: EventEmitter<DataGridSortedEventDetail>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleSortLegacy: EventEmitter<DataGridSortedEventDetail>;
  /** Used to update column divider during interaction */
  private activeDivider;
  /** Stored active sorting column index, for state removal */
  private activeSortingIndex;
  /** Track component width to constrict nested content, which is necessary with table layout */
  private contentWidth;
  /** Flag to know to check for data completeness */
  private dataNeedsCheck;
  /** Track main container for element resize */
  private elMmainContainer?;
  /** Track table container for scroll */
  private elScrollContainer?;
  /** Table head for frozen header */
  private elTableHead?;
  /** Checkbox for getting toggle-all state */
  private elToggleSelectAll?;
  /** Flag to know if rendering can commence */
  private hasData;
  /** Flag that is true when width below a certain limit */
  private isMobile;
  /** Flag that enough data supplied to warrant pagination */
  private isPagination;
  /** Flag that is true if any fields are sortable */
  private isSortable;
  /** Track container width to avoid re-calculating column stretching */
  private lastContainerWidth;
  /** Index of field to use as mobile title, if any */
  private mobileTitleIndex;
  /** Determine if auto-width parsing needed */
  private needsAutoWidthParse;
  /** Force column resize after render */
  private needsColumnResize;
  /** Auto-calculated number column width */
  private numberColumnWidth;
  /** Selection column width */
  private selectionColumnWidth;
  constructor();
  componentWillLoad(): void;
  componentWillUpdate(): void;
  componentDidRender(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  disconnectedCallback(): void;
  fieldsHandler(): void;
  rowsHandler(): void;
  parseFields(): void;
  parseRows(): void;
  setInitialRowProps(): void;
  checkHasData(): boolean;
  checkForMobileTitle(): void;
  checkForSortableFields(): void;
  getCssClassMap(): string;
  polyfillMousePosition(e: any): void;
  getDefaultLongestContent({ rows, columnIndex }: {
    rows: any;
    columnIndex: any;
  }): any;
  toggleSelectAll(): void;
  toggleRowSelect({ target }: {
    target: any;
  }, rowIndex: any): void;
  updateReadableSelection(): void;
  toggleTableSorting(sortDirection: any, columnIndex: any, type: any): void;
  sortTable(sortDirection: any, type: any, columnIndex: any): void;
  resetSortingToggle(): void;
  onDividerDown(e: any): void;
  onDividerMove(e: any): void;
  onDividerUp(): void;
  toggleVisibilityMenu(e: any): void;
  toggleColumnVisibility(value: any, columnIndex: any): void;
  addResizeObserver(): void;
  removeResizeObserver(): void;
  applyResponsiveClasses(): void;
  updateColumnStretching(): void;
  calculateAutoWidths(): void;
  triggerSortEvent(sortDirection: any, type: any, columnIndex: any): void;
  triggerEditEvent(value: any, rowIndex: any, columnIndex: any): void;
  onTableScroll(): void;
  handleMenuListClick: (event: any) => void;
  renderSettingsMenu(): any;
  renderTable(): any;
  renderAutoWidthCheck(): any;
  renderTableHead(): any;
  renderTableHeadNumberedCell(): any;
  renderTableHeadSelectableCell(): any;
  renderTableBody(): any;
  renderMobileTitle(rowData: any): any;
  renderTableBodyNumberedCell(rowIndex: any): any;
  renderTableBodySelectableCell(rowIndex: any): any;
  renderTableCell(field: any, content: any, rowIndex: any, columnIndex: any): any;
  renderTableInfo(): any;
  render(): any;
}
