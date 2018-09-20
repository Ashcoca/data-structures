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
    //set this.storage[last] to the passed in value
    this.storage[this.last] = value;
    //increment last so the next item
    this.last++

  },

  dequeue: function() {
    //dequeue only gets invoked if last > 0
    if(this.last > this.newest) {
      //save the value of the newest item in data
      var data = this.storage[this.newest];
      //delete that item
      delete this.storage[this.newest];
      //increment newest since the last index has been removed
      this.newest++;
      //return the removed element
      return data;
    }
  },

  size: function() {
    return this.last - this.newest;
  }


};
