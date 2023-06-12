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
import { Event, EventEmitter } from '../../stencil-public-runtime';
interface InputChangeEventDetail {
  value: string | number | boolean | undefined | null;
}
export declare class TextField {
  hostElement: HTMLElement;
  /** (optional) Input type */
  type?: 'email' | 'hidden' | 'number' | 'password' | 'tel' | 'text' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'url';
  /** (optional) Input mode */
  inputModeType?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  /** (optional) Input name */
  name?: string;
  /** Input label */
  label: string;
  /** @deprecated - css overwrite should replace size */
  size?: string;
  /** (optional) Input helper text */
  helperText?: string;
  /** @deprecated - invalid should replace status */
  status?: string;
  /** (optional) Input status */
  invalid?: boolean;
  /** (optional) Variant */
  variant?: 'informational' | 'warning' | 'danger' | 'success';
  /** (optional) Input text string max length */
  maxLength?: number;
  /** (optional) Input text string min length */
  minLength?: number;
  /** (optional) define the numeric maximum value of input types such as month, date, time */
  max?: number;
  /** (optional) defines the numeric minimum value of input types such as month, date, time */
  min?: number;
  /** (optional) Input placeHolder */
  placeholder?: string;
  /** (optional) Input disabled */
  disabled?: boolean;
  /** (optional) Input readonly */
  readonly?: boolean;
  /** (optional) Input required */
  required?: boolean;
  /** (optional) Input counter */
  counter?: boolean;
  /** (optional) Input value */
  value?: string | number | null;
  /** (optional) Input checkbox id */
  inputId?: string;
  /** (optional) input background transparent */
  transparent?: boolean;
  /** (optional) the step attribute specifies the interval between legal numbers in an <input type="number"> element. */
  step?: string;
  /** (optional) input list */
  list?: string;
  /** (optional) the input should automatically get focus when the page loads. */
  inputAutofocus?: boolean;
  /** (optional) custom value for autocomplete HTML attribute */
  inputAutocomplete?: string;
  /** (optional) id or space separated list of ids of elements that provide or link to additional related information. */
  ariaDetailedId?: string;
  /** (optional) to avoid displaying the label */
  hideLabelVisually?: boolean;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional)) Makes type `input` behave as a controlled component in React */
  experimentalControlled?: boolean;
  /** Emitted when a keyboard input occurred. */
  scaleInput: EventEmitter<KeyboardEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleInputLegacy: EventEmitter<KeyboardEvent>;
  /** Emitted when the value has changed. */
  scaleChange: EventEmitter<InputChangeEventDetail>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter<InputChangeEventDetail>;
  /** Emitted when the input has focus. */
  scaleFocus: EventEmitter<void>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleFocusLegacy: EventEmitter<void>;
  /** Emitted when the input loses focus. */
  scaleBlur: EventEmitter<void>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleBlurLegacy: EventEmitter<void>;
  /** Emitted on keydown. */
  scaleKeyDown: EventEmitter<KeyboardEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleKeyDownLegacy: EventEmitter<KeyboardEvent>;
  /** Whether the input element has focus */
  hasFocus: boolean;
  /** "forceUpdate" hack, set it to trigger and re-render */
  forceUpdate: string;
  private readonly internalId;
  componentWillLoad(): void;
  componentDidRender(): void;
  emitChange(): void;
  handleInput: (event: Event) => void;
  handleChange: (event: Event) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  render(): any;
  getCssClassMap(): string;
}
export {};
