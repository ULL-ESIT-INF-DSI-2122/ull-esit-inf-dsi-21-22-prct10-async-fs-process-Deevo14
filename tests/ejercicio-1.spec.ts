/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Combat} from '../src/ejercicio-1/combat';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Pokemon} from '../src/ejercicio-1/pokemon';

describe('Comprobaciones Combat', () => {
    const Venusaur = new Pokemon('Venusaur', 100, 2, 'plant', 82, 83, 80, 82);
    const Charizard = new Pokemon('Charizard', 90, 1.7, 'fire', 84, 78, 100, 78);
    const Pokedex1 = new Pokedex([]);
    Pokedex1.añadirPokemon(Venusaur);
    Pokedex1.añadirPokemon(Charizard);
    const FirstCombat = new Combat(Charizard, Venusaur);
    const testCombat = new Combat(Charizard, Venusaur);

    it('Test Effectivity', () => {
        expect(testCombat.effectivity('fire', 'water')).to.be.equal(0.5);
        expect(testCombat.effectivity('electric', 'plant')).to.be.equal(1);
        expect(testCombat.effectivity('fire', 'plant')).to.be.equal(2);
    });

    it('Test Combat', () => {
        expect(FirstCombat.start()).to.be.equal('Charizard');
    });
});
