class Node {

    constructor(value) {
        this.data = value;
        this.next = null;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
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

        this.size++;
        this.display();
    }

    insertAt(data, position) {
        let newNode = new Node(data);

        let point = this.head;

        let counter = 0;

        if(position < 0 || position > this.size || this.head == null) {
            console.log("Invalid position");
            return;
        }

        if(position == 0) {
            newNode.next = point;
            this.head = newNode;

            this.size++;
            this.display();
            
            return;
        }

        while(point.next != null && counter != position-1) {
            point = point.next;
            counter++;
        }
        newNode.next = point.next;
        point.next = newNode;

        this.size++;
        this.display();
    }

    removeBegin() {
        let point = this.head;

        if(!this.head) {
            console.log("Empty list");

            return;
        }

        this.head = point.next;

        point.next = null;

        this.size--;
        this.display();
    }

    removeLast() {
        let point = this.head;

        let backPoint;

        if(!this.head) {
            console.log("Empty list");

            return;
        }

        while(point.next) {
            backPoint = point;

            point = point.next;
        }
        backPoint.next = null;

        this.size--;
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

        console.log(output);
    }

}


let list = new LinkedList();
let data;

list.append(5);
list.append(6);
list.insertAt(1, 0);
list.append(7);
list.insertAt(2, 1);
list.insertAt(10, 6);
list.removeBegin();
list.removeLast();