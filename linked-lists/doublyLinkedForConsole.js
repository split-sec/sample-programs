class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        let newNode = new Node(value);

        let point = this.tail;

        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            point.right = newNode;
            newNode.left = point;
            this.tail = newNode;
        }

        this.size++;

        this.display();
    }

    insertAt(value, pos) {
        let newNode = new Node(value);

        let point;

        let locator = 0;

        //if position is invalid
        if(this.head == null || pos < 0 || pos > this.size) {
            console.log("Invalid position");

            return;
        } else {
            //if position is for adding as head node
            if(pos == 0) {
                point = this.head;

                newNode.right = point;
                point.left = newNode;

                this.head = newNode;

                this.size++;
                this.display();

                return;
            }

            //if position is less than the half of list size
            if(pos <= Math.floor(this.size/2)) {
               point = this.head;
               
               while(locator != pos-1) {
                    point = point.right;
                    locator++;
               }
            } else {
                point = this.tail;

                while(locator != this.size-pos) {
                    point = point.left;
                    locator++;
               }
            }

            newNode.right = point.right;
            point.right = newNode;
            newNode.left = point;
            newNode.right.left = newNode; 
        }

        this.size++;
        this.display();
    }

    removeBegin() {
        let point = this.head;

        if(!this.head) {
            console.log("Empty list");

            return;
        }

        this.head = point.right;
        point.right = null;

        this.size--;
        this.display();
    }

    removeLast() {
        let point = this.tail;

        if(!this.tail) {
            console.log("Empty list");

            return;
        }

        point = point.left;
        point.right = null;
        this.tail = point;

        this.size--;
        this.display();
    }

    display() {
        let point = this.head;

        let output = "";

        if(this.head == null) {
            output = "List is empty";
        } else {
            while(point) {
                output += point.data + "< - >";
                point = point.right;
            }
        }

        console.log(output);
    }
}

let dll = new doublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.append(50);
dll.append(60);
dll.append(70);
dll.insertAt(55, 5);
dll.insertAt(5, 1);
dll.insertAt(100, 0);
dll.removeBegin();
dll.removeLast();