import {Fighter} from './fighter';

/**
 * Clase para una personaje de Harry Potter
*/
export class Hogwarts extends Fighter {
        /**
         * Constructor de la clase Hogwarts
         * @param name Nombre
         * @param weight Peso
         * @param height Altura
         * @param catchingPhrase Frase
         * @param attack Ataque
         * @param defense Defensa
         * @param speed Velocidad
         * @param hp Vida
         */
        constructor(name:string, weight:number, height:number,
                catchingPhrase:string, attack:number,
                defense:number, speed:number, hp:number){
        super(name, weight, height, catchingPhrase,
                attack, defense, speed, hp, 'Hogwarts');
        }
}
