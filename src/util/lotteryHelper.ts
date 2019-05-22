import * as functionsHelper from './functionsHelper';

const { curryFy, runFunctionUntilToReturnNewValueInArray, runRecursiveFunctionAnyTimes } = functionsHelper;

const randomNumberFromZeroToX = (x: number) => Math.floor(x * Math.random());

const randomNotRepeatNumberUntilMax = (x: number) => (max: number) => {
    const executor = () => randomNumberFromZeroToX(max)
    const recurFn = curryFy(runFunctionUntilToReturnNewValueInArray, executor)
    return runRecursiveFunctionAnyTimes(recurFn, x, [])
};

export const lotteryXElementsInArray = (x: number, array: Array<any>) => {
    const max = array.length;
    if (x > max) x = max;
    const numbers = randomNotRepeatNumberUntilMax(x)(max);
    return numbers.map((i: number) => array[i]);
};