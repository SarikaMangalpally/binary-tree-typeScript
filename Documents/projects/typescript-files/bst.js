var node = /** @class */ (function () {
    function node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return node;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.insertData = function (data) {
        var newNode = new node(data);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BST.prototype.insertNode = function (root, newNode) {
        if (newNode.data < root.data) {
            if (root.left == null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right == null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    };
    BST.prototype.inorder = function (node) {
        if (node != null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    };
    BST.prototype.postorder = function (node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    };
    BST.prototype.preorder = function (node) {
        if (node != null) {
            console.log(node.data);
            this.postorder(node.left);
            this.postorder(node.right);
        }
    };
    BST.prototype.getRoot = function () {
        return this.root;
    };
    return BST;
}());
var binaryTree = new BST();
var items = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
items.forEach(function (element) {
    binaryTree.insertData(element);
    //console.log(element);
});
var rootvalue = binaryTree.getRoot();
console.log("//post order//");
binaryTree.postorder(rootvalue);
console.log("//pre order//");
binaryTree.preorder(rootvalue);
console.log("//in order//");
binaryTree.inorder(rootvalue);
