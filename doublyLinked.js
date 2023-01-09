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
            if(pos <= count/2) {
               point = this.head;
               
               while(locator != pos-1) {
                    point = point.left;
                    locator++;
               }

               newNode.left = point.left;
               point.left = newNode;
            } else {
                point = this.tail;

                while(locator != count-pos-1) {
                    point = point.right;
                    locator++;
               }
               newNode.left = point.left;
               point.left = newNode;
            }
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

let data;

do {
    data = +prompt("Enter a number: ", "any number");
    
    if(data >= 0) {
        dll.append(data);
    }
}while(data >= 0);