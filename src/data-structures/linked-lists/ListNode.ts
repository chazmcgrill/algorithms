export class ListNode<T> {
    public value: T;
    public next: ListNode<T> | null;
    public prev: ListNode<T> | null | undefined;

    constructor(value: T, isDoublyLinked?: boolean) {
        this.value = value;
        this.next = null;
        this.prev = isDoublyLinked ? null : undefined;
    }
}