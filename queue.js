//queue implementation
class Queue{
    constructor(){
        this.items = [];
    }

    //add elements to the queue
    enqueue(element){
        return this.items.push(element);
    }

    //remove element from the queue
    dequeue(element){
        return this.items.shift();
    }

    //view the last element
    peek(){
        return this.items[this.items.length-1];
    }

    //check whether queue is empty or not
    isEmpty(){
        return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }

    clear(){
        return this.items = [];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());

queue.clear();
console.log(queue.items);