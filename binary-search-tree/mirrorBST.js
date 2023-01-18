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

    mirror() {
        let point = this.root;

        this.mirrorRecurse(point);
    }

    mirrorRecurse(point) {
        if(!point) {
            return;
        }

        if(!point.left && !point.right) {
            return;
        }

        this.mirrorRecurse(point.left);

        let temp = point.left;
        point.left = point.right;
        point.right = temp;

        this.mirrorRecurse(point.left);
    }
}


let obj = new binarySearch();
obj.append(10);
obj.append(2);
obj.append(1);
obj.append(3);
obj.append(15);
obj.append(12);
obj.append(16);

obj.inOrder(obj.root);
console.log("\nMirror");
obj.mirror();
obj.inOrder(obj.root);
console.log("\Reversed again");
obj.mirror();
obj.inOrder(obj.root);