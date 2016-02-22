var binaryTree = require('./BinaryTree');

var FibonacciHeap = require("js-data-structures").FibonacciHeap;
var heap = new FibonacciHeap();
heap.insert(3);
heap.insert(7);
heap.insert(8);
heap.insert(1);
heap.insert(2);

while (!heap.isEmpty()) {
    console.log(heap.extractMinimum());
}