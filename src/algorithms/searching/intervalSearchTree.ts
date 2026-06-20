/* structure to represent an interval */
class Interval {
    low: number;
    high: number;

    constructor(low: number, high: number) {
        this.low = low;
        this.high = high;
    }
}

/* structure to represent an interval tree node */
class IntervalTreeNode {
    interval: Interval;
    max: number;
    left: IntervalTreeNode | null;
    right: IntervalTreeNode | null;

    constructor({ max, left, right, interval }: IntervalTreeNode) {
        this.interval = interval;
        this.max = max;
        this.left = left;
        this.right = right;
    }
}

/** function to create a new interval */
export function createInterval(low: number, high: number) {
    const interval = new Interval(low, high);
    return interval;
}

/** function to create a new tree node */
function createNewTreeNode(interval: Interval) {
    const intervalTreeNode = new IntervalTreeNode({
        interval,
        max: interval.high,
        left: null,
        right: null,
    });
    return intervalTreeNode;
}

/** insert a node into the interval tree */
function insertNodeIntoIntervalTree(intervalTreeNode: IntervalTreeNode | null, interval: Interval) {
    // base case the given interval becomes the root of the tree
    if (intervalTreeNode == null) return createNewTreeNode(interval);

    // Get low value of interval at root
    const low = intervalTreeNode.interval.low;

    // if root's low value is smaller, then new interval goes to left subtree
    if (interval.low < low) {
        intervalTreeNode.left = insertNodeIntoIntervalTree(intervalTreeNode.left, interval);
    } else {
        // otherwise new node goes to right subtree.
        intervalTreeNode.right = insertNodeIntoIntervalTree(intervalTreeNode.right, interval);
    }

    // Update the max value of this ancestor if needed
    if (intervalTreeNode.max < interval.high) intervalTreeNode.max = interval.high;
    return intervalTreeNode;
}

/** check for overlap between two intervals */
function isOverlapping(i1: Interval, i2: Interval) {
    if (i1.low < i2.high && i2.low < i1.high) return true;
    return false;
}

/** function to look for overlaps in the interval tree */
function overlapSearch(intervalTreeNode: IntervalTreeNode | null, interval: Interval): Interval | null {
    // base case tree is empty
    if (intervalTreeNode == null) return null;

    // when overlap is found return the interval
    if (isOverlapping(intervalTreeNode.interval, interval)) return intervalTreeNode.interval;

    // if left child node max is greater than current node check the left tree
    if (intervalTreeNode.left !== null && intervalTreeNode.left.max >= interval.low) {
        return overlapSearch(intervalTreeNode.left, interval);
    }

    // otherwise check the right side of the tree
    return overlapSearch(intervalTreeNode.right, interval);
}

/** find conflicts between given array of intervals */
export function findIntervalConflicts(intervals: Interval[]) {
    const [firstInterval, ...restOfIntervals] = intervals;
    const conflicts: [[number, number], [number, number]][] = [];

    let tree = insertNodeIntoIntervalTree(null, firstInterval);

    restOfIntervals.forEach((interval) => {
        const conflict = overlapSearch(tree, interval);

        if (conflict !== null) {
            conflicts.push([
                [interval.low, interval.high],
                [conflict.low, conflict.high],
            ]);
        }

        tree = insertNodeIntoIntervalTree(tree, interval);
    });

    return conflicts;
}

export function findConflictsBetweenTwoSetsOfIntervals(a: Interval[], b: Interval[]) {
    const conflicts: [[number, number], [number, number]][] = [];
    const [firstInterval, ...restOfIntervals] = a;
    let tree = insertNodeIntoIntervalTree(null, firstInterval);

    restOfIntervals.forEach((interval) => {
        tree = insertNodeIntoIntervalTree(tree, interval);
    });

    b.forEach((interval) => {
        const conflict = overlapSearch(tree, interval);

        if (conflict !== null) {
            conflicts.push([
                [interval.low, interval.high],
                [conflict.low, conflict.high],
            ]);
        }
    });

    return conflicts;
}
