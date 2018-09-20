class Stack {

  constructor(storage, count) {

    this.storage = {};
    this.count = 0;

  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.size() > 0) {
      var data = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      this.count--;
      return data;

    }
  }

  size() {
    return this.count;
  }

}
