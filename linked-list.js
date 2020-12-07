class LinkedListNode {
  static value = null;
  static next = null;

  constructor(value, nextNode = null) {
    this.value = value;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }
  insertNodeAtFirst(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }
  traverse() {
    let i = 0;
    let node = this.head;
    while (node && node.value) {
      console.log("Node", i + 1, "value : ", node.value);
      node = node.next;
      i++;
    }
  }
  LLfromArray(array) {
    const LL = new LinkedList();
    array.forEach(element => {
      const node = new LinkedListNode(element);
      LL.insertNode(node);
    });
    return LL;
  }
  find(value) {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node && node.value) {
      if (node.value === value) {
        console.log("value exisit : ", value);
        return node;
      }
      node = node.next;
    }
    console.log("Value not exist : ", value);
    return null;
  }
  delete(value) {
    if (!this.head) {
      return this;
    }
    if (this.head.value === value) {
      if (!this.head.next) {
        this.tail = this.head.next;
      }
      this.head = this.head.next;
      return this;
    }

    let node = this.head;
    while (node && node.next) {
      if (node.next.value === value) {
        if (!node.next.next) {
          //   TAIL NODE
          node.next = null;
          this.tail = node;
          break;
        } else {
          // MIDDLE NODES
          node.next = node.next.next;
          break;
        }
        return;
      } else {
        node = node.next;
      }
    }
  }
  reverse() {
    let currNode = this.head;
    let tempNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = tempNode;

      // Move tempNode and currNode nodes one step forward.
      tempNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = null;
    this.head = tempNode;

    return this;
  }
}

const LL = new LinkedList();
const node1 = new LinkedListNode(11);
const node2 = new LinkedListNode(12);
const node3 = new LinkedListNode(13);
const node4 = new LinkedListNode(14);
const node5 = new LinkedListNode(15);

LL.insertNode(node1);
LL.insertNode(node2);
LL.insertNode(node3);
LL.insertNode(node4);
LL.insertNodeAtFirst(node5);

// console.log("<====== Linked List ======>", LL);
console.log("<====== Traverse ======>", LL.traverse());
// console.log("<====== Traverse ======>", LL.find(12));
// console.log("<====== Delete ======>", LL.delete(11));
console.log("-----------", LL.reverse());
console.log("<====== Traverse ======>", LL.traverse());

// const fromArray = new LinkedList().LLfromArray([1, 2, 3, 45, 5]);
// console.log("<====== From Array ======>", fromArray);
// console.log("<====== From Array traverse======>", fromArray.traverse());
