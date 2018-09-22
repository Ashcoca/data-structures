var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;

}; 



var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {};
  child.value = value;

  this.children.push(child);
};

treeMethods.contains = function(target) {

};

//start with root
//determine if node needs to go in left or right branch
//each node needs to point at the next child
//how do we figure when to make a child vs a sibling?

//every node has a left node and a right node
//some of those children nodes will be null

//this note below refers to binary search trees
//left node is less than the root node *and* less than all of the right nodes
//


/*
 * Complexity: What is the time complexity of the above functions?
 */
