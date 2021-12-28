import { AbstractCollection } from './AbstractCollection';

export class Queue<T> extends AbstractCollection<T> {
    constructor(initialValues: T[] = [], stackLimit = Infinity) {
        super(initialValues, stackLimit);
    }

    get queueArray() {
        return this.stack;
    }

    /** Adds an item to back of the queue */
    enqueue(data: T) {
        if (this.isFull) throw new Error('Queue is full');
        return this.stack.unshift(data);
    }

    /** Returns the item at the front of the queue */
    dequeue() {
        if (this.isEmpty) throw new Error('Queue is empty');
        return this.stack.pop();
    }
}
