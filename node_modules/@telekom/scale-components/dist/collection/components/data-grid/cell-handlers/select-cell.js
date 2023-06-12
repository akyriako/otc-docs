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
import { h } from '@stencil/core';
// Expected: string
// Options
// options: string array
// editable?: boolean = false
export const SelectCell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ field, content, component, rowIndex, columnIndex, isAutoWidthCheck, }) => {
    const { options, editable = false, label } = field;
    // Select component doesn't expand with content, so need to return a fake element that simulates width
    if (isAutoWidthCheck) {
      return (h("p", { class: `scl-body`, style: { paddingRight: '56px' } }, content));
    }
    const props = {
      disabled: !editable,
      value: content,
      label,
    };
    if (editable) {
      props.onScaleChange = ({ detail }) => {
        const { value } = detail;
        // Update rows data
        component.rows[rowIndex][columnIndex] = value;
        // Trigger event
        component.triggerEditEvent(value, rowIndex, columnIndex);
      };
    }
    return (h("scale-dropdown", Object.assign({ size: "small" }, props), options.map((option) => {
      return (h("option", { value: option, selected: option === content }, option));
    })));
  },
};
