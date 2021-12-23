import { AbstractLinkedList } from "./AbstractLinkedList";
import { ListNode } from "./ListNode";

export class DoublyLinkedList<T> extends AbstractLinkedList<T> {
    constructor(initialValues: T[] = []) {
        super(initialValues)
    }

    push(value: T) {
        const newNode = new ListNode(value, true);

        if (this.head && this.tail) {
            this.tail.next = newNode;
            newNode.previous = this.tail;
        } else {
            this.head = newNode;
        }
        
        this.tail = newNode;
        this.incrementListLength();
        return this;
    }

    unshift(value: T) {
        const newNode = new ListNode(value);

        if (this.head && this.tail) {
            this.head.previous = newNode;
            newNode.next = this.head;
        } else {
            this.tail = newNode;
        }
        
        this.head = newNode;
        this.incrementListLength();
        return this;
    }

    insertAtIndex(index: number, value: T) {
        if (this.isIndexNotInRange(index)) return null;

        // can use existing methods if node to be removed is head or tail
        if (index === 0) return this.unshift(value);
        if (index === this.listLength) return this.push(value);
        
        const newNode = new ListNode(value);
        const nextNode = this.getNodeAtIndex(index);
        if (!nextNode) return null;

        const previousNode = nextNode.previous;
        nextNode.previous = newNode;
        if (previousNode) previousNode.next = newNode;
        newNode.next = nextNode;
        newNode.previous = previousNode;
        this.incrementListLength();
    
        return this;
    }

    shift() {
        if (!this.head) return null;

        const shiftedNode = this.head;
        const newHead = this.head.next;

        if (this.head !== this.tail) {
            if (newHead) newHead.previous = null;
            shiftedNode.next = null;
        } else {
            this.tail = null;
        }

        this.head = newHead;
        this.decrementListLength();
        return shiftedNode;
    }

    pop() {
        if (this.listLength === 0) return null;

        const poppedNode = this.tail;
        const newTail = this.tail?.previous || null;

        if (newTail) {
            newTail.next = null;
            if (this.tail) this.tail.previous = null;
        } else {
            this.head = null;
        }

        this.tail = newTail;
        this.decrementListLength();

        return poppedNode;
    }

    removeFromIndex(index: number) {
        if (this.isIndexNotInRange(index)) return null;

        // can use existing methods if node to be removed is head or tail
        if (index === 0) return this.shift();
        if (index === this.listLength - 1) return this.pop();

        const removedNode = this.getNodeAtIndex(index);
        if (!removedNode) return null;

        const nextNode = removedNode.next;
        const previousNode = removedNode.previous;
        removedNode.next = null;
        removedNode.previous = null;
        if (previousNode) previousNode.next = nextNode;
        if (nextNode) nextNode.previous = previousNode;
        this.decrementListLength();

        return removedNode;
    }
}