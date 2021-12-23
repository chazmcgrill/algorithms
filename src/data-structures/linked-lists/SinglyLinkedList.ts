import { ListNode } from "./ListNode";

export class SinglyLinkedList<T> {
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
    push(val: T) {
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) this.tail.next = newNode;
            this.tail = newNode;
        }

        this.listLength += 1;
        return this;
    }

    /** Adds new node to the start of the list */
    unshift(val: T) {
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.listLength += 1;
        return this;
    }

    /** Inserts new node at specific index position */
    insertAtIndex(index: number, val: T) {
        if (index < 0 || index > this.listLength) return false;

        if (index === 0) return this.unshift(val);

        if (index === this.listLength) return this.push(val);

        const newNode = new ListNode(val);
        const after = this.getNodeAtIndex(index);
        const before = this.getNodeAtIndex(index - 1);
        newNode.next = after;
        if (before) before.next = newNode;

        this.listLength += 1;
        return this;
    }

    /** Removes the first item from the list */
    shift() {
        if (!this.head) return false;

        const shiftedNode = this.head;
        const newHead = this.head.next;

        if (!newHead) this.tail = newHead;

        this.head = newHead;
        this.listLength -= 1;
        return shiftedNode;
    }

    /** Removes the last item from the list */
    pop() {
        if (!this.tail) return false;

        const poppedNode = this.tail;

        if (this.head !== this.tail) {
            const newTail = this.getNodeAtIndex(this.listLength - 2);
            if (newTail) newTail.next = null;
            this.tail = newTail;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.listLength -= 1;
        return poppedNode;
    }

    /** Removes node at specific index */
    removeFromIndex(index: number) {
        if (index < 0 || index >= this.listLength) return false;

        if (index === 0) return this.shift();

        if (index === this.listLength - 1) return this.pop();

        const before = this.getNodeAtIndex(index - 1);
        const removedNode = this.getNodeAtIndex(index);
        if (!before || !removedNode) return false;

        before.next = removedNode.next;
        removedNode.next = null;

        this.listLength -= 1;
        return removedNode;
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
