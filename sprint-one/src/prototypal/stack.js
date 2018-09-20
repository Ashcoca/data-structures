var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;

};

var stackMethods = {

  push: function(value) {
    this.storage[this.count] = value;
    this.count++
  },

  pop: function() {
    //could also use this.count > 0
    if (this.size() > 0) {
      var data = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      this.count--;
      return data;
    }
  },

  size: function() {
    return this.count;
  }

};
