//stack implementation
class Stack{
    constructor(){
        this.items = [];
    }

    //add elements to the stack
    add(element){
        return this.items.push(element);
    }

    //remove element from the stack
    remove(element){
        return this.items.pop();
    }

    //view the last element
    peek(){
        return this.items[this.items.length-1];
    }

    //check whether stack is empty or not
    isEmpty(){
        if(this.items.length == 0){
            return 'Stack is empty';
        }
        else{
            return 'Stack is not empty';
        }
    }

    size(){
        return this.items.length;
    }

    clear(){
        return this.items = [];
    }
}

const stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());

stack.clear();
console.log(stack.items);