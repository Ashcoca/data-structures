var Queue = function() {

  this.storage = {};
  this.last = 0;
  this.newest = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
},

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    var data = this.storage[this.newest];
    delete this.storage[this.newest];
    this.newest++;
    return data;
  }
},

Queue.prototype.size = function() {
  return this.last - this.newest;
}

// var someInstance = new Queue();
