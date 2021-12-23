import { DoublyLinkedList } from '../DoublyLinkedList';

describe('DoublyLinkedList data structure', () => {
    it('getArrayOfValues returns a flattened array of node values', () => {
        const singlyLinkedList = new DoublyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'bar', 'baz']);
    });

    it('push method adds new nodes to end of list', () => {
        const singlyLinkedList = new DoublyLinkedList<string>(['foo']);
        expect(singlyLinkedList.push('bar')).toMatchInlineSnapshot(`
            DoublyLinkedList {
              "head": ListNode {
                "next": ListNode {
                  "next": null,
                  "prev": [Circular],
                  "value": "bar",
                },
                "prev": null,
                "value": "foo",
              },
              "listLength": 2,
              "tail": ListNode {
                "next": null,
                "prev": ListNode {
                  "next": [Circular],
                  "prev": null,
                  "value": "foo",
                },
                "value": "bar",
              },
            }
        `);
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'bar']);
    });

    it('unshift method adds new nodes to start of list', () => {
        const singlyLinkedList = new DoublyLinkedList<string>(['baz']);
        expect(singlyLinkedList.unshift('bar')).toMatchInlineSnapshot(`
            DoublyLinkedList {
              "head": ListNode {
                "next": ListNode {
                  "next": null,
                  "prev": [Circular],
                  "value": "baz",
                },
                "prev": undefined,
                "value": "bar",
              },
              "listLength": 2,
              "tail": ListNode {
                "next": null,
                "prev": ListNode {
                  "next": [Circular],
                  "prev": undefined,
                  "value": "bar",
                },
                "value": "baz",
              },
            }
        `);
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['bar', 'baz']);
    });

    it('shift method removes node from start of list', () => {
        const singlyLinkedList = new DoublyLinkedList<string>(['foo', 'bar']);
        expect(singlyLinkedList.shift()).toMatchInlineSnapshot(`
            ListNode {
              "next": null,
              "prev": null,
              "value": "foo",
            }
        `);
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['bar']);
    });

    it('pop method removes node from end of list', () => {
        const singlyLinkedList = new DoublyLinkedList<string>(['foo', 'bar']);
        expect(singlyLinkedList.pop()).toMatchInlineSnapshot(`
            ListNode {
              "next": null,
              "prev": null,
              "value": "bar",
            }
        `);
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo']);
    });

    it('insertAtIndex inserts a node at specified index', () => {
        const singlyLinkedList = new DoublyLinkedList<string>(['foo', 'baz']);
        expect(singlyLinkedList.insertAtIndex(1, 'foobar')).toMatchInlineSnapshot(`
            DoublyLinkedList {
              "head": ListNode {
                "next": ListNode {
                  "next": ListNode {
                    "next": null,
                    "prev": [Circular],
                    "value": "baz",
                  },
                  "prev": [Circular],
                  "value": "foobar",
                },
                "prev": null,
                "value": "foo",
              },
              "listLength": 3,
              "tail": ListNode {
                "next": null,
                "prev": ListNode {
                  "next": [Circular],
                  "prev": ListNode {
                    "next": [Circular],
                    "prev": null,
                    "value": "foo",
                  },
                  "value": "foobar",
                },
                "value": "baz",
              },
            }
        `);
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'foobar', 'baz']);
    });

    it('removeFromIndex removes the node at specified index', () => {
        const singlyLinkedList = new DoublyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(singlyLinkedList.removeFromIndex(1)).toMatchInlineSnapshot(`
            ListNode {
              "next": null,
              "prev": null,
              "value": "bar",
            }
        `);
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'baz']);
    });

    it('getNodeAtIndex gets the node at specified index', () => {
        const singlyLinkedList = new DoublyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(singlyLinkedList.getNodeAtIndex(1)).toMatchInlineSnapshot(`
            ListNode {
              "next": ListNode {
                "next": null,
                "prev": [Circular],
                "value": "baz",
              },
              "prev": ListNode {
                "next": [Circular],
                "prev": null,
                "value": "foo",
              },
              "value": "bar",
            }
        `);
    });

    it('setNodeAtIndex sets the value of the node at specified index', () => {
        const singlyLinkedList = new DoublyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(singlyLinkedList.setNodeAtIndex(1, 'foobar')).toMatchInlineSnapshot(`
            ListNode {
              "next": ListNode {
                "next": null,
                "prev": [Circular],
                "value": "baz",
              },
              "prev": ListNode {
                "next": [Circular],
                "prev": null,
                "value": "foo",
              },
              "value": "foobar",
            }
        `);
        expect(singlyLinkedList.getArrayOfValues()).toEqual(['foo', 'foobar', 'baz']);
    });
});
