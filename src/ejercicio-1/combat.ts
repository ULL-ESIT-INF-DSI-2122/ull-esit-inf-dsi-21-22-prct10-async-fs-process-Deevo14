/* eslint-disable max-len */
import {Pokemon} from './pokemon';

export class Combat {
    constructor(public pokemon1: Pokemon, public pokemon2: Pokemon){};


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
