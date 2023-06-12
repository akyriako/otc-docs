/**
 * Copy/pasted from https://github.com/andreasbm/focus-trap
 */
/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * We need to traverse each child-depth one at a time because if an element should be skipped
 * (for example because it is hidden) we need to skip all of it's children. If we use querySelectorAll("*")
 * the information of whether the children is within a hidden parent is lost.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
export declare function queryShadowRoot(root: ShadowRoot | HTMLElement, skipNode: ($elem: HTMLElement) => boolean, isMatch: ($elem: HTMLElement) => boolean, maxDepth?: number, depth?: number): HTMLElement[];
/**
 * Returns whether the element is hidden.
 * @param $elem
 */
export declare function isHidden($elem: HTMLElement): boolean;
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
export declare function isDisabled($elem: HTMLElement): boolean;
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
export declare function isFocusable($elem: HTMLElement): boolean;
