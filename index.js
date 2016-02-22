var binaryTree = require('./BinaryTree');

//var FibonacciHeap = require("js-data-structures").FibonacciHeap;
//var heap = new FibonacciHeap();
//heap.insert(3);
//heap.insert(7);
//heap.insert(8);
//heap.insert(1);
//heap.insert(2);
//
//while (!heap.isEmpty()) {
//    console.log(heap.extractMinimum());
//}

//Today is a tree day
var BinaryTree = require('./lib/binary-search-tree');
var tree = new BinaryTree();
tree.add(5);
var size = tree.size();
console.log(size);