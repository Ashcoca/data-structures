var LinkedList = function() {
  var list = {};
//[6] -> [3] -> [4] -> [2] -> [1]
//head refers to first box [6]
//head.next refers to second item - []
//head.next.data refers to data of next entry [3]
//head.next.next.data refers to [4]
//**can only go left to right
  list.head = null;
  list.tail = null;

//  
console.log

  list.addToTail = function(value) {
    if (list.tail == null) {
      list.tail = Node(value)
      list.head = list.tail;
    } else {
      //so we take the previous tail and save it in a variable
       var data = list.tail;
      //then we make a new tail by invoking Node on the passed value
       list.tail = Node(value)
      //then we update the next property of the PREVIOUS tail and point it to the
      //new tail we just created
       data.next = list.tail
    }


  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.head.next
    return oldHead.value;

        
    
  };

  list.contains = function(target) {
  //maybe loop through list to see if target is in there?
  //recurse till we hit next = null
  //return boolean
  //figure way to step through 1 by 1 otherwise
  var node = list.head;

  var helper = function(node, target) {

    if (node.value === target) {
      return true;
    } else if (node.next == null) {
      return false;
    } else {
      return helper(node.next, target);
    }
  }

  return helper(node, target)  
  }

return list;

};                                        


//we can assign head and tail to different nodes
//each node has two properties: value, next
//each time we add something we change the value of next to the
//previous node
var Node = function(value) {
  var node = {};
  node.value = value;
  node.next =  null;

  return node;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
