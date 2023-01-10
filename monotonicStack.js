class Node {
    constructor(value) {
        this.next = null;
        this.data = value;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let point = this.top;

        let newNode = new Node(value);

        if(!this.top) {
            this.top = newNode;
            return;
        }

        if(point.data > value) {
            this.pop();
            this.push(value);
        } else {
            newNode.next = point;
            this.top = newNode;
        }
    }

    pop() {
        let point = this.top;

        if(!this.top) {
            console.log("Empty stack");
            return;
        }

        this.top = point.next;
        point.next = null;
    }

    peek() {
        if(this.top) {
            console.log(this.top.data);
            return;
        }
            
        console.log("Empty stack");
    }

    display() {
        let point = this.top;

        let output = "";

        if(!this.top) {
            console.log("Empty stack");
            return;
        }

        while(point) {
            output += point.data + " ";
            point = point.next;
        }
        console.log(output);
    }
}

let obj = new Stack();
obj.push(1);
obj.push(3);
obj.push(5);
obj.push(2);
obj.push(7);
obj.display();