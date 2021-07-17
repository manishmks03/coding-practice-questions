/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
  }

  let newLL = Node(head.val, null, null);
  console.log(newLL);
  //   let temp = head;
  //   while (temp.next) {
  //     const newNode = Node(temp.next.val, null, null);
  //     newLL.next = newNode;
  //   }
  //   return newLL;
};

copyRandomList();

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
  }

  if (head === null) return null;
  if (!head.next) return head;

  let temp = head;
  let obj = new Map();
  let i = 0;

  while (temp) {
    obj.set(i, temp);
    temp = temp.next;
    if (temp) i++;
  }
  console.log("sssss ", obj, i);

  let tail = head;
  let first = 1;
  let last = i;

  for (let j = 1; j < i / 2; j++) {
    console.log("-------", first, last);
    if (j % 2 === 0) {
      const node = obj.get(first);
      tail.next = node;
      first++;
      tail = tail.next;
    } else {
      const node = obj.get(last);
      tail.next = node;
      last--;
      tail = tail.next;
    }
    if (j === i) tail.next = null;
  }

  return;
};
