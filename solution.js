const { nums, words } = require("./data/data.js");

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head
  }

  insert(data){
    let newNode = new Node(data)
    if(this.head){
      newNode.next = this.head
    }
    this.head = newNode
    return this.head
  }

  size(){
    let count = 0
    let temp = this.head
    while(temp){
      count++
      temp = temp.next
    }
    return count
  }

  search(key){
    let temp = this.head
    while(temp){
      if (temp.data === key){
        return temp
      }
      temp = temp.next
    }
  }

  delete(key) {
    let node = this.head;
    let counter = 0;
    while (node.data !== key && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }

  // delete(key) {
  //   if (this.head.data === key) {
	// 		this.head = this.head.next;
	// 	}
	// 	let temp = this.head;
	// 	while (temp.next) {
	// 		if (temp.next.data === key) {
	// 			temp.next = temp.next.next;
	// 			break;
	// 		}
	// 		temp = temp.next;
	// 	}
  // }

  getFirst(){
    return this.head
  }

  getLast(){
    let temp = this.head
    while(temp){
      if(!temp.next){
        return temp
      }
      temp = temp.next
    }
  }

  getKth(num){
    let count = 1
    let temp = this.head
    while(temp){
      if(count === num) return temp
      count++
      temp = temp.next
    }
  }

  getKthToLast(num){
    let size = this.size()
    let temp = this.head
    for(let i = 1; i < size - num; i++){
      temp = temp.next
    }
    return temp
  }

  isEmpty(){
    return this.head === null
  }

  clear(){
    this.head = null
  }

  toArray(){
    let array = []
    let temp = this.head
    while(temp){
      array.push(temp.data)
      temp = temp.next
    }
    return array
  }

  containsDuplicates(){
    let array = this.toArray()
    const unique = [... new Set(array)]
    return array.length !== unique.length
  }
}

module.exports = {
  Node,
  LinkedList,
};
