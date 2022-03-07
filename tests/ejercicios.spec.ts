/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {productTable} from '../src/ejercicio-1';
import {fromArrayToRanges} from '../src/ejercicio-2';

describe('productTable tests', () => {
  it('productTable(2) returns [[1, 2], [2, 4]]', () => {
    expect(productTable(2)).to.eql([[1, 2], [2, 4]]);
  });
  it('productTable(3) returns [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () => {
    expect(productTable(3)).to.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });

  it('productTable(4) returns [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]', () => {
    expect(productTable(4)).to.eql([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
  });
});

describe('fromArrayToRanges tests', () => {
    it('fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]) returns “5_7, 9, 12_14”', () => {
      expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.equal('5_7, 9, 12_14');
    });
});