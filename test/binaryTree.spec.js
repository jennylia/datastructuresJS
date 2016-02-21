var chai = require('chai');
var assert = require('assert');
var binaryTree = require('./../binaryTree');

describe('binTree init test', function (){
    it('print hi', function(){
        var ans = binaryTree.sayHi();
        console.log(ans);
        assert(ans === "hi");
    });
});