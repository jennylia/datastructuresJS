/**
 * @module lib/base-binary-tree
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var hi = function (factory) {
    console.log("Point 1", arguments);
    factory(require, exports, module);
};


hi(function (require, exports, module) {
    console.log("Point 2", arguments);
    var BinarySearchTree = function (customCompare) {
        console.log("Point 3", arguments);

        /**
         * The number of nodes in the tree.
         * @private
         */
        this.nodeCount = 0;

        if (customCompare) {
            this.compare = customCompare;
        }
    };
    BinarySearchTree.prototype.add = function (key) {
        console.log("Point 4", arguments);
        console.log(key);
    }

    module.exports = BinarySearchTree;
});

var count = 0;
var hope = function (factory) {
    console.log("Point 1", arguments);
    factory(require, exports, module);
}


hope(function (require, exports, module) {
    console.log("hope", count);
    count++;
});

var ho = function (factory) {
    console.log("ho", count);
    count++;
}

ho();

var hooh = function (factory) {
    console.log("hooh", count);
    count++;
}

hooh();