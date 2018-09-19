var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //added count variable to see how many times functions are run
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count ++;
  };

  someInstance.pop = function() {
    count --;
  };

  someInstance.size = function() {
    //get keys from Object, check length -- solves report size 0 for new stack
    // return Object.keys(storage).length;


    return count;
  };

  return someInstance;
};
