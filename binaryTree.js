//These are just test functions...



var BinaryTree = function(){
    this.root = null;
};

var BinaryNode = function(val){
    this.val = val;
    this.left = null;
    this.right = null;
}


BinaryTree.prototype.helloWorld = function helloWorld(val){
    return "hello word " + val;
}
BinaryTree.prototype.insert = function(val){
    var node = new BinaryNode(val);

    if (this.root == null){
        this.node == node;
    }else{
        this.insertNode(node, this.root);
    }
};

BinaryTree.prototype.height = function(tree){
    return 1;
};

module.exports = BinaryTree;



