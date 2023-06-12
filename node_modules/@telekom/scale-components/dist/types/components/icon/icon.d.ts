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
export declare class Icon {
  /**
   * A name that will be used to reference an SVG object defined elsewhere,
   * via `<use xlink:href="">`. `icon-` will be prepended to the name, so if
   * you pass `circle`, it will look for for the `icon-circle` id
   * e.g. `<use xlink:href="#icon-circle">`.
   * If there is no element in the document with the id by the name provided,
   * this component will render empty.
   */
  name?: string;
  /**
   * A path shape to be used in the `d` attribute of a path element.
   */
  path?: string;
  /**
   * Will be used for both `width` and `height`, all icons are square.
   * Keep in mind the `viewBox` attribute is set to "0 0 24 24".
   */
  size?: number;
  /** The SVG `fill` attribute */
  fill?: string;
  /** The SVG `stroke` attribute */
  stroke?: string;
  /** (optional) If `true` the icon can receive focus */
  focusable?: boolean;
  /** (optional) If `true` the svg element will get aria-hidden="true" */
  decorative?: boolean;
  /** (optional) When using the icon as standalone, make it meaningful for accessibility */
  accessibilityTitle?: string;
  render(): any;
  getCssClassMap(): string;
}
