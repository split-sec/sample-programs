class Node {
    
    constructor(input) {
        this.value = input;
        this.next = null;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);
    
        if(this.head == null) {
            this.head = newNode;
        }

        else {
            let point = new Node();
            point = this.head;
            
            while(point.next != null) {
                point = point.next;
            }
            
            point.next = newNode;
        }
    }

    // push(value) {
    //     let newNode = new Node(value);

    //     if(this.head == null) {
    //         this.head = newNode;
    //     }

    //     newNode.next = this.head;
        
    //     this.head = newNode;
    // }

    printList() {
        let point = new Node();

        if(this.head == null) {
            console.log("Empty list");
        }

        point = this.head;

        while(point != null) {
            
            if(point.next == null) {
                console.log(point.value);
            }
            else {
                console.log(point.value + " -> ");
            }
            point = point.next;
            
        }
    }

    // insertAt(value, pos) {
        // let newNode = new Node(value);
// 
        // if(this.head == null) {
            // this.head = newNode;
        // }
// 
        // let point = new Node();
        // point = this.head;
// 
        // let count = 0;
// 
        // while (point.next != null && count != pos-1) {
            // point = point.next;
            // count++;
        // }
// 
        // newNode.next = point.next;
        // point.next = newNode;
// 
    // }

}

let linkedListObj = new LinkedList();
linkedListObj.push(1);
linkedListObj.push(2);
linkedListObj.push(3);
linkedListObj.push(4);
linkedListObj.insertAt(5, 8)
linkedListObj.printList();