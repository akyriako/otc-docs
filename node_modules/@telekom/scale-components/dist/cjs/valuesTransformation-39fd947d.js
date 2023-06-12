'use strict';

function createCssString(setProp) {
  const values = setProp.breakpointValues;
  if (!isBreakpointValuesEmpty(values)) {
    const filledArray = fillEmptyBreakpointValues(values);
    const valuesObj = transformBreakpointValuesData(filledArray);
    const stringSizesArray = Object.entries(valuesObj).map(([key, value]) => `--${setProp.propName}-${key}:${value}`);
    return stringSizesArray.join(';') + ';';
  }
}
function isBreakpointValuesEmpty(values) {
  let isEmpty = true;
  for (const value of values) {
    if (value.value) {
      isEmpty = false;
      break;
    }
  }
  return isEmpty;
}
function fillEmptyBreakpointValues(values) {
  const filledArray = [...values];
  for (let i = 1; i < filledArray.length; i++) {
    if (!filledArray[i].value) {
      filledArray[i].value = filledArray[i - 1].value;
    }
  }
  return filledArray;
}
function transformBreakpointValuesData(values) {
  return values.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.breakpointName]: v.value })), {});
}
function propsToBreakpointValuesArray(values) {
  return [
    { breakpointName: 'sm', value: values[0] },
    { breakpointName: 'md', value: values[1] },
    { breakpointName: 'lg', value: values[2] },
    { breakpointName: 'xl', value: values[3] },
    { breakpointName: 'xxl', value: values[4] },
  ];
}
function createBreakpointValuedProp(propName, values) {
  if (!propName || !values) {
    return;
  }
  return {
    propName,
    breakpointValues: propsToBreakpointValuesArray(values.split(',')),
  };
}

exports.createBreakpointValuedProp = createBreakpointValuedProp;
exports.createCssString = createCssString;
