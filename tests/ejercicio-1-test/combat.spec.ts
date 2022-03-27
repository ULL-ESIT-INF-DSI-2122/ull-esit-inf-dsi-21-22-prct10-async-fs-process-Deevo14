/* eslint-disable no-unused-vars */
import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {Hogwarts} from '../../src/ejercicio-1/hogwarts';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Combat} from '../../src/ejercicio-1/combat';

const Ironman = new Marvel('Ironman', 120, 190, 'Yo soy Ironman', 100, 100, 200, 500);
const Harry = new Hogwarts('Harry Potter', 60, 180, 'Avada Kedavra', 200, 50, 150, 300);
const Venusaur = new Pokemon('Venusaur', 100, 2, 'Vena!!', 82, 83, 80, 82, 'plant');
const Charizard = new Pokemon('Charizard', 90, 1.7, 'Chai!!', 84, 78, 100, 78, 'fire');

const combat1 = new Combat(Ironman, Harry);
const combat2 = new Combat(Venusaur, Ironman);
const combat3 = new Combat(Venusaur, Charizard);


describe('Tests de los métodos de Combat', () => {
    it('start con dos pokemons', () => {
        expect(combat3.start()).to.be.equal('Venusaur');
    });

    it('start con diferentes universos', () => {
        expect(combat1.start()).to.be.equal('Ironman');
        expect(combat2.start()).to.be.equal('Ironman');
    });

    it('effectivity', () => {
        expect(combat1.effectivity('Marvel', 'Marvel')).to.be.equal(1);
        expect(combat1.effectivity('Marvel', 'Hogwarts')).to.be.equal(1);
        expect(combat1.effectivity('Marvel', 'Pokemon')).to.be.equal(2);
        expect(combat1.effectivity('Hogwarts', 'Hogwarts')).to.be.equal(1);
        expect(combat1.effectivity('Hogwarts', 'Marvel')).to.be.equal(1);
        expect(combat1.effectivity('Hogwarts', 'Pokemon')).to.be.equal(0.5);
        expect(combat1.effectivity('Pokemon', 'Marvel')).to.be.equal(0.5);
        expect(combat1.effectivity('Pokemon', 'Hogwarts')).to.be.equal(2);
    });

    it('effectivity on 2 Pokemons', () => {
        expect(combat3.pokEfectivity('fire', 'electric')).to.be.equal('neutral');
        expect(combat3.pokEfectivity('fire', 'fire')).to.be.equal('weak');
        expect(combat3.pokEfectivity('fire', 'water')).to.be.equal('weak');
        expect(combat3.pokEfectivity('fire', 'plant')).to.be.equal('strong');
        expect(combat3.pokEfectivity('water', 'electric')).to.be.equal('weak');
        expect(combat3.pokEfectivity('water', 'fire')).to.be.equal('strong');
        expect(combat3.pokEfectivity('water', 'water')).to.be.equal('weak');
        expect(combat3.pokEfectivity('water', 'plant')).to.be.equal('weak');
        expect(combat3.pokEfectivity('plant', 'electric')).to.be.equal('neutral');
        expect(combat3.pokEfectivity('plant', 'fire')).to.be.equal('weak');
        expect(combat3.pokEfectivity('plant', 'water')).to.be.equal('strong');
        expect(combat3.pokEfectivity('plant', 'plant')).to.be.equal('weak');
        expect(combat3.pokEfectivity('electric', 'electric')).to.be.equal('weak');
        expect(combat3.pokEfectivity('electric', 'fire')).to.be.equal('neutral');
        expect(combat3.pokEfectivity('electric', 'water')).to.be.equal('strong');
        expect(combat3.pokEfectivity('electric', 'plant')).to.be.equal('neutral');
    });
});
