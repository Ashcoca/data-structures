var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  //extend treeMethods over ever newTree object
  _.extend(newTree, treeMethods);

  return newTree;

}; 



var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};





treeMethods.contains = function(target) {

  var babies = this;
  
  if (babies.value === target) {
    return true;
  }

  var result = false;

  var helper = function(array) {
    
    for (var i = 0; i < array.length; i++) {
      if (result === true) {
        return result;
      }
      if (array[i].value === target) {
        result = true;
      } else {
        helper(array[i].children);
      }
    }
  };
  helper(babies.children); 
  return result; 
}; 






/*
 * Complexity: What is the time complexity of the above functions?
 */
