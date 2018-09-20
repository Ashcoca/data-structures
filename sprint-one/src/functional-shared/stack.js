var Stack = function() {
  //create an object with all our editeable values
  var someInstance = {

  };

  someInstance.storage = {},
  someInstance.count = 0

  extend(someInstance, stackMethods)
  return someInstance;
};

//extend methods to our Stack
var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

//here's where we'll store all the functions that we'll copy over to Stack
var stackMethods = {

  //all the 'this' refer to the object (someInstance)

  //key value pair because this is an OBJECT,,,
  push: function(value) {
    //object.storage[current count]
    this.storage[this.count] = value;
    //increment count so the next value added will be at the next key
    this.count ++;
  },

  pop: function() {
    if (this.size() > 0) {
      //needs to be this.count-1 to remove last key/value in storage
      //this is because count was incremented the last time something was added
      var result = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      this.count --;
      return result;
    }
  },

  size: function() {
    return this.count;
  }

};
