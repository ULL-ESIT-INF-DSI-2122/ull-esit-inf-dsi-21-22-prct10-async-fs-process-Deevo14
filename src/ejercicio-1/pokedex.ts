import {Pokemon} from './pokemon';

/**
 * Clase Pokedex donde almacenamos todos los Pokemons
 */
export class Pokedex{
    /**
     * Constructor de la clase
     * @param pokemons Array de los Pokemons que inicializemos
     */
    constructor(public pokemons: Pokemon[]){}

    /**
     * Funcion para añadir Pokemons a la Pokedex haciendo un .push en el array
     * @param pokemon Le pasamos como parámetro un Pokemon
     */
    añadirPokemon(pokemon: Pokemon) {
        this.pokemons.push(pokemon);
    }
}
