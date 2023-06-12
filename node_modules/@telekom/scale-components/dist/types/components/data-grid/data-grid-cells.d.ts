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
export declare const CELL_TYPES: {
  checkbox: import("./cell-handlers/cell-interface").Cell;
  date: import("./cell-handlers/cell-interface").Cell;
  email: import("./cell-handlers/cell-interface").Cell;
  graph: import("./cell-handlers/cell-interface").Cell;
  html: import("./cell-handlers/cell-interface").Cell;
  link: import("./cell-handlers/cell-interface").Cell;
  number: import("./cell-handlers/cell-interface").Cell;
  select: import("./cell-handlers/cell-interface").Cell;
  tags: import("./cell-handlers/cell-interface").Cell;
  telephone: import("./cell-handlers/cell-interface").Cell;
  text: import("./cell-handlers/cell-interface").Cell;
  actions: import("./cell-handlers/cell-interface").Cell;
};
export declare const DEFAULT_CELL_TYPE = "text";
export declare const CELL_DEFAULTS: {
  maxWidth: number;
  minWidth: number;
  resizable: boolean;
  sortable: boolean;
  sortBy: string;
  textAlign: string;
  visible: boolean;
  width: string;
};
