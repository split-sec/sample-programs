class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = new Node(value);

        let point = this.top;

        if(!point) {
            this.top = newNode;
            return;
        }

        newNode.next = point;
        this.top = newNode;
    }

    pop() {
        let point = this.top;
        
        if(!point) {
            alert("Underflow");

            return;
        }

        this.top = point.next;
        point.next = null;
    }

    peek() {
        let point = this.top;

        if(!point) {
            alert("Empty stack");

            return;
        }

        alert(point.data);
    }

    display() {
        let point = this.top;

        let output = "";

        if(!point) {
            alert("Empty stack");

            return;
        }

        while(point) {
            output += point.data + " ";

            point = point.next;
        }
        alert(output);
    }
}

let obj = new Stack();

let choice;

do {
    choice = prompt(`Enter a choice:
                    1. Push
                    2. Pop
                    3. Peek
                    4. Display
                    5. Exit`);
    if(choice == 1) {
        value = prompt("Enter value: ");
        obj.push(value);
    }
    else if(choice == 2) {
        obj.pop();
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