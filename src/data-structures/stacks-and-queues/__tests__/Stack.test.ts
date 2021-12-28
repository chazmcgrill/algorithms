import { Stack } from '../Stack';

describe('Stack data structure', () => {
    it('isEmpty should return true if stack is empty', () => {
        const stack = new Stack<string>();
        expect(stack.isEmpty).toBeTruthy();
    });

    it('isEmpty should return false if stack is not empty', () => {
        const stack = new Stack<string>(['foo']);
        expect(stack.isEmpty).toBeFalsy();
    });

    it('isFull should return true if stack limit is reached', () => {
        const stack = new Stack<string>(['foo', 'bar'], 2);
        expect(stack.isFull).toBeTruthy();
    });

    it('isFull should return false if stack limit is not reached', () => {
        const stack = new Stack<string>(['foo'], 2);
        expect(stack.isFull).toBeFalsy();
    });

    it('peek should return the top item from stack', () => {
        const stack = new Stack<string>(['foo', 'bar']);
        expect(stack.peek()).toEqual('bar');
    });

    it('peek should throw an error if stack is empty', () => {
        const stack = new Stack<string>();
        const peek = () => stack.peek();
        expect(peek).toThrowError('Stack is empty');
    });

    it('push should add the item to top of the stack', () => {
        const stack = new Stack<string>(['foo', 'bar']);
        expect(stack.push('baz')).toEqual(3);
        expect(stack.peek()).toEqual('baz');
    });

    it('push should throw an error if stack is full', () => {
        const stack = new Stack<string>(['foo', 'bar'], 2);
        const push = () => stack.push('baz');
        expect(push).toThrowError('Stack is full');
    });

    it('pop should remove the item from top of the stack', () => {
        const stack = new Stack<string>(['foo', 'bar']);
        expect(stack.pop()).toEqual('bar');
        expect(stack.peek()).toEqual('foo');
    });

    it('peek should throw an error if stack is empty', () => {
        const stack = new Stack<string>();
        const pop = () => stack.pop();
        expect(pop).toThrowError('Stack is empty');
    });
});
