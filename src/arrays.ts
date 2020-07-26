// filter array items matching passed arguments
export function seekAndDestroy<T>(arr: T[], ...args: T[]): T[] {
    return arr.filter(item => !args.includes(item));
}
