'use strict';

const DLL = require('./double-linked-list.js');

//Much quicker Big O notation than sorting method
//Best to use a linked list as back-up storage in case of collisions

const HashTable = module.exports = function(size=8192) {
  this.size = size;
  this.buckets = [...Array(this.size)].fill(new DLL());
};

HashTable.prototype.hash = function(key) {
  if(!key) throw new Error('key required for hash');
  let hash = key.split('').reduce((acc, val) => acc + val.charCodeAt(0), 0) % this.size;

  return hash;
};

HashTable.prototype.set = function(key, val) {
  this.buckets[this.hash(key)].append(val, key);
};

HashTable.prototype.get = function(key) {
  return this.buckets[this.hash(key)].find(key);
};

HashTable.prototype.remove = function(key) {
  let keyLocation = this.hash(key);
  this.buckets[keyLocation].head ? this.buckets[keyLocation].remove(key): new Error('invalid key');
};
