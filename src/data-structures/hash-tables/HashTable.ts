import { getNextPrime } from '../../algorithms/number/getNextPrime';

type Item<T> = [string, T];
type TableRow<T> = Item<T>[] | undefined;
type Table<T> = TableRow<T>[];

export const DEFAULT_PRIME_TABLE_SIZE = 2069;
const ARBITRARY_PRIME_NUMBER_A = 7;
const ARBITRARY_PRIME_NUMBER_B = 19;

export class HashTable<T> {
    private table: Table<T> = [];
    private numberItems = 0;

    /**
     * Efficient key value store using hashing
     *
     * @param initialItems array of items to preload with
     * @param initialTableSize size of table array should be a large prime number
     */
    constructor(initialItems: Item<T>[] = [], initialTableSize = DEFAULT_PRIME_TABLE_SIZE) {
        this.table = new Array(initialTableSize);

        initialItems.forEach(([key, value]) => {
            this.setItem(key, value);
        });
    }

    /** Add item to table or update if item already exists. Returns a boolean to say whether cound to should be incremented. */
    private addItemToTable(newItem: Item<T>, tableToAddTo: Table<T> = this.table): boolean {
        const [key, value] = newItem;
        const tableSize = tableToAddTo.length;
        const index = this.hashKeyToIndex(key, tableSize);
        if (!tableToAddTo[index]) tableToAddTo[index] = [];

        // check if item exists already
        const rowIndex = tableToAddTo[index]?.findIndex(([itemKey]) => itemKey === key);
        if (rowIndex !== -1 && rowIndex !== undefined) {
            // typescript complaining about this being possibly undefined ?
            (tableToAddTo[index] || [])[rowIndex][1] = value;
            return false;
        }

        tableToAddTo[index]?.push(newItem);
        return true;
    }

    /** Hasing function turns a key into a table index */
    private hashKeyToIndex(key: string, tableSize: number) {
        const letters = key.split('');
        const hash = letters.reduce((acc, letter) => {
            const charCode = letter.charCodeAt(0);
            acc = (ARBITRARY_PRIME_NUMBER_A * acc * charCode) % tableSize;
            return acc;
        }, ARBITRARY_PRIME_NUMBER_B);
        return hash;
    }

    /** Increases table size to maintain performance */
    private increaseTableSize() {
        const newTableSize = getNextPrime(this.getTableSize * 2);
        const newTable = new Array(newTableSize);

        this.table.forEach((tableRow) => {
            if (!tableRow) return;
            tableRow.forEach((existingItem) => {
                this.addItemToTable(existingItem, newTable);
            });
        });

        this.table = newTable;
    }

    private get isOverCapacityThreshold() {
        return this.numberItems >= this.getTableSize;
    }

    /** Get a simplified table array for unit testing */
    get getTableArray() {
        return this.table.filter((item) => item);
    }

    /** Get outer array size of the table */
    get getTableSize() {
        return this.table.length;
    }

    /** Adds key value pair to hash table */
    setItem(key: string, value: T) {
        const newItem: Item<T> = [key, value];

        if (this.isOverCapacityThreshold) this.increaseTableSize();

        const shouldIncrement = this.addItemToTable(newItem);
        if (shouldIncrement) this.numberItems += 1;
        return this.numberItems;
    }

    /** Adds keys value from hash table */
    getItem(key: string) {
        const index = this.hashKeyToIndex(key, this.getTableSize);
        const selectedItem = this.table[index]?.find((item) => item[0] === key);

        if (!this.table[index] || !selectedItem) throw new Error('Key not found');

        return selectedItem[1];
    }

    /** Deletes key value pair from hash table */
    deleteItem(key: string) {
        const tableIndex = this.hashKeyToIndex(key, this.getTableSize);
        const rowIndex = this.table[tableIndex]?.findIndex((item) => item[0] === key);

        if (!this.table[tableIndex] || rowIndex === -1 || rowIndex === undefined) {
            throw new Error('Key not found');
        }

        // When row only contains one item we want to remove the
        if (this.table[tableIndex]?.length === 1) {
            const [deletedRow] = this.table.splice(tableIndex, 1, undefined);
            return deletedRow?.[0];
        }

        // typescript complaining about it possible being undefined
        const [deletedItem] = (this.table[tableIndex] || []).splice(rowIndex, 1);
        return deletedItem;
    }
}
