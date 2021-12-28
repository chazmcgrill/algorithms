import { Queue } from '../Queue';

describe('Queue data structure', () => {
    it('isEmpty should return true if queue is empty', () => {
        const queue = new Queue<string>();
        expect(queue.isEmpty).toBeTruthy();
    });

    it('isEmpty should return false if queue is not empty', () => {
        const queue = new Queue<string>(['foo']);
        expect(queue.isEmpty).toBeFalsy();
    });

    it('isFull should return true if queue limit is reached', () => {
        const queue = new Queue<string>(['foo', 'bar'], 2);
        expect(queue.isFull).toBeTruthy();
    });

    it('isFull should return false if queue limit is not reached', () => {
        const queue = new Queue<string>(['foo'], 2);
        expect(queue.isFull).toBeFalsy();
    });

    it('gueueArray getter should return the top item from queue', () => {
        const queue = new Queue<string>(['foo', 'bar']);
        expect(queue.queueArray).toEqual(['foo', 'bar']);
    });

    it('enqueue should add the item to back of the queue', () => {
        const queue = new Queue<string>(['foo', 'bar']);
        expect(queue.enqueue('baz')).toEqual(3);
        expect(queue.queueArray).toEqual(['baz', 'foo', 'bar']);
    });

    it('enqueue should throw an error if queue is full', () => {
        const queue = new Queue<string>(['foo', 'bar'], 2);
        const enqueue = () => queue.enqueue('baz');
        expect(enqueue).toThrowError('Queue is full');
    });

    it('dequeue should remove the item from front of the queue', () => {
        const queue = new Queue<string>(['foo', 'bar', 'baz']);
        expect(queue.dequeue()).toEqual('baz');
        expect(queue.queueArray).toEqual(['foo', 'bar']);
    });

    it('dequeue should throw an error if queue is empty', () => {
        const queue = new Queue<string>();
        const pop = () => queue.dequeue();
        expect(pop).toThrowError('Queue is empty');
    });
});
