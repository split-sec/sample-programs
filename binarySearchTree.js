class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearch {
    constructor() {
        this.root = null;
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

    display() {
        let point = this.root;

        this.printNode(point);
    }

    printNode(point) {
        if(point != null) {
            console.log(point.data);

            this.printNode(point.left);

            this.printNode(point.right);
        }
    }
}

let bsTree = new binarySearch();
bsTree.append(4);
bsTree.append(1);
bsTree.append(3);
bsTree.display();
console.log("\n");
bsTree.append(6);
bsTree.append(5);
bsTree.append(7);
bsTree.append(11);
bsTree.display();
console.log("\n");
bsTree.append(8);
bsTree.append(9);
bsTree.display();
console.log("\n");