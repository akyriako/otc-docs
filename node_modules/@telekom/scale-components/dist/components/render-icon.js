import { h } from '@stencil/core/internal/client';

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
/**
 * Conditionally render markup for an icon based on data.
 *
 * @param value when a string, will be used as the `name` attribute in a `<scale-icon>`,
 *              when a function it should return a string of HTML
 * @param customContainerClass a custom class for the wrapper of the HTML returned by `value`
 */
const renderIcon = (value, customContainerClass) => {
  if (typeof value === 'function') {
    return h("span", { innerHTML: value(), class: customContainerClass });
  }
  if (typeof value === 'string') {
    return h("scale-icon", { name: value });
  }
  const Tag = value.tag;
  return h(Tag, Object.assign({}, value.attributes));
};

export { renderIcon as r };
