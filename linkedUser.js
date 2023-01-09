class Node {

    constructor(value) {
        this.data = value;
        this.next = null;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
        this.count = -1;
    }

    append(value) {
        let newNode = new Node(value);

        let point = this.head;

        if(this.head == null) {
            this.head = newNode;
        } else {
            while(point.next != null) {
                point = point.next;
            }
            
            point.next = newNode;
        }

        this.display();
    }

    insertAt(data, position) {
        let newNode = new Node(data);

        let count = 0;

        let point = this.head;

        if(position < 0 || position > count || this.head == null) {
            alert("Invalid position");
            return;
        }

        while(point.next != null && count != position-1) {
            point = point.next;
        }
        newNode.next = point.next;
        point.next = newNode;

        this.display();
    }

    display() {
        let point = this.head;

        let output = "";

        if(this.head == null) {
            output = "Empty list";
        } else {
            while(point != null) {
                output += point.data + "->";

                point = point.next;
            }
        }

        alert(output);
    }

}

let list = new LinkedList();
let data;

function appendOption() {
    data = prompt("Enter a number: ", "any number");
    if(data >= 0) {
        list.append(data);
    }
}

function insertOption() {
    data = prompt("Enter a number: ", "any number");
    pos = prompt("Enter the position: ", "any value");
    if(data >= 0) {
        list.insertAt(data, pos);
    }
}

do {
    let choice = prompt("Do you want to 1. Append or 2. Insert at: ", "option");
    if(choice == 1) {
        appendOption();
    } else if(choice == 2) {
        insertOption();
    } else {
        alert("Wrong option");
    }
}while(data >= 0);