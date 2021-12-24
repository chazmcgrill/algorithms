import { AbstractLinkedList } from './AbstractLinkedList';
import { ListNode } from './ListNode';

/** Linked list with references to next and previous nodes */
export class DoublyLinkedList<T> extends AbstractLinkedList<T> {
    constructor(initialValues: T[] = []) {
        super(initialValues);
    }

    push(value: T) {
        return this.handlePush(value, true);
    }

    unshift(value: T) {
        return this.handleUnshift(value, true);
    }

    insertAtIndex(index: number, value: T) {
        if (this.isIndexNotInRange(index)) return null;

        // can use existing methods if node to be removed is head or tail
        if (index === 0) return this.unshift(value);
        if (index === this.listLength) return this.push(value);

        const newNode = new ListNode(value, true);

        // get nodes before and after
        const nodeAfter = this.getNodeAtIndex(index);
        if (!nodeAfter) return null;
        const nodeBefore = nodeAfter.previous;

        // set the relevant next and previous links
        nodeAfter.previous = newNode;
        if (nodeBefore) nodeBefore.next = newNode;
        newNode.next = nodeAfter;
        newNode.previous = nodeBefore;

        this.incrementListLength();
        return this;
    }

    shift() {
        if (!this.head) return null;

        const shiftedNode = this.head;
        const newHead = this.head.next;

        // if head next exists update relevant links
        if (newHead) {
            newHead.previous = null;
            shiftedNode.next = null;
            this.head = newHead;
        } else {
            this.resetPointers();
        }

        this.decrementListLength();
        return shiftedNode;
    }

    pop() {
        if (!this.tail) return null;

        const poppedNode = this.tail;
        const newTail = this.tail.previous;

        // if tail previous exists update relevant links
        if (newTail) {
            newTail.next = null;
            this.tail.previous = null;
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

        const removedNode = this.getNodeAtIndex(index);
        if (!removedNode) return null;

        // get nodes before and after
        const nodeAfter = removedNode.next;
        const nodeBefore = removedNode.previous;

        // set the relevant next and previous links
        removedNode.next = null;
        removedNode.previous = null;
        if (nodeBefore) nodeBefore.next = nodeAfter;
        if (nodeAfter) nodeAfter.previous = nodeBefore;

        this.decrementListLength();
        return removedNode;
    }
}
