/**
 * @module index
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';
//
//if (typeof exports === 'object' && typeof define !== 'function') {
//    var define = function (factory) {
//        factory(require, exports, module);
//    };
//}
//
//var define = function (factory) {
//    factory(require, exports, module);
//};
//
//define(function (require, exports, module) {
//    module.exports = {
//        BinarySearchTree: require('./lib/bst'),
//    };
//});

var BinarySearchTree = require('./lib/bst');

var newTree = new BinarySearchTree();
newTree.add(5);
newTree.add(6);
//var s = newTree.size();

//console.log(s);