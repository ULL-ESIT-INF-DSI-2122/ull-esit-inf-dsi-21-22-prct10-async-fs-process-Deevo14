import {Fighter} from './fighter';

/**
 * Clase Pokedex donde almacenamos todos los Fighters
 */
export class Pokedex{
    /**
     * Constructor de la clase
     * @param fighters Array de los Figherts que inicializemos
     */
    constructor(protected fighters: Fighter[]){}

    /**
     * Metodo para añadir Figherts a la Pokedex haciendo un .push en el array
     * @param newFighter Le pasamos como parámetro un Fighter
     */
    addFighter(newFighter: Fighter) {
        this.fighters.push(newFighter);
    }
    /**
     * Metodo para ver todos los Fighters
     * @returns retorna el array de Fighters
     */
    getFighters(){
        return this.fighters;
    }
}
