// program to implement queue data structure
class Queue {
    constructor(){
        this.items = {};
        this.headIndex = 0
        this.lastIndex = 0
    }

    //adds a new element
    enqueue(){
        
    }
    //removes an element from head of the queue
    dequeue(){

    }

    size(){

    }
    isEmpty(){

    }
    lastElement(){

    }

    clear(){

    }
}


let queue = new Queue();

// add items to queue
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);

console.log("Queue after adding items: ");
console.log(queue.items);

// remove the first item
queue.dequeue();

console.log("Queue after deleting the first item:");
console.log(queue.items);

// show the first item
console.log("First item of the queue = " + queue.lastElement());

// empty the queue
queue.clear();

console.log("After clearing the queue: ");
console.log(queue.items);