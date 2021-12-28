export abstract class AbstractCollection<T> {
    protected collection: T[];
    protected collectionLimit: number;

    constructor(initialValues: T[] = [], collectionLimit = Infinity) {
        this.collection = initialValues;
        this.collectionLimit = collectionLimit;
    }

    /** Tells us if the collection is empty */
    get isEmpty() {
        return this.collection.length === 0;
    }

    /** Tells us if the collection is full */
    get isFull() {
        return this.collection.length === this.collectionLimit;
    }
}
