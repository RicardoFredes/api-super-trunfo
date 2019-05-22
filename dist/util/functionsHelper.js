"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curryFy = (fn, ...params) => (...props) => fn(...params, ...props);
exports.runRecursiveFunctionAnyTimes = (fn, times, arr) => {
    if (times === 0)
        return arr;
    return exports.runRecursiveFunctionAnyTimes(fn, times - 1, fn(arr));
};
exports.runFunctionUntilToReturnNewValueInArray = (fn, arr = []) => {
    const newElement = fn();
    if (!arr.includes(newElement))
        return [...arr, newElement];
    return exports.runFunctionUntilToReturnNewValueInArray(fn, arr);
};
//# sourceMappingURL=functionsHelper.js.map