//psuedoclassical

// Instantiate a new graph
var Graph = function() {
  //create a storage object to store everything
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
// maybe use new Graph to instantiate node?
// Stores list of all connections for the node
  this.storage[node] = {value: node};
  this.storage[node].edgeList = {};
};

// Return a boolean value indicating if the value passed to contains is 
//represented in the graph.
Graph.prototype.contains = function(node) {
//check out the hasOwnProperty method for objects
  if (this.storage.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
//conditional to check if storage has property matching node
//delete this.storage.node (must use bracket notation)
  if (this.storage.hasOwnProperty(node)) {
    for (var key in this.storage) {
      //so here we just check if the edgeList[node] exists, and we delete it if it exists
      delete this.storage[key].edgeList[node];
    }
    //this is just to delete the entire node as per the function test
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
//loop through graph to find fromNode
//loop through fromNode.edgeList (array) to see if toNode is present
//return boolean]
  var result = false;
  if (this.storage[fromNode].edgeList[toNode] === true) {
    result = true; 
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
//we're checking storage[fromNode] edgelist to set the toNode value to true
  if (this.storage.hasOwnProperty(fromNode) && this.storage.hasOwnProperty(toNode)) {
    //we make a TWO way connection
    //remove one if you only want a one way connection
    this.storage[fromNode].edgeList[toNode] = true;
    this.storage[toNode].edgeList[fromNode] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
//same as before, maybe loop through graph till we get to the fromNode
//remove the toNode from the fromNode's edgeList array
  if (this.storage.hasOwnProperty(fromNode) && this.storage.hasOwnProperty(toNode)) {
    delete this.storage[fromNode].edgeList[toNode];
    delete this.storage[toNode].edgeList[fromNode];
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //loop through, then iterate
  for (var node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


