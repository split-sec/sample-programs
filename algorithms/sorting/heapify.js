const readline=require("readline-sync");

function heapSort(arr,len){
    let iterateRoot=Math.floor(len/2)-1;
    
    for(let i=iterateRoot;i>=0;i--){
       
        let left = 2 * i + 1, right = 2 * i + 2;
        
        if(( arr[left] > arr[right] || right >= len ) && arr[left] > arr[i]) {
            [arr[i], arr[left]] = [arr[left], arr[i]];
        }
        
        else if(right < len && arr[i] < arr[right]) {
            [arr[i], arr[right]]=[arr[right], arr[i]];
        }
        
    }
   
    len -= 1;
   
    [arr[0], arr[len]] = [arr[len], arr[0]];
   
    if(len >1)
        heapSort(arr, len);
}


let arr=[];

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>0)
      arr.push(data);
  
  }while(data>=0);
  
heapSort(arr, arr.length)

console.log(arr);
// class MaxHeap{
//     constructor(){
//         this.heap = [];
//     }

//     parentIndex(index){
//         return Math.floor((index-1)/2);
//     }

//     leftChildIndex(index){
//         return (2*index + 1);
//     }

//     rightChildIndex(index){
//         return (2*index + 2);
//     }

//     swap(a, b) {
//         let temp = this.heap[a];
//         this.heap[a] = this.heap[b];
//         this.heap[b] = temp;
//     }

//     insert(item) {
//         this.heap.push(item);
//         var index = this.heap.length - 1;
//         var parent = this.parentIndex(index);
//         while(this.heap[parent] && this.heap[parent] < this.heap[index]) {
//             this.swap(parent, index);
//             index = this.parentIndex(index);
//             parent = this.parentIndex(index);
//         }
//     }

//     delete() {
//         var item = this.heap.shift();
//         this.heap.unshift(this.heap.pop());
//         var index = 0;
//         var leftChild = this.leftChildIndex(index);
//         var rightChild = this.rightChildIndex(index);
//         while(this.heap[leftChild] && this.heap[leftChild] > this.heap[index] || this.heap[rightChild] > this.heap[index]){
//             var max = leftChild;
//             if(this.heap[rightChild] && this.heap[rightChild] > this.heap[max]){
//                 max = rightChild
//             }
//             this.swap(max, index);
//             index = max;
//             leftChild = this.leftChildIndex(max);
//             rightChild = this.rightChildIndex(max);
//         }
//         return item;
//     }
// }

// function heapSort(arr){
//     var sorted = [];
//     var heap1 = new MaxHeap();
    
//     for(let i=0; i<arr.length; i++){
//         heap1.insert(arr[i]);
//     }
    
//     for(let i=0; i<arr.length; i++){
//         sorted.unshift(heap1.delete());
//     }
//     return sorted;
// }

// let arr = [1,2,3,4,5,6,7];
// arr = heapSort(arr);

// console.log(arr);