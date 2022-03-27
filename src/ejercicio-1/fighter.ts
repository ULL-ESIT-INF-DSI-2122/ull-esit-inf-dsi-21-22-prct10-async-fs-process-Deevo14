/**
 * Clase abstracta Fighters
 */
export abstract class Fighter {
    /**
     * Constructor de la Clase abstracta Fighters
     * @param name Nombre
     * @param weight Peso
     * @param height Altura
     * @param catchingPhrase Frase
     * @param attack Ataque
     * @param defense Defensa
     * @param speed Velocidad
     * @param hp Vida
     * @param universe Universo del Fighter
     * @param type Parametro opcional, si es un Pokemón lo usaremos para el tipo.
     */
    constructor(protected name:string, protected weight:number,
        protected height:number, protected catchingPhrase:string,
        protected attack:number, protected defense:number,
        protected speed:number, protected hp:number,
        protected universe:string, protected type?:string){}

        /**
         * Metodo para obtener el nombre del Fighter
         * @returns retorna el nombre del Fighter
         */
        getName():string{
            return this.name;
        }

        /**
         * Metodo para obtener el peso del Fighter
         * @returns retorna el peso del Fighter
         */
        getWeight():number{
            return this.weight;
        }

        /**
         * Metodo para obtener la altura del Fighter
         * @returns retorna la altura del Fighter
         */
        getHeight():number{
            return this.height;
        }

        /**
         * Metodo para obtener la frase del Fighter
         * @returns retorna la frase del Fighter
         */
        getCatchingPhrase():string{
            return this.catchingPhrase;
        }

        /**
         * Metodo para obtener el ataque del Fighter
         * @returns retorna el ataque del Fighter
         */
        getAttack():number{
            return this.attack;
        }

        /**
         * Metodo para obtener la defensa del Fighter
         * @returns retorna la defensa del Fighter
         */
        getDefense():number{
            return this.defense;
        }

        /**
         * Metodo para obtener la velocidad del Fighter
         * @returns retorna la velocidad del Fighter
         */
        getSpeed():number{
            return this.speed;
        }

        /**
         * Metodo para obtener la vida del Fighter
         * @returns retorna la vida del Fighter
         */
        getHp():number{
            return this.hp;
        }

        /**
         * Metodo para obtener el universo del Fighter
         * @returns retorna el universo del Fighter
         */
        getUniverse():string{
            return this.universe;
        }

        /**
         * Metodo para cambiar la vida del Fighter
         */
        setHp(newHp:number){
            this.hp = newHp;
        }

        /**
         * Metodo para obtener el tipo del Fighter(retornara string cuando sea un Pokemon)
         * @returns retorna el tipo del Figher
         */
        getType():string | undefined {
            return this.type;
        }
}
