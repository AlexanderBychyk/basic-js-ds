const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  arr = [];
  push(el) {
    this.arr.push(el);
    return this
  }

  pop(el) {
    let poped = this.arr.pop(el);
    return poped;
  }

  peek(el) {
    let peeked = this.arr.pop(el);
    this.arr.push(peeked);
    return peeked;
  }
}

module.exports = {
  Stack
};
