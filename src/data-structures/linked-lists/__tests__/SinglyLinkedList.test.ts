import { SinglyLinkedList } from '../SinglyLinkedList';

describe('SinglyLinkedList data structure', () => {
    it('getArrayOfValues returns a flattened array of node values', () => {
        const list = new SinglyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(list.getArrayOfValues()).toEqual(['foo', 'bar', 'baz']);
    });

    it('push method adds new nodes to end of list', () => {
        const list = new SinglyLinkedList<string>(['foo']);
        expect(list.push('bar')).toMatchInlineSnapshot(`
            SinglyLinkedList {
              "head": ListNode {
                "next": ListNode {
                  "next": null,
                  "prev": undefined,
                  "value": "bar",
                },
                "prev": undefined,
                "value": "foo",
              },
              "listLength": 2,
              "tail": ListNode {
                "next": null,
                "prev": undefined,
                "value": "bar",
              },
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo', 'bar']);
    });

    it('unshift method adds new nodes to start of list', () => {
        const list = new SinglyLinkedList<string>(['baz']);
        expect(list.unshift('bar')).toMatchInlineSnapshot(`
            SinglyLinkedList {
              "head": ListNode {
                "next": ListNode {
                  "next": null,
                  "prev": undefined,
                  "value": "baz",
                },
                "prev": undefined,
                "value": "bar",
              },
              "listLength": 2,
              "tail": ListNode {
                "next": null,
                "prev": undefined,
                "value": "baz",
              },
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['bar', 'baz']);
    });

    it('shift method removes node from start of list', () => {
        const list = new SinglyLinkedList<string>(['foo', 'bar']);
        expect(list.shift()).toMatchInlineSnapshot(`
            ListNode {
              "next": ListNode {
                "next": null,
                "prev": undefined,
                "value": "bar",
              },
              "prev": undefined,
              "value": "foo",
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['bar']);
    });

    it('pop method removes node from end of list', () => {
        const list = new SinglyLinkedList<string>(['foo', 'bar']);
        expect(list.pop()).toMatchInlineSnapshot(`
            ListNode {
              "next": null,
              "prev": undefined,
              "value": "bar",
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo']);
    });

    it('insertAtIndex inserts a node at specified index', () => {
        const list = new SinglyLinkedList<string>(['foo', 'baz']);
        expect(list.insertAtIndex(1, 'foobar')).toMatchInlineSnapshot(`
            SinglyLinkedList {
              "head": ListNode {
                "next": ListNode {
                  "next": ListNode {
                    "next": null,
                    "prev": undefined,
                    "value": "baz",
                  },
                  "prev": undefined,
                  "value": "foobar",
                },
                "prev": undefined,
                "value": "foo",
              },
              "listLength": 3,
              "tail": ListNode {
                "next": null,
                "prev": undefined,
                "value": "baz",
              },
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo', 'foobar', 'baz']);
    });

    it('removeFromIndex removes the node at specified index', () => {
        const list = new SinglyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(list.removeFromIndex(1)).toMatchInlineSnapshot(`
            ListNode {
              "next": null,
              "prev": undefined,
              "value": "bar",
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo', 'baz']);
    });

    it('getNodeAtIndex gets the node at specified index', () => {
        const list = new SinglyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(list.getNodeAtIndex(1)).toMatchInlineSnapshot(`
            ListNode {
              "next": ListNode {
                "next": null,
                "prev": undefined,
                "value": "baz",
              },
              "prev": undefined,
              "value": "bar",
            }
        `);
    });

    it('setNodeAtIndex sets the value of the node at specified index', () => {
        const list = new SinglyLinkedList<string>(['foo', 'bar', 'baz']);
        expect(list.setNodeAtIndex('foobar', 1)).toMatchInlineSnapshot(`
            ListNode {
              "next": ListNode {
                "next": null,
                "prev": undefined,
                "value": "baz",
              },
              "prev": undefined,
              "value": "foobar",
            }
        `);
        expect(list.getArrayOfValues()).toEqual(['foo', 'foobar', 'baz']);
    });
});
