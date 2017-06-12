'use strict';

const DLL = require('./DLL.js');

const HashTable = module.exports = function(size=8192) {
  this.size = size;
  this.buckets = [...Array(this.size)].fill(new DLL());
};

HashTable.prototype.hash = function(key) {
  if(!key) throw new Error('key required for hash');
  let hash = key.split('').reduce((acc, val) => acc + val.charCode(), 0) % this.size;

  return hash;
};

HashTable.prototype.set = function(key, val) {
  this.buckets[this.hash(key)].append(val, key);
};

HashTable.prototype.get = function(key) {
  return this.buckets[this.hash(key)].find(key);
};

HashTable.prototype.remove = function(key) {
  let address = this.hash(key);
  this.buckets[address].head ? this.buckets[address].remove(key): new Error('invalid key');
};
