/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {productTable} from '../src/ejercicio-1';
import {fromArrayToRanges} from '../src/ejercicio-2';
import {fromRangesToArray} from '../src/ejercicio-2';
import {decodeResitor} from '../src/ejercicio-3';
import {meshArray} from '../src/ejercicio-4';
import {meanAndConcatenate} from '../src/ejercicio-5';
import {moveZeros} from '../src/ejercicio-6';
import {multiplyAll} from '../src/ejercicio-7';
import {pointAdd} from '../src/ejercicio-8';
import {pointSub} from '../src/ejercicio-8';
import {pointMult} from '../src/ejercicio-8';
import {pointDist} from '../src/ejercicio-8';

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
    it('fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]) returns “-3_-1, 3, 5_7”', () => {
      expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.equal('-3_-1, 3, 5_7');
    });
    it('fromArrayToRanges([17]) returns “17”', () => {
      expect(fromArrayToRanges([17])).to.equal('17');
    });
    it('fromArrayToRanges([3, 5, 6, 7, 9, 10]) returns “3, 5_7, 9_10”', () => {
      expect(fromArrayToRanges([3, 5, 6, 7, 9, 10])).to.equal('3, 5_7, 9_10');
    });
});

describe('fromRangesToArray tests', () => {
    it('fromRangesToArray "5_7, 9, 12_14" returs [5, 6, 7, 9, 12, 13, 14]', () => {
      expect(fromRangesToArray('5_7, 9, 12_14')).to.eql([5, 6, 7, 9, 12, 13, 14]);
    });
    it('fromRangesToArray "-3_-1, 3, 5_7" returs [-3, -2, -1, 3, 5, 6, 7]', () => {
      expect(fromRangesToArray('-3_-1, 3, 5_7')).to.eql([-3, -2, -1, 3, 5, 6, 7]);
      });
    it('fromRangesToArray "17" returs [17]', () => {
      expect(fromRangesToArray('17')).to.eql([17]);
    });
    it('fromRangesToArray "3, 5_7, 9_10" returs [3, 5, 6, 7, 9, 10]', () => {
      expect(fromRangesToArray('3, 5_7, 9_10')).to.eql([3, 5, 6, 7, 9, 10]);
    });
});

describe('decodeResistor tests', () => {
  it('decodeResistor "Marrón-Verde" returs 15', () => {
    expect(decodeResitor('Marrón-Verde')).to.equal(15);
  });
  it('decodeResistor "Marrón-Verde-Azul" returs 15', () => {
    expect(decodeResitor('Marrón-Verde-Azul')).to.equal(15);
  });
});

/* describe('meshArray tests', () => {
  it('meshArray [“allow”, “lowering”, “ringmaster”, “terror”] returs "lowringter"', () => {
    expect(meshArray(['allow', 'lowering', 'ringmaster', 'terror'])).to.equal('lowringter');
  });
  it('meshArray [“kingdom”, “dominator”, “notorious”, “usual”, “allegory”] returs "Error al encadenar"', () => {
    expect(meshArray(['kingdom', 'dominator', 'notorious', 'usual', 'allegory'])).to.equal('Error al encadenar');
  });
});
*/

describe('meanAndConcatenate tests', () => {
  it('meanAndConcatenate ["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o2, 2, 0] returns [3.6, "udiwstagwo"]', () => {
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.eql([3.6, 'udiwstagwo']);
  });
});

describe('moveZeros tests', () => {
  it('moveZeros [1, 0, 1, 2, 0, 1, 3] returns [1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.eql([1, 1, 2, 1, 3, 0, 0]);
  });
});

describe('multiplyAll tests', () => {
  it('multiplyAll ([2, 6, 8])(3) returns [6, 18, 24]', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.eql([6, 18, 24]);
  });
});

