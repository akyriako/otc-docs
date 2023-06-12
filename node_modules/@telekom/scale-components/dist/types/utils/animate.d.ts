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
 * @see https://www.youtube.com/watch?v=9-6CKCz58A8
 */
export declare function animateTo(element: HTMLElement, keyframes: Keyframe | Keyframe[], options?: KeyframeAnimationOptions): Animation;
export declare const KEYFRAMES: {
  fadeIn: {
    opacity: number;
    easing: string;
    offset: number;
  }[];
  fadeOut: {
    opacity: number;
    easing: string;
    offset: number;
  }[];
  fadeInTop: ({
    opacity: number;
    /**
     * we are not using transform here to avoid breaking positioning for nested fixed elements (i.e. a flyout menu in an animated modal)
     * see 'fixed' section @link https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    top: string;
    easing: string;
    offset: number;
  } | {
    opacity: number;
    top: number;
    easing: string;
    offset: number;
  })[];
};
