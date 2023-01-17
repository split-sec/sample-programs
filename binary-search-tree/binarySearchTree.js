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
        this.queue = null;
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

    display(choice) {
        let point = this.root;  

        if(choice == 1) {
            this.preOrder(point);
        } else if(choice == 2) {
            this.inOrder(point);
        } else if(choice == 3) {
            this.postOrder(point);
        } else if(choice == 4) {
            this.levelOrder(point);
        }
    }

    preOrder(point) {
        if(!point) {
            return;
        }

        console.log(point.data);
        this.preOrder(point.left);
        this.preOrder(point.right);
    }

    inOrder(point) {
        if(!point) {
            return;
        }
        this.inOrder(point.left);
        console.log(point.data);
        this.inOrder(point.right);
    }

    postOrder(point) {
        if(!point) {
            return;
        }

        this.postOrder(point.left);
        this.postOrder(point.right);
        console.log(point.data);
    }

    levelOrder(point) {
        let arr = [];
        let output = [];

        arr.push(point);
        while(arr.length > 0) {
            output.push(arr[0].data);

            if(arr[0].left) {
                arr.push(arr[0].left);
            } 
            if(arr[0].right) {
                arr.push(arr[0].right);
            }
            arr.shift();
        }
        console.log(output);
    }

    treeHeight() {
        console.log("Height of the tree is " + this.maxDepth(this.root));
    }

    maxDepth(point) {
        if(!point) {
            return 0;
        }

        let lDepth = this.maxDepth(point.left);
        let rDepth = this.maxDepth(point.right);

        if(lDepth > rDepth) {
            return lDepth + 1;
        } else {
            return rDepth + 1;
        }
    }

    findCommonAncestor(valueA, valueB) {
        let point = this.root;

        let ancestor = this.recurseAncestor(point, valueA, valueB);

        console.log("Ancestor data is: " + ancestor.data);
    }
 
    recurseAncestor(point, valueA, valueB) {
        if(valueA < point.data && valueB < point.data) {
            return this.recurseAncestor(point.left, valueA, valueB);
        } else if (valueA > point.data && valueB > point.data) {
            return this.recurseAncestor(point.right, valueA, valueB);
        }

        return point;
    }

    sumParentNode() {
        this.sumOfSingleChildParentNode(this.root);
        console.log(this.sum);
    }

    sumOfSingleChildParentNode(point) {
        if(!point) {
            return;
        }
        this.sumOfSingleChildParentNode(point.left);
        if((point.left && !point.right) || (point.right && !point.left)) {
            console.log(point.data);
            if(point.data)
                this.sum += Number.parseInt(point.data);
        }
        this.sumOfSingleChildParentNode(point.right);
    }

    deleteLeaf() {
        let point = this.root;
        this.deleteRightChild(point);
    }

    isChildNode(point) {
        if(point) {
            if(!point.left && !point.right)
                return true;

            return false;
        }
    }

    deleteRightChild(point) {
        if(!point) {
            return;
        }

        this.deleteRightChild(point.left);
        if(this.isChildNode(point.right)) {
            point.right = null;
        }
        this.deleteRightChild(point.right);
    }
}

let bsTree = new binarySearch();

let choice, value;

do {
    choice = input.question(`\nEnter an option: 
    1. Insert a number
    2. Pre order
    3. In order
    4. Post order
    5. Level order
    6. Height of the tree
    7. Find ancestor of two nodes
    8. Sum of single-child parent node 
    9. Delete leaf node if it is right child
    10. Exit\n`);

    if(choice == 1) {
        value = input.question("Enter a number: ");
        bsTree.append(value);
    } else if(choice == 2) {
        bsTree.display(1);
    } else if(choice == 3) {
        bsTree.display(2);
    } else if(choice == 4) {
        bsTree.display(3);
    } else if(choice == 5) {
        bsTree.display(4); 
    } else if(choice == 6) {
        bsTree.treeHeight();
    } else if(choice == 7) {
        let valueA = input.question("Enter node A: ");
        let valueB = input.question("Enter node B: ");
        bsTree.findCommonAncestor(valueA, valueB);
    } else if(choice == 8) {
        bsTree.sumParentNode();
    } else if(choice == 9) {
        bsTree.deleteLeaf();
    } else if(choice == 10) {
        console.log("Exiting");
        break;
    }
} while(choice != 10);