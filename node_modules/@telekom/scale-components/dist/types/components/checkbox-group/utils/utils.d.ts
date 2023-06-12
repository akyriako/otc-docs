export interface CheckboxState {
  id: string;
  checked: boolean;
  disabled: boolean;
  indeterminate: boolean;
}
export declare const objDiffer: (obj1: CheckboxState[], obj2: CheckboxState[]) => boolean;
