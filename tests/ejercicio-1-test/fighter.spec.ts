import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {Hogwarts} from '../../src/ejercicio-1/hogwarts';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
const fighter1 = new Marvel('Ironman', 120, 190, 'Yo soy Ironman', 100, 100, 200, 500);
const fighter2 = new Hogwarts('Harry Potter', 60, 180, 'Avada Kedavra', 200, 50, 150, 300);
const fighter3 = new Pokemon('Venusaur', 100, 2, 'Venasaurrr!!', 82, 83, 80, 82, 'plant');


describe('Tests de los métodos de Fighter', () => {
    it('getName', () => {
        expect(fighter1.getName()).to.be.equal('Ironman');
    });
    it('getWeight', () => {
        expect(fighter1.getWeight()).to.be.equal(120);
    });
    it('getHeight', () => {
        expect(fighter1.getHeight()).to.be.equal(190);
    });
    it('getCatchingPhrase', () => {
        expect(fighter2.getCatchingPhrase()).to.be.equal('Avada Kedavra');
    });
    it('getAttack', () => {
        expect(fighter1.getAttack()).to.be.equal(100);
    });
    it('getDefense', () => {
        expect(fighter1.getDefense()).to.be.equal(100);
    });
    it('getSpeed', () => {
        expect(fighter1.getSpeed()).to.be.equal(200);
    });
    it('getHp', () => {
        expect(fighter1.getHp()).to.be.equal(500);
    });
    it('getUniverse', () => {
        expect(fighter1.getUniverse()).to.be.equal('Marvel');
    });
    it('setHp', () => {
        fighter1.setHp(600);
        expect(fighter1.getHp()).to.be.equal(600);
    });
    it('getType', () => {
        expect(fighter3.getType()).to.be.equal('plant');
    });
});
