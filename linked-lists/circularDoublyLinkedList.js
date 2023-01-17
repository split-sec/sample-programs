class Node {
    constructor(value) {
        this.prev = null;
        this.data = value;
        this.next = null;
    }
}

class circularDoubly {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        let newNode = new Node(value);

        if(!this.head) {
            newNode.next = newNode;
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.tail.next = newNode;
        this.head = newNode;
        this.size++;
    }

    deleteEnd() {
        if(!this.head) {
            alert("Underflow");
            return;
        }

        if(this.head == this.tail) {
            this.tail = null;
            this.head = null;
            this.size--;
            return;
        }

        let point = this.tail.prev;
        point.next = this.head;
        this.tail = point;
        this.size--;
    }

    insertAt(value, position) {
        if(position > this.size+1) {
            alert("Invalid position");
            return;
        }

        if(position == 1) {
            this.prepend(value);
            return;
        }

        let newNode = new Node(value);

        if(position == this.size+1) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail = newNode;
            this.size++;
            return;
        }

        let point = this.head;
        let count = 1;
        while(count < position) {
            point = point.next;
            count++;
        }
        newNode.next = point;
        newNode.prev = point.prev;
        point.prev.next = newNode;
        point.prev = newNode;
        this.size++;
    }

    deleteAt(position) {
        console.log("Entered delete at function");
        let point = this.head;

        if(this.size == 0) {
            alert("Empty list");
            return;
        }

        if(position > this.size) {
            alert("Invalid position");
            return;
        }

        if(position == this.size) {
            this.deleteEnd();
            return;
        }

        if(position == 1) {
            this.tail.next = point.next;
            this.head = point.next;
            point.next.prev = null;
            point.next = null;
            this.size--;
            return;
        }

        let count = 1;
        while(count < position-1) {
            point = point.next;
            count++;
        }
        point.next = point.next.next;
        point.next.prev = point;
        this.size--;
    }

    display() {
        let point = this.head;

        let output = "";

        if(!this.head) {
            alert("Empty");
            return;
        }

        do {
            output += point.data + " ";
            point = point.next;
        }while(point != this.head);
        alert(output);
    }
}

let obj = new circularDoubly();

let choice;

let value, position;

do {
    choice = prompt(`Enter any option:
    1. Insert at beginning of list
    2. Insert at any position of list
    3. Delete at any position of list
    4. Delete at end of list
    5. Display list
    6. Exit`);

    if(choice == 1) {

        value = prompt("Enter a number: ");
        obj.prepend(value);

    } else if(choice == 2) {

        value = prompt("Enter a number: ");
        position = prompt("Enter position: ");
        obj.insertAt(value, position);

    } else if(choice == 3) {

        position = prompt("Enter position: ");      
        obj.deleteAt(position);

    } else if(choice == 4) {

        obj.deleteEnd();

    } else if(choice == 5) {

        obj.display();

    } else if(choice == 6) {

        alert("Exiting");

    } else {

        alert("Wrong option");

    }
} while(choice != 6);