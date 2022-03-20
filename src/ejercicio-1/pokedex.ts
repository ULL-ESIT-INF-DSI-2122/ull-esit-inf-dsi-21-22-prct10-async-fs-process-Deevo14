import {Pokemon} from './pokemon';

export class Pokedex{
    constructor(public pokemons: Pokemon[]){}

    addPokemon(pokemon: Pokemon) {
        this.pokemons.push(pokemon);
    }
}
