var Stack = function(count) {
  var someInstance = {
    storage: {},
    count: 0
  };

  extend(someInstance, stackMethods)

  return someInstance;
};

//extend methods to our stack
var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {

  //key value pair because this is an OBJECT,,,
  push: function(value){
    this.storage[this.count] = value;
    this.count ++;
  },

  pop: function(){
    if (this.size() > 0) {
      var result = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.count --;
      return result;
    }
  },

  size:  function(){
    return this.count;
  }

};
