let input = require("readline-sync");

class Node {
    constructor(value) {
        this.data = +value;
        this.left = null;
        this.right = null;
        this.dist = 0;
    }
}

class binarySearch {
    constructor() {
        this.root = null;
        this.sum = +0;
        this.vlevel = {};
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
            newNode.dist = point.dist - 1;
            if(point.left == null) {
                point.left = newNode;
            } else {
                this.insertNode(newNode, point.left);
            }
        } else {
            newNode.dist = point.dist + 1;
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
        let point = this.head;

        mirrorRecurse(point);
    }

    mirrorRecurse(point) {
        if(!point) {
            return;
        }

        this.mirrorRecurse(point.left);

    
        this.mirrorRecurse(point.right);
    }
}


let obj = new binarySearch();
obj.append(10);
obj.append(2);
obj.append(15);
obj.append(1);
obj.append(3);
obj.append(12);
obj.append(16);