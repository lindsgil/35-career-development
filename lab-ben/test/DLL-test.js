'use strict';

const DLL = require('../lib/DLL.js');
const expect = require('chai').expect;

describe('Doubly Linked Lists', function() {
  describe('#append', function() {
    let dll = new DLL();
    it('should add a head if there is none previously', () => {
      dll.append(123, 123);
      expect(dll.head.val).to.equal(123);
      expect(dll.head.key).to.equal(123);
    });
    it('should have the head and tail point to the same value if there is only one', () => {
      expect(dll.head).to.equal(dll.tail);
    });
    it('should add values to the tail', () => {
      expect(dll.head.val).to.equal(123);
      dll.append(456, 456);
      expect(dll.tail.val).to.equal(456);
    });
  });

  describe('#prepend', function() {
    let dll = new DLL();
    it('should add a head if there is none previously', () => {
      dll.prepend(123, 123);
      expect(dll.head.val).to.equal(123);
      expect(dll.head.key).to.equal(123);
    });
    it('should have the head and tail point to the same value if there is only one', () => {
      expect(dll.head).to.equal(dll.tail);
    });
    it('should add values to the head', () => {
      dll.prepend(456, 456);
      expect(dll.head.val).to.equal(456);
    });
  });

  describe('#find', function() {
    let dll = new DLL();
    dll.append('abc', 123);
    dll.append('def', 456);
    dll.append('ghi', 789);
    it('should return the value if a key is found', () => {
      expect(dll.find(123)).to.equal('abc');
    });
  });

  describe('#remove', function() {
    let dll = new DLL();
    dll.append('abc', 123);
    dll.append('def', 456);
    dll.append('ghi', 789);
    it('should replace the head if the head is removed', () => {
      expect(dll.head.val).to.equal('abc');
      dll.remove(123);
      expect(dll.head.val).to.equal('def');
    });
    it('should replace the tail if the tail is removed', () => {
      dll.append('jkl', 112);
      expect(dll.tail.val).to.equal('jkl');
      dll.remove(112);
      expect(dll.tail.val).to.equal('ghi');
    });
    it('should leave the head and tail unchaged if the removed value is from the middle', () => {
      dll.append('mno', 225);
      expect(dll.head.val).to.equal('def');
      expect(dll.tail.val).to.equal('mno');
      dll.remove(789);
      expect(dll.head.val).to.equal('def');
      expect(dll.tail.val).to.equal('mno');
    });
  });
});
