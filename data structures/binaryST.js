class BST {
  constructor() {
    this.root = null;
  }

  // insert
  insert(val) {
    let newNode = new Node(val);
    let current = this.root;
    if (!current.val) return (this.root = newNode);
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // find
  find(val) {
    if (val < 0 || this.root === null) return null;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  bfs() {
    let queue = [];
    let data = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  dfsPre() {
    // let queue = [];
    let data = [];
    let root = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      //data.push(node.value)for in order
      if (node.right) traverse(node.right);
      //data.push(node.value)for post order
    }
    traverse(root);
    return data;
  }
}

// let tree = new BST()
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.right.right = new Node(20);
// tree.insert(40)

// console.log(tree.bfs())
