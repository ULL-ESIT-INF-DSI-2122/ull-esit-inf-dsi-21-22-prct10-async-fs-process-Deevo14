/**
 * Clase para un Pokemon
 */
export class Pokemon {
        /**
         * Constructor de la clase con todas las estadisticas del Pokemon
         * @param name Nombre del Pokemon
         * @param weight Peso del Pokemon
         * @param height Altura del Pokemon
         * @param type Tipo del Pokemon
         * @param attack Ataque del Pokemon
         * @param defense Defensa del Pokemon
         * @param speed Velocidad del Pokemon
         * @param hp Vida del Pokemon
         */
        constructor(public name:string, public weight:number,
        public height:number, public type:string,
        public attack:number, public defense:number,
        public speed:number, public hp:number){}
}
