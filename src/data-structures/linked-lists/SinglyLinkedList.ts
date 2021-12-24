import { AbstractLinkedList } from "./AbstractLinkedList";
import { ListNode } from "./ListNode";

/** Linked list with references to next nodes */
export class SinglyLinkedList<T> extends AbstractLinkedList<T> {
    constructor(initialValues: T[] = []) {
        super(initialValues)
    }

    push(value: T) {
        return this.handlePush(value);
    }

    unshift(value: T) {
        return this.handleUnshift(value);
    }

    insertAtIndex(index: number, value: T) {
        if (this.isIndexNotInRange(index)) return null;

        // can use existing methods if node to be removed is head or tail
        if (index === 0) return this.unshift(value);
        if (index === this.listLength) return this.push(value);

        const newNode = new ListNode(value);

        // get nodes before and after
        const nodeBefore = this.getNodeAtIndex(index);
        const nodeAfter = this.getNodeAtIndex(index - 1);

        // set the relevant next links
        newNode.next = nodeBefore;
        if (nodeAfter) nodeAfter.next = newNode;

        this.incrementListLength();
        return this;
    }

    shift() {
        if (!this.head) return null;

        const shiftedNode = this.head;
        const newHead = this.head.next;

        // set relevant head and tail
        if (!newHead) this.tail = newHead;
        this.head = newHead;

        this.decrementListLength();
        return shiftedNode;
    }

    pop() {
        if (!this.tail) return null;

        const poppedNode = this.tail;
        const newTail = this.getNodeAtIndex(this.listLength - 2);

        // if there is a new node to become the tail set next links
        if (newTail) {
            newTail.next = null;
            this.tail = newTail;
        } else {
            this.resetPointers();
        }

        this.decrementListLength();
        return poppedNode;
    }

    removeFromIndex(index: number) {
        if (this.isIndexNotInRange(index)) return null;

        // can use existing methods if node to be removed is head or tail
        if (index === 0) return this.shift();
        if (index === this.listLength - 1) return this.pop();

        const nodeAfter = this.getNodeAtIndex(index - 1);
        const removedNode = this.getNodeAtIndex(index);
        if (!nodeAfter || !removedNode) return null;

        // set the relevant next links
        nodeAfter.next = removedNode.next;
        removedNode.next = null;

        this.decrementListLength();
        return removedNode;
    }
}
