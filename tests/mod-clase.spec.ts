import 'mocha';
import {expect} from 'chai';
import {primeNumberItem, PrimeNumber} from '../src/mod-clase';

const primenumber = PrimeNumber.getInstance();
const primenumber2 = PrimeNumber.getInstance();

 describe('Tests ', () => {
    it('nNumbers', () => {
        expect(primenumber.getPrimes(6)).to.be.eql([1, 2, 3, 5, 7, 11]);
   
    });
    it('nNumbers', () => {
        expect(primenumber2.getPrimesOnRange(3, 20)).to.be.eql([3, 5, 7, 11, 13, 17, 19]);
   
    });
    it('add/get numbers', () => {
        primenumber.addNumbers({n: 3, m:20});
        expect(primenumber.getNumbers()).to.be.eql([{"n":3, "m":20}]);
    });
});
