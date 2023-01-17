let input = require("readline-sync");

class Node {
    constructor(value) {
        this.prev = null;
        this.data = +value;
        this.next = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    modify() {
        let masterpoint = this.head;
    
        let point;

        while(masterpoint.next) {
            point = masterpoint.next;

            while(point != this.tail.next) {
                if(masterpoint.data == point.data) {
                    if(point == this.tail) {
                        point.data = point.data - point.prev.data;
                    } else {
                        point.data = point.prev.data + point.next.data;
                    }

                    let checkpoint = this.head;
                    while(checkpoint != point) {
                        if(checkpoint.data == point.data) {
                            point.data = -1;
                            // break;
                        }
                        checkpoint = checkpoint.next;
                    }
                }
                point = point.next;
            }

            masterpoint = masterpoint.next;
        }
    }

    display() {
        let point = this.head;
        let output = "";

        if(!this.head) {
            console.log("Empty list");
            return;
        }

        while(point) {
            output += point.data + " ";
            point = point.next;
        }
        console.log(output);
    }
}

let obj = new doublyLinkedList();
let choice, value;

do {
    choice = input.question(`Enter any option:
    1. Append
    2. Modify list
    3. Display
    4. Exit\n`);

    if(choice == 1) {
        value = input.question("Enter a number: "); 
        obj.append(value);
    } else if(choice == 2) {
        obj.modify();
    } else if(choice == 3) {
        obj.display();
    } else if(choice == 4) {
        console.log("Exiting");
        break;
    } else {
        console.log("Invalid option");
    }
} while(choice != 4);