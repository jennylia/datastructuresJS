var chai = require('chai');
var assert = require('assert');
var binaryTree = require('./../BinaryTree');
var async = require('async');

describe('binTree init test', function () {

    var tree = new binaryTree();


    it.skip('should say hello world jenny', function () {
        var ans = tree.helloWorld("jenny");
        //console.log(ans);
    });

    it('will return a height of 0 initially', function () {
        var height = tree.getHeight();
        //console.log(height);
        assert(height == 0);
    });

    it('successfully insert one node and update height', function () {
        async.waterfall(
            [function (callback) {
                var tree = new binaryTree();
                tree.insert(this, 5);
                callback(null, tree)
            }, function (tree, callback) {
                var height = tree.getHeight();
                console.log(height);
                callback(null, height);
            }], function (err, res) {
                console.log(arguments);
            }
        );

    });

    it('will return a height of 1', function () {

    });
});
