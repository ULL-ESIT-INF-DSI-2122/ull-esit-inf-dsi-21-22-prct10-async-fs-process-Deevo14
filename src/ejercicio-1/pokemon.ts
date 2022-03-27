import {Fighter} from './fighter';

/**
 * Clase Pokemon
 */
export class Pokemon extends Fighter {
        /**
         * Constructor de la clase Pokemon
         * @param name Nombre
         * @param weight Peso
         * @param height Altura
         * @param catchingPhrase Frase
         * @param attack Ataque
         * @param defense Defensa
         * @param speed Velocidad
         * @param hp Vida
         * @param type Tipo del Pokemon
         */
        constructor(name:string, weight:number, height:number,
                catchingPhrase:string, attack:number,
                defense:number, speed:number,
                hp:number, protected type:string){
        super(name, weight, height, catchingPhrase,
                attack, defense, speed, hp, 'Pokemon', type);
        }
}
