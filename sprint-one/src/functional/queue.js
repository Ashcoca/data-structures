//so queue is just like stack but instead of removing the most recent items
//we want to remove the FIRST item that was added

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var last;
  var newest
  var count = 0;

  // Implement the methods below

  //adds data to the queue
  someInstance.enqueue = function(value) {
    storage[count] = value;
    newest = storage[count];
    count ++;
  };

  //removes data from the queue
  someInstance.dequeue = function() {
    if (count > 0) {
    count --;
    var last = storage[count];
    delete storage[count];
    return last;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
