import { DEFAULT_PRIME_TABLE_SIZE, HashTable } from '../HashTable';

describe('HashTable data structure', () => {
    it('getTableArray should return a nested array of key values', () => {
        const hashTable = new HashTable([
            ['foo', 21],
            ['bar', 35],
        ]);
        expect(hashTable.getTableArray).toEqual([[['bar', 35]], [['foo', 21]]]);
    });

    it('setItem should add the item to the hash table', () => {
        const hashTable = new HashTable([['foo', 21]]);
        expect(hashTable.setItem('baz', 45)).toEqual(2);
        expect(hashTable.getTableArray).toEqual([[['baz', 45]], [['foo', 21]]]);
    });

    it('setItem should return the amount of items', () => {
        const hashTable = new HashTable([['foo', 21]]);
        expect(hashTable.setItem('baz', 33)).toEqual(2);
        expect(hashTable.setItem('bar', 1)).toEqual(3);
    });

    it('getItem should return associated value', () => {
        const hashTable = new HashTable([
            ['foo', 21],
            ['bar', 35],
        ]);
        expect(hashTable.getItem('bar')).toEqual(35);
        expect(hashTable.getItem('foo')).toEqual(21);
    });

    it("getItem should throw error if key doesn't exist", () => {
        const hashTable = new HashTable([['foo', 21]]);
        const getItem = () => hashTable.getItem('bar');
        expect(getItem).toThrowError('Key not found');
    });

    it('deleteItem should remove item from table', () => {
        const hashTable = new HashTable([
            ['foo', 21],
            ['bar', 35],
        ]);
        expect(hashTable.deleteItem('bar')).toEqual(['bar', 35]);
        expect(hashTable.getTableArray).toEqual([[['foo', 21]]]);
        expect(hashTable.getTableSize).toEqual(DEFAULT_PRIME_TABLE_SIZE);
    });

    it("deleteItem should throw error if key doesn't exist", () => {
        const hashTable = new HashTable([['foo', 21]]);
        const deleteItem = () => hashTable.deleteItem('bar');
        expect(deleteItem).toThrowError('Key not found');
    });

    it('table should resize if capacity threshold is breached', () => {
        const hashTable = new HashTable(
            [
                ['baz', 45],
                ['foo', 21],
            ],
            3,
        );
        expect(hashTable.getTableSize).toEqual(3);
        hashTable.setItem('bar', 22);
        hashTable.setItem('fiz', 11);
        expect(hashTable.getTableSize).toEqual(7);
        expect(hashTable.getItem('foo')).toEqual(21);
    });

    it('the hashing function should spread items across different indexes', () => {
        const hashTable = new HashTable([
            ['foo', 21],
            ['bar', 35],
            ['car', 66],
            ['taz', 99],
        ]);
        expect(hashTable.getTableArray).toEqual([[['car', 66]], [['bar', 35]], [['taz', 99]], [['foo', 21]]]);
    });

    it('the hashing function should handle collisions by grouping items', () => {
        const hashTable = new HashTable(
            [
                ['foo', 21],
                ['bar', 35],
                ['car', 66],
                ['taz', 99],
            ],
            4,
        );
        expect(hashTable.getTableArray).toEqual([
            [
                ['bar', 35],
                ['taz', 99],
            ],
            [
                ['foo', 21],
                ['car', 66],
            ],
        ]);
    });
});
