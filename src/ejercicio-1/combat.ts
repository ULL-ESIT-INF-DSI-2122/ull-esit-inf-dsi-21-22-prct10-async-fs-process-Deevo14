/* eslint-disable max-len */
import {Pokemon} from './pokemon';
/**
 * Clase Combat donde haremos los combates entre dos Pokemons
 */
export class Combat {
    /**
     * Constructor de la clase Combat donde le pasamos como parámetros dos Pokemons
     * @param pokemon1 Primer Pokemon que va a combatir
     * @param pokemon2 Segundo Pokemon que va a combatir
     */
    constructor(public pokemon1: Pokemon, public pokemon2: Pokemon){};

    /**
     * Funcion para calcular el multiplicador de daño del ataque de un Pokemon contra otro
     * @param pokemon1Type Tipo del primer Pokemon
     * @param pokemon2Type Tipo del segundo Pokemon
     * @returns Retornamos el multiplidor de daño(0.5, 1 o 2)
     */
    effectivity(pokemon1Type:string, pokemon2Type:string):number {
        let damageValue:number = 0;
        let effectivity:string = '';

        switch (pokemon1Type){
            case 'fire': {
                if (pokemon2Type == 'electric'){
                    effectivity = 'neutral';
                }
                if (pokemon2Type == 'fire' || pokemon2Type == 'water'){
                    effectivity = 'weak';
                }
                if (pokemon2Type == 'plant'){
                    effectivity = 'strong';
                }

                break;
            }

            case 'water': {
                if (pokemon2Type == 'fire'){
                    effectivity = 'strong';
                }
                if (pokemon2Type == 'plant' ||
                    pokemon2Type == 'electric' || pokemon2Type == 'water'){
                    effectivity = 'weak';
                }

                break;
            }

            case 'plant': {
                if (pokemon2Type == 'electric'){
                    effectivity = 'neutral';
                }
                if (pokemon2Type == 'plant' || pokemon2Type == 'fire'){
                    effectivity = 'weak';
                }
                if (pokemon2Type == 'water'){
                    effectivity = 'strong';
                }

                break;
            }

            case 'electric': {
                if (pokemon2Type == 'plant' || pokemon2Type == 'fire'){
                    effectivity = 'neutral';
                }
                if (pokemon2Type == 'water'){
                    effectivity = 'strong';
                }
                if (pokemon2Type == 'electric'){
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
     * Funcion para empezar el combate entre los dos Pokemons
     */
    start(){
        let turn = 1;
        while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0){
            if (turn % 2 !== 0){
                this.pokemon2.hp -= (this.pokemon1.attack - this.pokemon2.defense) * this.effectivity(this.pokemon1.type, this.pokemon2.type);
                console.log(`Turno ${turn}: ${this.pokemon1.name} HP = ${this.pokemon1.hp}, ${this.pokemon2.name} HP = ${this.pokemon2.hp}`);
            }
            else {
                this.pokemon1.hp -= (this.pokemon2.attack - this.pokemon1.defense) * this.effectivity(this.pokemon2.type, this.pokemon1.type);
                console.log(`Turno ${turn}: ${this.pokemon1.name} HP = ${this.pokemon1.hp}, ${this.pokemon2.name} HP = ${this.pokemon2.hp}`);
            }
            turn++;
        }
    }
}
