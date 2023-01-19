/*
    Write this program to delete any node in the BST and 
    still have a proper BST
    **Pointers**
    Intro - qualities, projects, learnings
    Soft skills - etiquettes, emails
    JS Questions - Team React
    LeetCode Revision - Remove nth node, Merge two sorted lists, Rectangle area
*/

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

    deleteNode(value) {
        this.deleteNodeRecurse(this.root, value);
    }

    deleteNodeRecurse(point, value) {
        if(!point) {
            return;
        }

        if(value < point.data) {
            this.deleteNodeRecurse(point.left, value);
        } else {
            this.deleteNodeRecurse(point.right, value);
        }

        if(!point.right) {
            point = point.left;
            return;
        } 
        let temp = point;
        // temp.left = point.left;
        // point = temp;

        while(temp.right) {
            temp.data = temp.right.data;
            temp = temp.right;
        }
        temp.right = null;
    }
}



let obj = new binarySearch();
obj.append(10);
obj.append(5);
obj.append(2);
obj.append(6);
obj.append(7);
obj.append(8);
obj.append(20);
obj.append(15);
obj.append(25);

obj.inOrder(obj.root);
obj.deleteNode(5);
console.log("\nAfter Deletion");
obj.inOrder(obj.root);