/* eslint-disable */
// Queue helper class for binarySearchTree.breadthFirstForEach implementation
class Queue {
    constructor() {
        this.storage = [];
    }

    enqueue(x) {
        this.storage.push(x);
    }

    dequeue() {
        return this.storage.shift();
    }

    isEmpty() {
        return this.storage.length === 0;
    }
}

module.exports = Queue();
