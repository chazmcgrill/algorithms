import { SinglyLinkedList } from '../SinglyLinkedList';

describe('SinglyLinkedList data structure', () => {
    it('getArrayOfValues returns a flattened array of node values', () => {
        const singlyLinkedList = new SinglyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'bar', 'baz']);
    });

    it('push method adds new nodes to end of list', () => {
        const singlyLinkedList = new SinglyLinkedList<string>(['foo']);
        expect(singlyLinkedList.push('bar')).toEqual({ 
            head: { next: { next: null, value: 'bar' }, value: 'foo' },
            listLength: 2,
            tail: { next: null, value: 'bar' },
        });
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'bar']);
    });

    it('unshift method adds new nodes to start of list', () => {
        const singlyLinkedList = new SinglyLinkedList<string>(['baz']);
        expect(singlyLinkedList.unshift('bar')).toEqual({
            head: { next: { next: null, value: 'baz' }, value: 'bar' },
            listLength: 2,
            tail: { next: null, value: 'baz' },
        });
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['bar', 'baz']);
    });

    it('shift method removes node from start of list', () => {
        const singlyLinkedList = new SinglyLinkedList<string>(['foo', 'bar']);
        expect(singlyLinkedList.shift()).toEqual({
            next: { next: null, value: 'bar' },
            value: 'foo',
        });
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['bar']);
    });

    it('pop method removes node from end of list', () => {
        const singlyLinkedList = new SinglyLinkedList<string>(['foo', 'bar']);
        expect(singlyLinkedList.pop()).toEqual({
            next: null,
            value: 'bar'
        });
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo']);
    });

    it('insertAtIndex inserts a node at specified index', () => {
        const singlyLinkedList = new SinglyLinkedList<string>(['foo', 'baz']);
        expect(singlyLinkedList.insertAtIndex(1, 'foobar')).toEqual({
            head: {
                next: {
                    next: { next: null, value: 'baz' },
                    value: 'foobar'
                },
                value: 'foo'
            },
            listLength: 3,
            tail: { next: null, value: 'baz' }
        });
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'foobar', 'baz']);
    });

    it('removeFromIndex removes the node at specified index', () => {
        const singlyLinkedList = new SinglyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(singlyLinkedList.removeFromIndex(1)).toEqual({ next: null, value: 'bar' });
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'baz']);
    });

    it('getNodeAtIndex gets the node at specified index', () => {
        const singlyLinkedList = new SinglyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(singlyLinkedList.getNodeAtIndex(1)).toEqual({ next: { next: null, value: 'baz' }, value: 'bar' });
    });

    it('setNodeAtIndex sets the value of the node at specified index', () => {
        const singlyLinkedList = new SinglyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(singlyLinkedList.setNodeAtIndex('foobar', 1)).toEqual({ next: { next: null, value: 'baz' }, value: 'foobar' });
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'foobar', 'baz']);
    });
});