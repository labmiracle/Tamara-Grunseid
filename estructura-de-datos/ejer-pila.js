class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }
}

function decimalToBinary(decimalNumber) {
  const stack = new Stack();

  while (decimalNumber > 0) {
    const remainder = decimalNumber % 2;
    stack.push(remainder);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  let binaryString = "";
  while (stack.size() > 0) {
    binaryString += stack.pop();
  }

  return binaryString;
}
