import { ListNode } from "./ListNode";

export abstract class AbstractLinkedList<T> {
    protected head: ListNode<T> | null;
    protected tail: ListNode<T> | null;
    protected listLength: number;

    constructor(initialValues: T[] = []) {
        this.head = null;
        this.tail = null;
        this.listLength = 0;

        initialValues?.forEach(value => {
            this.push(value);
        });
    }

    /** Adds new node to the end of the list */
    abstract push(val: T): this

    /** Adds new node to the start of the list */
    abstract unshift(val: T): this

    /** Inserts new node at specific index position */
    abstract insertAtIndex(index: number, val: T): null | this

    /** Removes the first item from the list */
    abstract shift(): null | ListNode<T>

    /** Removes the last item from the list */
    abstract pop(): null | ListNode<T>

    /** Removes node at specific index */
    abstract removeFromIndex(index: number): ListNode<T> | null;

    protected incrementListLength() {
        this.listLength += 1
    }

    protected decrementListLength() {
        this.listLength -= 1
    }

    protected isIndexNotInRange(index: number) {
        return index < 0 || index > this.listLength;
    }

    /** Reset head and tail to null */
    protected resetPointers() {
        this.head = null;
        this.tail = null;
    }

    /** Generic handler for pushing */
    protected handlePush(value: T, isDoublyLinked?: boolean) {
        const newNode = new ListNode(value, isDoublyLinked);

        // when the list is already populated we need to update next and previous
        if (this.head && this.tail) {
            this.tail.next = newNode;
            if (isDoublyLinked) newNode.previous = this.tail;
        // if there is nothing in the list the new node becomes head and tail
        } else {
            this.head = newNode;
        }
        
        this.tail = newNode;
        this.incrementListLength();
        return this;
    }

    /** Generic handler for unshifting */
    protected handleUnshift(value: T, isDoublyLinked?: boolean) {
        const newNode = new ListNode(value, isDoublyLinked);

        // when the list is already populated we need to update next and previous
        if (this.head && this.tail) {
            if (isDoublyLinked) this.head.previous = newNode;
            newNode.next = this.head;
        // if there is nothing in the list the new node becomes head and tail
        } else {
            this.tail = newNode;
        }
        
        this.head = newNode;
        this.incrementListLength();
        return this;
    }

    /** Gets node at specific index */
    getNodeAtIndex(index: number) {
        if (index >= this.listLength || index < 0) return null;
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex !== index) {
            currentNode = currentNode?.next || null;
            currentIndex += 1;
        }
        return currentNode;
    }

    /** Sets node value at specific index */
    setNodeAtIndex(val: T, index: number) {
        const foundNode = this.getNodeAtIndex(index);
        if (foundNode) {
            foundNode.value = val;
            return foundNode;
        }
        return null;
    }

    /** Gets an array of all the lists node values */
    getArrayOfValues() {
        const valueArray = [];
        let currentNode = this.head;
        while (currentNode) {
            valueArray.push(currentNode.value);
            currentNode = currentNode?.next;
        }
        return valueArray;
    }
}
