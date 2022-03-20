/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';

describe('add tests', () => {
    it('add(1,8) returns 9', () => {
        expect(add(1, 8)).to.be.equal(9);
    });
});
