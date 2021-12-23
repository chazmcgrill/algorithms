import { ListNode } from "./ListNode";

export class DoublyLinkedList<T> {
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
        const newNode = new ListNode(val, true);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) this.tail.next = newNode;
            newNode.prev = this.tail;
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
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.listLength += 1;
        return this;
    }

    /** Inserts new node at specific index position */
    insertAtIndex(index: number, val: T) {
        if (index > this.listLength) return false;

        if (index === 0) {
            this.unshift(val);
        } else if (index === this.listLength) {
            this.push(val);
        } else {
            const newNode = new ListNode(val);
            const after = this.getNodeAtIndex(index);
            if (!after) return false;

            const before = after.prev;
            after.prev = newNode;
            if (before) before.next = newNode;
            newNode.next = after;
            newNode.prev = before;
            this.listLength += 1;
        }
        return this;
    }

    /** Removes the first item from the list */
    shift() {
        if (!this.head) return false;

        const shiftedNode = this.head;
        const newHead = this.head.next;

        if (this.head !== this.tail) {
            if (newHead) newHead.prev = null;
            shiftedNode.next = null;
        } else {
            this.tail = null;
        }

        this.head = newHead;
        this.listLength -= 1;
        return shiftedNode;
    }

    /** Removes the last item from the list */
    pop() {
        if (this.listLength === 0) return false;

        const popped = this.tail;
        const newTail = this.tail?.prev || null;

        if (newTail) {
            newTail.next = null;
            if (this.tail) this.tail.prev = null;
        } else {
            this.head = null;
        }

        this.tail = newTail;
        this.listLength -= 1;

        return popped;
    }

    /** Removes node at specific index */
    removeFromIndex(index: number) {
        let removedNode;
        if (index >= this.listLength) return false;

        if (index == 0) {
            removedNode = this.shift();
        } else if (index == this.listLength - 1) {
            removedNode = this.pop();
        } else {
            removedNode = this.getNodeAtIndex(index);
            if (!removedNode || removedNode === true) return false;

            const after = removedNode.next;
            const before = removedNode.prev;
            removedNode.next = null;
            removedNode.prev = null;
            if (before) before.next = after;
            if (after) after.prev = before;
            this.listLength -= 1;
        }
        return removedNode;
    }

    /** Gets node at specific index */
    getNodeAtIndex(index: number) {
        if (index >= this.listLength || index < 0) {
            return false;
        }
        
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode?.next || null;
            currentIndex++;
        }
        return currentNode;
    }
        
    /** Sets node value at specific index */
    setNodeAtIndex(index: number, val: T) {
        const foundNode = this.getNodeAtIndex(index)
        if (foundNode) {
            foundNode.value = val
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