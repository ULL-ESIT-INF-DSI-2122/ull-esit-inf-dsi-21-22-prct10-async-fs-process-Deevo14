import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../../src/ejercicio-1/pokedex';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {Hogwarts} from '../../src/ejercicio-1/hogwarts';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

const Ironman = new Marvel('Ironman', 120, 190, 'Yo soy Ironman', 100, 100, 200, 500);
const Harry = new Hogwarts('Harry Potter', 60, 180, 'Avada Kedavra', 200, 50, 150, 300);
const Venusaur = new Pokemon('Venusaur', 100, 2, 'Venasaurrr!!', 82, 83, 80, 82, 'plant');

const pokedex1 = new Pokedex([Ironman, Harry]);

describe('Tests de los métodos de Pokedex', () => {
    it('addFighters', () => {
        pokedex1.addFighter(Venusaur);
        expect(pokedex1.getFighters()).to.be.eql([Ironman, Harry, Venusaur]);
    });
});
