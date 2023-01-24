let input = require("readline-sync");

class Graph {
    constructor(choice) {
        this.list = new Map();
        this.direction = choice;
        this.output = [];
        this.doutput = [];
    }

    addVertices(vertices) {
        for(let i of vertices) {
            this.list.set(i, []);
        }
    }

    addEdges(source, destination) {
        let temp = this.list.get(source);
        temp.push(destination);
        this.list.set(source, temp);

        if(this.direction == 2) {
            this.direction--;
            if(!this.list.get(destination).includes(source))
                this.addEdges(destination, source);
            this.direction++;
        }
    }

    displayList() {
        console.log(this.list);
    }

    // breadthFirst() {
    //     this.BFS(this.list.keys().next().value);

    //     console.log(this.output);
    // }

    // BFS(next) {
    //     let queue = [];
    //     queue.push(next);

    //     while(queue.length > 0) {
    //         queue = queue.concat(this.list.get(queue[0]));
    //         if(!this.output.includes(queue[0])) {
    //             this.output.push(queue[0]);
    //         }
    //         queue.shift();
    //     }
    // }

    depthFirst() {
        this.DFS(this.list.keys().next().value);

        console.log(this.doutput);
    }

    thisInclude(stack, arr) {
        let element, list = [];

        for (element of arr) {
            if(!stack.includes(element) && !this.doutput.includes(element)) {
                list.push(element);
            }
        }

        return [list, !(list.length == 0)];
    }

    DFS(next) {
        let stack = [];
        stack.push(next);
        
        while(stack.length > 0) {
            let popped = stack.pop();

            let list = this.thisInclude(stack, this.list.get(popped));

            if(list[1]) {
                stack = stack.concat(list[0]);
            }

            if(!this.doutput.includes(popped)) {
                this.doutput.push(popped);
            }
        }
    }
}


let choice = input.question(`Enter an option: 
1. Directed graph 
2. Undirected graph\n`);

let obj = new Graph(choice);

let vertices = input.question("Enter vertices: ").split(" ");
obj.addVertices(vertices);

do {
    let edges = input.question("Enter edges: "). split(" ");
    if(edges == -1) {
        console.log("exiting");
        break;
    }
    let a = edges[0];
    let b = edges[1];
    obj.addEdges(a, b);
} while(true);

obj.displayList();

// console.log("\nBreadth First Search");
// obj.breadthFirst();

console.log("\nDepth First Search");
obj.depthFirst();
