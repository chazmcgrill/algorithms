export abstract class AbstractCollection<T> {
    protected stack: T[];
    protected stackLimit: number;

    constructor(initialValues: T[] = [], stackLimit = Infinity) {
        this.stack = initialValues;
        this.stackLimit = stackLimit;
    }

    /** Tells us if the collection is empty */
    get isEmpty() {
        return this.stack.length === 0;
    }

    /** Tells us if the collection is full */
    get isFull() {
        return this.stack.length === this.stackLimit;
    }
}
