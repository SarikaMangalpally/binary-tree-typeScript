class node {
  data: number;
  left: node;
  right: node;
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  root;
  constructor() {
    this.root = null;
  }
  insertData(data) {
    var newNode = new node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root: node, newNode: node) {
    if (newNode.data < root.data) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  inorder(node) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.postorder(node.left);
      this.postorder(node.right);
    }
  }
  getRoot() {
    return this.root;
  }
}
var binaryTree = new BST();
var items = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
items.forEach(element => {
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
