import { settableProps, SetProp, BreakpointValue } from './grid.interfaces';
export declare function createCssString(setProp: SetProp): string;
export declare function isBreakpointValuesEmpty(values: BreakpointValue[]): boolean;
export declare function fillEmptyBreakpointValues(values: BreakpointValue[]): BreakpointValue[];
export declare function transformBreakpointValuesData(values: BreakpointValue[]): {};
export declare function propsToBreakpointValuesArray(values: string[]): BreakpointValue[];
export declare function createBreakpointValuedProp(propName: settableProps, values: string): SetProp;
