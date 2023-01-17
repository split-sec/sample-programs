class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let newNode = new Node(value);

        let point = this.head;

        if(!this.head) {
            this.head = newNode;

            return;
        }
        else {
        while(point.next) {
            point = point.next;
        }

        point.next = newNode;
    }
    }

    remove() {
        let point = this.head;

        let previous;

        if(!this.head) {
            alert("Underflow");

            return;
        }

        if(!point.next) {
            this.head = null;

            return;
        }

        while(point.next) {
            previous = point;
            point = point.next;
        }

        previous.next = null;
    }

    display() {
        let point = this.head;

        let output = "";

        if(!this.head) {
            alert("Empty queue");

            return;
        }

        while(point) {
            output += point.data + " ";

            point = point.next;
        }

        alert(output);
    }

    peek() {
        let point = this.head;

        if(!this.head) {
            alert("Empty queue");

            return;
        }

        alert(point.data);
    }
}


let obj = new Queue();

let choice;

do {
    choice = prompt(`Enter a choice:
                    1. Insert
                    2. Remove
                    3. Peek
                    4. Display
                    5. Exit`);
    if(choice == 1) {
        value = prompt("Enter value: ");
        obj.insert(value);
    }
    else if(choice == 2) {
        obj.remove();
    }
    else if(choice == 3) {
        obj.peek();
    }
    else if(choice == 4) {
        obj.display();
    }
    else if(choice == 5) {
        alert("Exiting");
        break;
    }
    else {
        alert("Wrong option");
    }
}while(1);