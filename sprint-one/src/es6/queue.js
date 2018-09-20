class Queue {

  constructor() {

    this.storage = {};
    this.last = 0;
    this.newest = 0;

  }

  enqueue(value) {
    this.storage[this.last] = value;
    this.last++;
  }

  dequeue() {
    if (this.size() > 0) {
      var data = this.storage[this.newest];
      delete this.storage[this.newest];
      this.newest++
      return data;
    }
  }

  size() {
    return this.last - this.newest;
  }

}
