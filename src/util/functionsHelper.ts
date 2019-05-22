export const curryFy = (fn: any, ...params: any) => (...props: any) => fn(...params, ...props);

export const runRecursiveFunctionAnyTimes: any = (fn: any, times: number, arr: Array<any>) => {
    if (times === 0) return arr;
    return runRecursiveFunctionAnyTimes(fn, times - 1, fn(arr));
};

export const runFunctionUntilToReturnNewValueInArray: any = (fn: any, arr: Array<any> = []) => {
    const newElement = fn()
    if (!arr.includes(newElement)) return [...arr, newElement]
    return runFunctionUntilToReturnNewValueInArray(fn, arr)
}
