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
    abstract insertAtIndex(index: number, val: T): false | this

    /** Removes the first item from the list */
    abstract shift(): false | ListNode<T>

    /** Removes the last item from the list */
    abstract pop(): false | ListNode<T> | null

    /** Removes node at specific index */
    abstract removeFromIndex(index: number): boolean | ListNode<T> | null

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
