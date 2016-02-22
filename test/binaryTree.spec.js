var chai = require('chai');
var assert = require('assert');
var binaryTree = require('./../BinaryTree');

describe('binTree init test', function (){
    //it('print hi', function(){
    //    var ans = binaryTree.sayHi();
    //    console.log(ans);
    //    assert(ans === "hi");
    //});

    it('should say hello world jenny', function() {
        var tree = new binaryTree();
        var ans = tree.helloWorld("jenny");
        console.log(ans);
    });
});
