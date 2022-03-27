import {Fighter} from './fighter';

/**
 * Clase para un personaje de Marvel
 */
export class Marvel extends Fighter {
        /**
         * Constructor de la clase Marvel
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
                attack, defense, speed, hp, 'Marvel');
        }
}
