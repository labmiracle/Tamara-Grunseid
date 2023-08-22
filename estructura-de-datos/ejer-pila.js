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

function decimalToBase(decimalNumber, base) {
  if (base < 2 || base > 36) {
    return "Base no válida. Debe estar entre 2 y 36.";
  }

  const stack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  while (decimalNumber > 0) {
    const remainder = decimalNumber % base;
    stack.push(digits[remainder]);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  let result = "";
  while (stack.size() > 0) {
    result += stack.pop();
  }

  return result;
}
