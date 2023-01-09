class Node {

    constructor(input) {
        this.value = input;
        this.next = null;
    }

}

class Stack {

    constructor() {
        this.top = null;
    }

    peek() {
        if(top == null) {
            console.log("Empty stack");
        }
        else {
            
        }
    }

    push(value) {
        let newNode = new Node(value);

        let point = new Node();
        point = this.top;

        if(this.top == null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;            
        }
    }
}