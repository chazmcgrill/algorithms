import { AbstractLinkedList } from "./AbstractLinkedList";
import { ListNode } from "./ListNode";

export class SinglyLinkedList<T> extends AbstractLinkedList<T> {
    constructor(initialValues: T[] = []) {
        super(initialValues)
    }

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

    shift() {
        if (!this.head) return false;

        const shiftedNode = this.head;
        const newHead = this.head.next;

        if (!newHead) this.tail = newHead;

        this.head = newHead;
        this.listLength -= 1;
        return shiftedNode;
    }

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
}
