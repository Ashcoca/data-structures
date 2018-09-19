//so queue is just like stack but instead of removing the most recent items
//we want to remove the FIRST item that was added

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //the trick to queue is you need TWO count variables
  var last = 0
  var newest = 0

  // Implement the methods below

  //adds data to the queue
  someInstance.enqueue = function(value) {
    storage[last] = value;
    //dis way last points to the next empty place to be filled
    //we don't want it to the point to the current occupied space
    last ++;
  };

  //removes data from the queue
  someInstance.dequeue = function() {
    //need to compare queue size
    if (last > newest) {
      //assign storage[newest] to data
      var data = storage[newest]
      //now we delete the newest data
      delete storage[newest];
    //incremement newest because last index (0) has now been deleted, so if we
    //don't increment it next time it'll refer to an already empty
    newest ++;
    //return newest via the variable we stored it in!
    return data;
    }
  };

  someInstance.size = function() {
    return last - newest;
  };

  return someInstance;
};
