'use strict';

const DLL = require('../lib/DLL.js');
const HashTable = require('../lib/hash.js');
const expect = require('chai').expect;

describe('HashTables', function() {
  describe('#Init', function() {
    it('should have a size of 8192 on default', () => {
      expect(new HashTable().size).to.equal(8192);
    });
    it('should have a size of 1224 if 1224 is passed in', () => {
      expect(new HashTable(1224).size).to.equal(1224);
    });
    it('should have a buckets property array', () => {
      expect(new HashTable().buckets).to.be.an('Array');
    });
    it('should have a bucket instance of DLL', () => {
      expect(new HashTable().buckets[0]).to.be.instanceof(DLL);
    });
  });

  describe('#hash', function() {
    let hash = new HashTable();
    it('should make a single number', () => {
      expect(hash.hash('word')).to.be.a('Number');
    });
    it('should make use character codes to create a number', () => {
      expect(hash.hash('a')).to.equal(97);
    });
    it('should also take numbers passed as a string', () => {
      expect(hash.hash('24')).to.exist;
    });
  });
});
