import { AbstractCollection } from './AbstractCollection';

/** Stack data structure last in first out (LIFO) */
export class Stack<T> extends AbstractCollection<T> {
    constructor(initialValues: T[] = [], stackLimit = Infinity) {
        super(initialValues, stackLimit);
    }

    private get getStackTopIndex() {
        return this.collection.length - 1;
    }

    /** Adds item to the top of the data stack */
    push(data: T) {
        if (this.isFull) throw new Error('Stack is full');
        return this.collection.push(data);
    }

    /** Pops the top item off the stack */
    pop() {
        if (this.isEmpty) throw new Error('Stack is empty');
        return this.collection.pop();
    }

    /** Looks at the item at the top of the stack without popping */
    peek() {
        if (this.isEmpty) throw new Error('Stack is empty');
        const stackTopIndex = this.getStackTopIndex;
        return this.collection[stackTopIndex];
    }
}
