let input = require('readline-sync');

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return;
        }

        let point = this.head;
        while(point.next) {
            point = point.next;
        }
        point.next = newNode;
    }

    display() {
        let point = this.head;

        let output = "";

        while(point) {
            output += point.data + " ";
            point = point.next;
        }
        console.log(output);
    }

    removeDuplicates() {
        let masterpoint = this.head;
        let point;

        while(masterpoint.next) {
            point = masterpoint;

            while(point.next) {
                if(masterpoint.data == point.next.data) {
                    point.next = point.next.next
                }
                else {
                    point = point.next;
                }
            }
            
            masterpoint = masterpoint.next;
        }
    }
}

let l1 = new List();

let choice, value;

do {
    choice = input.question(`Enter a option:
    1. Append
    2. Remove duplicates
    3. Display
    4. Exit\n`);

    if(choice == 1) {
        value = input.question("Enter a number: ");
        l1.append(value);
    } else if(choice == 2) {
        l1.removeDuplicates();
    } else if(choice == 3) {
        l1.display();
    } else if(choice == 4) {
        console.log("Exiting");
        break;
    } else {
        console.log("Invalid option");
    }

} while(choice != 5);