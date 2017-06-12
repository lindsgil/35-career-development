'use strict';

const Node = function(val, key, next=null, prev=null) {
  this.key = key;
  this.val = val;
  this.next = next;
  this.prev = prev;
};


const DLL = module.exports =  function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

DLL.prototype.append = function(val, key) {
  if(!val) throw new Error('Please provide a value');
  if(!key) throw new Error('Please provide a key');
  if(!this.head) {
    this.length++;
    return this.head = this.tail = new Node(val, key);
  }

  let node = new Node(val, key);

  this.tail.next = node;
  node.prev = this.tail;
  this.tail = this.tail.next;
  this.length++;
  return this.head;
};

DLL.prototype.prepend = function(val, key) {
  if(!val) throw new Error('Please provide a value');
  if(!key) throw new Error('Please provide a key');
  if(!this.tail) {
    this.length++;
    return this.head = this.tail = new Node(val, key);
  }


  let node = new Node(val, key);

  this.head.prev = node;
  node.next = this.head;
  this.head = this.head.prev;
  this.length++;
  return this.tail;
};

DLL.prototype.find = function(key) {
  if(!key) throw new Error('Please provide a key');

  let _traverse = (node) => {
    if(!node) throw new Error('Key not found');
    if(node.key === key) return node.val;
    _traverse(node.next);
  };

  return _traverse(this.head);
};

DLL.prototype.remove = function(key) {
  if(!key) throw new Error('Please provide a key');
  if(!this.tail) throw new Error('the list is empty');

  if(this.tail.key === key && this.head === this.tail) {
    this.tail = null;
    this.head = null;
    return --this.length;
  }

  if(this.tail.key === key) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    return --this.length;
  }

  if(this.head.key === key) {
    this.head = this.head.next;
    this.head.prev = null;
    return --this.length;
  }

  let _check = (node) => {
    if(!node) return new Error('No Value found');
    if(node.key === key) {
      let temp = node.next;
      node.next.prev = node.prev;
      node.prev.next = temp;
      return --this.length;
    }
    _check(node.prev);
  };
};
