class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class circularLinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);

        let point = this.head;

        if(this.head == null) {
            this.head = newNode;
            newNode.next = newNode;
        } else {
            while(point.next != this.head) {
                point = point.next;
            }

            point.next = newNode;
            newNode.next = this.head;
        }

        this.display();
    }

    display() {
        let point = this.head;

        let output = "";

        if(this.head == null) {
            output = "Empty list";
        } else {
            do {
                output += point.data + "-";
                point = point.next;
            }while(point != this.head);
        }
        console.log(output);
    }
}

let cll = new circularLinkedList();

cll.append(1);
cll.append(2);
cll.append(3);