import { StackImplementation } from './types';

export class Stack<T> implements StackImplementation<T> {
    private stack: T[];
    private stackLimit: number;

    constructor(initialValues: T[] = [], stackLimit = Infinity) {
        this.stack = initialValues;
        this.stackLimit = stackLimit;
    }

    private get getStackTopIndex() {
        return this.stack.length - 1;
    }

    get isEmpty() {
        return this.stack.length === 0;
    }

    get isFull() {
        return this.stack.length === this.stackLimit;
    }

    push(data: T) {
        if (this.isFull) throw new Error('Stack is full');
        return this.stack.push(data);
    }

    pop() {
        if (this.isEmpty) throw new Error('Stack is empty');
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty) throw new Error('Stack is empty');
        const stackTopIndex = this.getStackTopIndex;
        return this.stack[stackTopIndex];
    }
}
