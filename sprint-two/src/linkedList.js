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
      console.log(list + ' line 18')
    } else {
      var data = list.tail;
      list.head = data;
      // list.head.next = list.tail;
      
      
      //this list.tail refers to the previous time addtoTail was run
      // var data = list.tail.next
      // list.tail.next = '5'
      list.tail = Node(value)
    }
  //else var data = list.tail
  //list.tail = Node(value)
    

    //conditional see if list.tail is null
      //add current node.value to var
      //add value to node
      //change node.next to previous node.value
    //conditional see if list.head is null
      //add value to node
      //
  };

  list.removeHead = function() {
    // if (list.head == null) {
    //   list.head = Node(list.tail)
    // }
    // var newHead = list.head.next;
    // // delete list.head;
    // // return newHead;
        
    
  };

  list.contains = function(target) {
  //maybe loop through list to see if target is in there?
  //return true if it is?
  //figure way to step through 1 by 1 otherwise?
  };

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
