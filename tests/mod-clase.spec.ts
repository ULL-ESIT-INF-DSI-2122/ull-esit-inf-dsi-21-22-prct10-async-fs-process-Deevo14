import 'mocha';
import {expect} from 'chai';
import {add} from '../src/mod-clase';

 describe('Tests ', () => {
    it('add', () => {
        expect(add(1, 8)).to.be.equal(9);
    });
});
