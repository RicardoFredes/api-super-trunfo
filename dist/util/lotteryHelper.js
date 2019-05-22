"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const functionsHelper = __importStar(require("./functionsHelper"));
const { curryFy, runFunctionUntilToReturnNewValueInArray, runRecursiveFunctionAnyTimes } = functionsHelper;
const randomNumberFromZeroToX = (x) => Math.floor(x * Math.random());
const randomNotRepeatNumberUntilMax = (x) => (max) => {
    const executor = () => randomNumberFromZeroToX(max);
    const recurFn = curryFy(runFunctionUntilToReturnNewValueInArray, executor);
    return runRecursiveFunctionAnyTimes(recurFn, x, []);
};
exports.lotteryXElementsInArray = (x, array) => {
    const max = array.length;
    if (x > max)
        x = max;
    const numbers = randomNotRepeatNumberUntilMax(x)(max);
    return numbers.map((i) => array[i]);
};
//# sourceMappingURL=lotteryHelper.js.map