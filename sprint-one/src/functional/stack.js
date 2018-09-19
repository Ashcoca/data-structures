var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  storage = {};

  //assign count to keep track of items being added/removed
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //***use storage[count] to be the key for the value!
    storage[count] = value;
    //count needs to be below?
    count ++;
  };

  someInstance.pop = function() {
    //need to remove topmost element of stack
    if (count > 0) {
    count --;
    //assign new var to storage[last item], so we can return cause pop does that
    var popped = storage[count]
    //now remove that last item from the storage
    delete storage[count];
    return popped
    //do NOT return storage;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
