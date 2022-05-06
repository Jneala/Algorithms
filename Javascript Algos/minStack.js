//helper function to get the end of the array, just like FIFO
function last(stack){
  return stack[stack.length -1]
}

class MinStack {
  constructor(){
    // when the an instance of the class is created, these empty arrays will be part of it
    this.stack = []
    this.minStack = []
  }
  //if the minStack is empty, its the current minimum, otherwise compare the two. Regardless, push to the regular stack
  push(x){
    if(this.minStack.length === 0 || x <= last(this.minStack)){
      this.minStack.push(x)
    }
    this.stack.push(x)
  };
  //if the top of minStack is the same as the top of stack, remove the top of minStack, Regardless, pop the top of stack
  pop(){
    if(last(this.minStack) === last(this.stack)){
      this.minStack.pop()
    }
    return this.stack.pop()
  };
  //return the top of stack, aided by our helper function
  top(){
    return last(this.stack)
  }
  //return the top of minStack, aided by our helper function
  getMin(){
    return last(this.minStack)
  }
}