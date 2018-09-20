var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.last = 0;
  someInstance.newest = 0;

  return someInstance;

};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },

  dequeue: function() {
    if (this.size() > 0) {
      var data = this.storage[this.newest];
      delete this.storage[this.newest];
      this.newest++;
      return data;
    }
  },

  size: function() {
    return this.last - this.newest;
  }

};
