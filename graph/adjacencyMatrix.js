let input = require("readline-sync");

class Graph {
    constructor() {
        this.matrix = [];
        this.verticemap = new Map();
        this.direction;
    }

    createMap(vertices) {
        for(let i = 0; i < vertices.length; i++) {
            this.verticemap.set(vertices[i], i);
        }
    }

    getCoordinate(source, destination) {
        let a = this.verticemap.get(source);
        let b = this.verticemap.get(destination);

        return [a,b];
    }

    addVertices(vertices, choice) {
        for(let i = 0; i < vertices.length; i++) {
            let array = new Array(vertices.length).fill(0);
            this.matrix.push(array);
        }

        this.createMap(vertices);
        this.direction = choice;
    }

    addEdges(source, end) {
        let coor = this.getCoordinate(source, end);
        let x = coor[0];
        let y = coor[1];
        
        this.matrix[x][y] = 1;
        if(this.direction == 2) {
            this.matrix[y][x] = 1;
        }
    }

    displayMatrix() {
        for(let i of this.matrix) {
            console.log(i);
        }
    }
}

let obj = new Graph();

let choice = input.question(`Enter an option: 
1. Directed graph 
2. Undirected graph\n`);

let vertices = input.question("Enter vertices: ").split(" ");
obj.addVertices(vertices, choice);

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

// obj.addEdges("A", "B");
// obj.addEdges("A", "C");
// obj.addEdges("A", "D");
// obj.addEdges("C", "D");
// obj.addEdges("D", "E");

obj.displayMatrix();