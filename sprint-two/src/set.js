var Set = function() {
  var set = Object.create(setPrototype);
  //this set is a placeholder for what you'll call when the new Set is instantiated
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
//are we basically just pushing the item to the storage array?
//we NEED to do a check to make sure the item doesn't already exist
//maybe use set.includes(item)?
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
//just iterate over storage array to find the item?
//want to try using a for of loop to experiment?
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;

};

setPrototype.remove = function(item) {
//iterate and delete if the index matches the item?
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      delete this._storage[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
