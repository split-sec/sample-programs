let input = require("readline-sync");

class Node {
    constructor(value) {
        this.data = +value;
        this.left = null;
        this.right = null;
    }
}

class binarySearch {
    constructor() {
        this.root = null;
        this.sum = +0;
    }

    append(value) {
        let newNode = new Node(value);

        let point = this.root;

        if(!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(newNode, point);
        }

    }

    insertNode(newNode, point) {
        if(newNode.data < point.data) {
            if(point.left == null) {
                point.left = newNode;
            } else {
                this.insertNode(newNode, point.left);
            }
        } else {
            if(point.right == null) {
                point.right = newNode;
            } else {
                this.insertNode(newNode, point.right);
            }
        }
    }

    inOrder(point) {
        if(!point) {
            return;
        }
        this.inOrder(point.left);
        console.log(point.data);
        this.inOrder(point.right);
    }

    mirrorTree(root) {
        if (root == null)
            return null;
 
        let left = this.mirrorTree(root.left);
        let right = this.mirrorTree(root.right);
 
        root.left = right;
        root.right = left;
    
        return root;
    }
}


let obj = new binarySearch();
obj.append(10);
obj.append(5);
obj.append(3);
obj.append(7);
obj.append(15);
obj.append(13);
obj.append(17);

obj.inOrder(obj.root);
console.log("\nMirror");
obj.mirrorTree(obj.root);
obj.inOrder(obj.root);
// console.log("\Reversed again");
// obj.mirror();
// obj.inOrder(obj.root);