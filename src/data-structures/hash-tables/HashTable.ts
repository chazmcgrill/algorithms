type Item<T> = [string, T];
type Table<T> = Item<T>[][];

const DEFAULT_PRIME_TABLE_SIZE = 2069;
const ARBITRARY_PRIME_NUMBER_A = 7;
const ARBITRARY_PRIME_NUMBER_B = 19;

export class HashTable<T> {
    private table: Table<T> = [];
    private numberItems = 0;

    /**
     * @param initialItems array of items to preload with
     * @param initialTableSize size of table array should be a large prime number
     */
    constructor(initialItems: Item<T>[] = [], initialTableSize = DEFAULT_PRIME_TABLE_SIZE) {
        this.table = new Array(initialTableSize);

        initialItems.forEach(([key, value]) => {
            this.setItem(key, value);
        });
    }

    private addItemToTable(newItem: Item<T>, tableToAddTo: Table<T> = this.table) {
        const [key] = newItem;
        const tableSize = tableToAddTo.length;
        const index = this.hashKeyToIndex(key, tableSize);
        if (!tableToAddTo[index]) tableToAddTo[index] = [];
        tableToAddTo[index].push(newItem);
    }

    private hashKeyToIndex(key: string, tableSize: number) {
        const letters = key.split('');
        const hash = letters.reduce((acc, letter) => {
            const charCode = letter.charCodeAt(0);
            acc = (ARBITRARY_PRIME_NUMBER_A * acc * charCode) % tableSize;
            return acc;
        }, ARBITRARY_PRIME_NUMBER_B);
        return hash;
    }

    private increaseTableSize() {
        // TODO should be another prime number
        const newTableSize = this.getTableSize * 2;
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

    setItem(key: string, value: T) {
        const newItem: Item<T> = [key, value];

        if (this.isOverCapacityThreshold) this.increaseTableSize();

        this.addItemToTable(newItem);
        this.numberItems += 1;
        return this.numberItems;
    }

    getItem = (key: string) => {
        const index = this.hashKeyToIndex(key, this.getTableSize);
        const selectedItem = this.table[index]?.find((item) => item[0] === key);

        if (!this.table[index] || !selectedItem) throw new Error('Key not found');

        return selectedItem[1];
    };
}
