export interface StackImplementation<T> {
    push: (data: T) => number;
    pop: () => T | undefined;
    peek: () => T;
    isEmpty: boolean;
    isFull: boolean;
}
