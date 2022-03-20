/* eslint-disable max-len */
import 'mocha';
import {Combat} from '../src/ejercicio-1/combat';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Pokemon} from '../src/ejercicio-1/pokemon';

describe('Combate Pokemon', () => {
    const Venusaur = new Pokemon('Venusaur', 100, 2, 'plant', 82, 83, 80, 80);
    const Charizard = new Pokemon('Charizard', 90, 1.7, 'fire', 84, 78, 100, 78);

    const Pokedex1 = new Pokedex([]);

    Pokedex1.addPokemon(Venusaur);
    Pokedex1.addPokemon(Charizard);

    const FirstCombat = new Combat(Charizard, Venusaur);
    FirstCombat.start();
});
