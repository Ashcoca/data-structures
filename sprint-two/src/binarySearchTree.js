var BinarySearchTree = function(value) {

  //add in our basic properties that we want every instantiation to have
  this.value = value;
  this.left = null;
  this.right = null;

  //Do we need a return statement?  
  // return this;

};

//Do we want to create a new Node function?

//what style class do we want?

BinarySearchTree.prototype.insert = function(value) {
  //Create new node with var baby = new BinarySearchTree(passed in value)
  //Make a recursive function
  //Check if current node is > than baby && check if left = undefined
  //if it's true, we add the baby to this.left? (to current node.left)
  //if the current node < baby && right node is undefined
  //insert the baby as the right node
  //if the current node < baby node
  //call the recursive function on the right node
  //Call recursive function on root node
  
  var node = this;
  
  var helper = function(value, parent) {
    if (parent.value > value && parent.left === null) {
      parent.left = new BinarySearchTree(value);
    } else if (parent.value > value) {
      helper(value, parent.left);
    } else if (parent.value < value && parent.right === null) {
      parent.right = new BinarySearchTree(value);
    } else {
      helper(value, parent.right);
    }
  };
  helper(value, node);
};


BinarySearchTree.prototype.contains = function(target) {
  
  var node = this;
  var result = false;

  var helper = function(target, parent) {

    if (parent.value === target) {
      result = true;      
    } else if (parent.value > target && parent.left !== null) {
      helper(target, parent.left);
    } else if (parent.value < target && parent.right !== null) {
      helper(target, parent.right);  
    }
  };
  helper(target, node);
  return result;
};


BinarySearchTree.prototype.depthFirstLog = function(value) {

};


//create our methods that we want
//insert, contains
//depthfirstlog - callback that is applied to every value in tree

/*
 * Complexity: What is the time complexity of the above functions?
 */

