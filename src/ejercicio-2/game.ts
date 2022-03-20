/* eslint-disable max-len */
import {Map} from './map';
import {Ficha} from './map';
const scanf = require('scanf');

export class Game {
    constructor(public players:string[]){};


    start(){
        console.log('Empieza la partida:');
        const mapa = new Map;
        let fichas = 42;
        const ficha:Ficha[] = ['Roja', 'Azul'];

        loop:
        while (fichas > 0){
            for (let i = 1; i < 3; i++){
                let error = 0;
                let column = -1;
                mapa.imprimirMap();
                while (mapa.insertFicha(column - 1, i) !== true){
                    if (error === 1){
                        console.log(`La columna está completa, seleccione otra diferente.\n`);
                    }
                    console.log(`${this.players[i - 1]} seleccione una columna: `);
                    column = scanf('%d');
                    error = 1;
                }
                if (mapa.checkWin(ficha[i - 1]) === true ){
                    mapa.imprimirMap();
                    console.log(`${this.players[i - 1]} Gana\n`);
                    break loop;
                }
            }
            fichas -= 2;
        }
    }
}
