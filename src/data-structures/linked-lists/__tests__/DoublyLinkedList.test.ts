import { DoublyLinkedList } from '../DoublyLinkedList';

describe('DoublyLinkedList data structure', () => {
    it('getArrayOfValues returns a flattened array of node values', () => {
        const list = new DoublyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(list.getArrayOfValues()).toEqual(['foo', 'bar', 'baz']);
    });

    it('push method adds new nodes to end of list', () => {
        const list = new DoublyLinkedList<string>(['foo']);
        expect(list.push('bar')).toMatchInlineSnapshot(`
            DoublyLinkedList {
              "head": ListNode {
                "next": ListNode {
                  "next": null,
                  "previous": [Circular],
                  "value": "bar",
                },
                "previous": null,
                "value": "foo",
              },
              "listLength": 2,
              "tail": ListNode {
                "next": null,
                "previous": ListNode {
                  "next": [Circular],
                  "previous": null,
                  "value": "foo",
                },
                "value": "bar",
              },
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo', 'bar']);
    });

    it('unshift method adds new nodes to start of list', () => {
        const list = new DoublyLinkedList<string>(['baz']);
        expect(list.unshift('bar')).toMatchInlineSnapshot(`
            DoublyLinkedList {
              "head": ListNode {
                "next": ListNode {
                  "next": null,
                  "previous": [Circular],
                  "value": "baz",
                },
                "previous": null,
                "value": "bar",
              },
              "listLength": 2,
              "tail": ListNode {
                "next": null,
                "previous": ListNode {
                  "next": [Circular],
                  "previous": null,
                  "value": "bar",
                },
                "value": "baz",
              },
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['bar', 'baz']);
    });

    it('shift method removes node from start of list', () => {
        const list = new DoublyLinkedList<string>(['foo', 'bar']);
        expect(list.shift()).toMatchInlineSnapshot(`
            ListNode {
              "next": null,
              "previous": null,
              "value": "foo",
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['bar']);
    });

    it('pop method removes node from end of list', () => {
        const list = new DoublyLinkedList<string>(['foo', 'bar']);
        expect(list.pop()).toMatchInlineSnapshot(`
            ListNode {
              "next": null,
              "previous": null,
              "value": "bar",
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo']);
    });

    it('insertAtIndex inserts a node at specified index', () => {
        const list = new DoublyLinkedList<string>(['foo', 'baz']);
        expect(list.insertAtIndex(1, 'foobar')).toMatchInlineSnapshot(`
            DoublyLinkedList {
              "head": ListNode {
                "next": ListNode {
                  "next": ListNode {
                    "next": null,
                    "previous": [Circular],
                    "value": "baz",
                  },
                  "previous": [Circular],
                  "value": "foobar",
                },
                "previous": null,
                "value": "foo",
              },
              "listLength": 3,
              "tail": ListNode {
                "next": null,
                "previous": ListNode {
                  "next": [Circular],
                  "previous": ListNode {
                    "next": [Circular],
                    "previous": null,
                    "value": "foo",
                  },
                  "value": "foobar",
                },
                "value": "baz",
              },
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo', 'foobar', 'baz']);
    });

    it('removeFromIndex removes the node at specified index', () => {
        const list = new DoublyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(list.removeFromIndex(1)).toMatchInlineSnapshot(`
            ListNode {
              "next": null,
              "previous": null,
              "value": "bar",
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo', 'baz']);
    });

    it('getNodeAtIndex gets the node at specified index', () => {
        const list = new DoublyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(list.getNodeAtIndex(1)).toMatchInlineSnapshot(`
            ListNode {
              "next": ListNode {
                "next": null,
                "previous": [Circular],
                "value": "baz",
              },
              "previous": ListNode {
                "next": [Circular],
                "previous": null,
                "value": "foo",
              },
              "value": "bar",
            }
        `);
    });

    it('setNodeAtIndex sets the value of the node at specified index', () => {
        const list = new DoublyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(list.setNodeAtIndex('foobar', 1)).toMatchInlineSnapshot(`
            ListNode {
              "next": ListNode {
                "next": null,
                "previous": [Circular],
                "value": "baz",
              },
              "previous": ListNode {
                "next": [Circular],
                "previous": null,
                "value": "foo",
              },
              "value": "foobar",
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo', 'foobar', 'baz']);
    });
});
