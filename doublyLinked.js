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
        this.count = 0;
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

        this.count++;

        this.display();
    }

    insertAt(value, pos) {
        let newNode = new Node(value);

        let point;

        let locator = 0;

        if(this.head == null || pos < 0 || pos > this.count) {
            alert("Invalid position");
            return;
        } else {
            if(pos <= Math.floor(this.count/2)) {
               point = this.head;
               
               while(locator != pos-1) {
                    point = point.right;
                    locator++;
               }
            } else {
                point = this.tail;

                while(locator != this.count-pos) {
                    point = point.left;
                    locator++;
               }
            }

            newNode.right = point.right;
            point.right = newNode;
            newNode.left = point;
            newNode.right.left = newNode; 
        }

        this.count++;
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

        alert(output);
    }
}

let dll = new doublyLinkedList();

// let data;

// do {
//     data = +prompt("Enter a number: ", "any number");
    
//     if(data >= 0) {
//         dll.append(data);
//     }
// }while(data >= 0);

dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.append(50);
dll.append(60);
dll.append(70);
dll.insertAt(55, 5);
dll.insertAt(5, 1);