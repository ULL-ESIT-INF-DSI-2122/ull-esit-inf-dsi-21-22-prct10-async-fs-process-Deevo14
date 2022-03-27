import {Fighter} from './fighter';

/**
 * Clase Combat
 */
export class Combat {
    /**
     * Constructor de la clase Combat
     * @param fighter1 Le pasamos como parametro el primer Luchador
     * @param fighter2 Le pasamos como parametro el segundo Luchador
     */
    constructor(private fighter1: Fighter, private fighter2: Fighter){};

    /**
     * Metodo para calcular la efectividad entre dos universos
     * @param universe1 universo del primer Fighter
     * @param universe2 universo del segundo Fighter
     * @returns Devolvemos el multiplicador de daño
     */
    effectivity(universe1:string, universe2:string):number {
        let damageValue:number = 0;
        let effectivity:string = '';

        switch (universe1){
            case 'Marvel': {
                if (universe2 == 'Pokemon'){
                    effectivity = 'strong';
                }
                if (universe2 == 'Hogwarts' || universe2 == 'Marvel'){
                    effectivity = 'neutral';
                }
                break;
            }
            case 'Hogwarts': {
                if (universe2 == 'Pokemon'){
                    effectivity = 'weak';
                }
                if (universe2 == 'Marvel' || universe2 == 'Hogwarts'){
                    effectivity = 'neutral';
                }
                break;
            }
            case 'Pokemon': {
                if (universe2 == 'Hogwarts'){
                    effectivity = 'strong';
                }
                if (universe2 == 'Pokemon'){
                    effectivity = this.pokEfectivity(this.fighter1.getType(), this.fighter2.getType());
                }
                if (universe2 == 'Marvel'){
                    effectivity = 'weak';
                }
                break;
            }
        }

        switch (effectivity){
            case 'neutral': {
                damageValue = 1;
                break;
            }
            case 'strong': {
                damageValue = 2;
                break;
            }
            case 'weak': {
                damageValue = 0.5;
                break;
            }
        }
        return damageValue;
    }

    /**
     * Metodo para calcular la efectividad cuando los fighters son Pokemons,
     * asi que usaremos el tipo de cada uno
     * @param pokemon1Type Tipo del primer Pokemon
     * @param pokemon2Type Tipo del segundo Pokemon
     * @returns Retornamos el tipo de efectividad(weak, neutral o strong)
     */
    pokEfectivity(pokemon1Type:(string | undefined), pokemon2Type:(string | undefined)):string{
        let effectivity1:string = '';

        switch (pokemon1Type){
            case 'fire': {
                if (pokemon2Type == 'electric'){
                    effectivity1 = 'neutral';
                }
                if (pokemon2Type == 'fire' || pokemon2Type == 'water'){
                    effectivity1 = 'weak';
                }
                if (pokemon2Type == 'plant'){
                    effectivity1 = 'strong';
                }

                break;
            }

            case 'water': {
                if (pokemon2Type == 'fire'){
                    effectivity1 = 'strong';
                }
                if (pokemon2Type == 'plant' ||
                    pokemon2Type == 'electric' || pokemon2Type == 'water'){
                    effectivity1 = 'weak';
                }

                break;
            }

            case 'plant': {
                if (pokemon2Type == 'electric'){
                    effectivity1 = 'neutral';
                }
                if (pokemon2Type == 'plant' || pokemon2Type == 'fire'){
                    effectivity1 = 'weak';
                }
                if (pokemon2Type == 'water'){
                    effectivity1 = 'strong';
                }

                break;
            }

            case 'electric': {
                if (pokemon2Type == 'plant' || pokemon2Type == 'fire'){
                    effectivity1 = 'neutral';
                }
                if (pokemon2Type == 'water'){
                    effectivity1 = 'strong';
                }
                if (pokemon2Type == 'electric'){
                    effectivity1 = 'weak';
                }
                break;
            }
        }

        return effectivity1;
    }

    /**
     * Metodo para recrear el combate entre dos Figherts
     * @returns retornamos el nombre del ganador del combate
     */
    start():string{
        let turn = 1;
        while (this.fighter1.getHp() > 0 && this.fighter2.getHp() > 0){
            if (turn % 2 !== 0){
                this.fighter2.setHp(this.fighter2.getHp() - (50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * this.effectivity(this.fighter1.getUniverse(), this.fighter2.getUniverse())));
                console.log(`Turno ${turn}, Ataca ${this.fighter1.getName()}:
    ${this.fighter1.getCatchingPhrase()}-> ${this.fighter1.getName()} HP = ${this.fighter1.getHp()}, ${this.fighter2.getName()} HP = ${this.fighter2.getHp()}\n\n`);
            }
            else {
                this.fighter1.setHp(this.fighter1.getHp() - (50 * (this.fighter2.getAttack() / this.fighter1.getDefense()) * this.effectivity(this.fighter2.getUniverse(), this.fighter1.getUniverse())));
                console.log(`Turno ${turn}, Ataca ${this.fighter2.getName()}:
    ${this.fighter2.getCatchingPhrase()}-> ${this.fighter2.getName()} HP = ${this.fighter2.getHp()}, ${this.fighter1.getName()} HP = ${this.fighter1.getHp()}\n\n`);
            }
            turn++;
        }
        if (turn % 2 !== 0){
            console.log(`Gana ${this.fighter2.getName()}\n\n`);
            return this.fighter2.getName();
        }
        else {
            console.log(`Gana ${this.fighter1.getName()}\n\n`);
            return this.fighter1.getName();
        }
    }
}
