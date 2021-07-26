import {Node, LinkedList} from '../main.js'


// merge two linkedlists
let list1 = new LinkedList();
let list2 = new LinkedList();
list1.push(10);
list1.push(40);
list1.push(50);
list1.push(70);
list1.push(100);

list2.push(20);
list2.push(30);
list2.push(60);
list2.push(80);
list2.push(100);

function mergeLists(list1, list2) {
  let nodeOn1 = list1.head;
  let nodeOn2 = list2.head;

  let newList = new LinkedList();
  if (nodeOn1.val === null) return list2;
  if (nodeOn2.val === null) return list1;
  // if both null return null
  // if (nodeOn1.val < nodeOn2.val) {
  //   newList.push(nodeOn1.val);
  //   nodeOn1 = nodeOn1.next;
  // } else {
  //   newList.push(nodeOn2.val);
  //   nodeOn2 = nodeOn2.next;
  // }
  while (nodeOn1 && nodeOn2) {
    if (nodeOn1.val < nodeOn2.val) {
      newList.push(nodeOn1.val);
      nodeOn1 = nodeOn1.next;
    } else {
      newList.push(nodeOn2.val);
      nodeOn2 = nodeOn2.next;
    }
  }
  while (nodeOn1) {
    newList.push(nodeOn1.val);
    nodeOn1 = nodeOn1.next;
  }
  while (nodeOn2) {
    newList.push(nodeOn2.val);
    nodeOn2 = nodeOn2.next;
  }
  return newList;
}

let mergedList = mergeLists(list1, list2);
mergedList.traverse();





// selection

// insert


