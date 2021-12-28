import { StackImplementation } from './types';

/** Stack data structure last in first out (LIFO) */
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

    /** Tells us if the stack is empty */
    get isEmpty() {
        return this.stack.length === 0;
    }

    /** Tells us if the stack is full */
    get isFull() {
        return this.stack.length === this.stackLimit;
    }

    /** Adds item to the top of the data stack */
    push(data: T) {
        if (this.isFull) throw new Error('Stack is full');
        return this.stack.push(data);
    }

    /** Pops the top item off the stack */
    pop() {
        if (this.isEmpty) throw new Error('Stack is empty');
        return this.stack.pop();
    }

    /** Looks at the item at the top of the stack without popping */
    peek() {
        if (this.isEmpty) throw new Error('Stack is empty');
        const stackTopIndex = this.getStackTopIndex;
        return this.stack[stackTopIndex];
    }
}
