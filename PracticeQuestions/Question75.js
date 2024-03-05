// program to implement stack data structure

class Stack {
  constructor() {
    this.items = [];
  }

  add(element) {
    return this.items.push(element);
  }

  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  lastElement() {
    return this.items[this.items.length-1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}

let stack = new Stack();
stack.add(3);
stack.add(2);
stack.add(22);
stack.add(44);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.lastElement());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);


// In the above program, the Stack class is created to implement the stack data structure. The class methods like add(), remove(), peek(), isEmpty(), size(), clear() are implemented.

// An object stack is created using a new operator and various methods are accessed through the object.

// Here, initially this.items is an empty array.
// The push() method adds an element to this.items.
// The pop() method removes the last element from this.items.
// The length property gives the length of this.items.