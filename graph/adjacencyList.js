let input = require("readline-sync");

class Graph {
    constructor(choice) {
        this.list = new Map();
        this.direction = choice;
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
            this.addEdges(destination, source);
            this.direction++;
        }
    }

    displayList() {
        console.log(this.list);
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