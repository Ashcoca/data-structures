var Queue = function() {
  var someInstance = {
    storage: {},
    last: 0,
    newest: 0
  };

  extend(someInstance, queueMethods)
  return someInstance;
};

//extend out methods into our Queue
var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++

  },

  dequeue: function() {
    if(this.last > this.newest) {
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
