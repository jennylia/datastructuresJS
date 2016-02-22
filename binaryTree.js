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
BinaryTree.prototype.insert = function(tree, val){
    var node = new BinaryNode(val);

    if (tree.root == null){
        tree.node == node;
    }else{
        //tree.insertNode(node, tree.root);
    }
};

BinaryTree.prototype.getHeight = function(){
    if (this.root == null){
        return 0;
    }
    return 1 + Math.max(this.left.getHeight(), this.right.getHeight());
};

module.exports = BinaryTree;



