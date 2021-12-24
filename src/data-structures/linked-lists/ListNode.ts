export class ListNode<T> {
    public value: T;
    public next: ListNode<T> | null;
    public previous: ListNode<T> | null | undefined;

    constructor(value: T, isDoublyLinked?: boolean) {
        this.value = value;
        this.next = null;
        this.previous = isDoublyLinked ? null : undefined;
    }
}
