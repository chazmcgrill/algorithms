import { AbstractLinkedList } from "./AbstractLinkedList";
import { ListNode } from "./ListNode";

export class SinglyLinkedList<T> extends AbstractLinkedList<T> {
    constructor(initialValues: T[] = []) {
        super(initialValues)
    }

    push(val: T) {
        const newNode = new ListNode(val);

        if (this.head && this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        
        this.tail = newNode;
        this.incrementListLength();
        return this;
    }

    unshift(val: T) {
        const newNode = new ListNode(val);

        if (this.head) {
            newNode.next = this.head;
        } else {
            this.tail = newNode;
        }
        
        this.head = newNode;
        this.incrementListLength();
        return this;
    }

    insertAtIndex(index: number, val: T) {
        if (this.isIndexNotInRange(index)) return null;

        // can use existing methods if node to be removed is head or tail
        if (index === 0) return this.unshift(val);
        if (index === this.listLength) return this.push(val);

        const newNode = new ListNode(val);
        const previousNode = this.getNodeAtIndex(index);
        const nextNode = this.getNodeAtIndex(index - 1);
        newNode.next = previousNode;
        if (nextNode) nextNode.next = newNode;

        this.incrementListLength();
        return this;
    }

    shift() {
        if (!this.head) return null;

        const shiftedNode = this.head;
        const newHead = this.head.next;

        if (!newHead) this.tail = newHead;

        this.head = newHead;
        this.decrementListLength();
        return shiftedNode;
    }

    pop() {
        if (!this.tail) return null;

        const poppedNode = this.tail;

        if (this.head !== this.tail) {
            const newTail = this.getNodeAtIndex(this.listLength - 2);
            if (newTail) newTail.next = null;
            this.tail = newTail;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.decrementListLength();
        return poppedNode;
    }

    removeFromIndex(index: number) {
        if (this.isIndexNotInRange(index)) return null;

        // can use existing methods if node to be removed is head or tail
        if (index === 0) return this.shift();
        if (index === this.listLength - 1) return this.pop();

        const nextNode = this.getNodeAtIndex(index - 1);
        const removedNode = this.getNodeAtIndex(index);
        if (!nextNode || !removedNode) return null;

        nextNode.next = removedNode.next;
        removedNode.next = null;

        this.decrementListLength();
        return removedNode;
    }
}
