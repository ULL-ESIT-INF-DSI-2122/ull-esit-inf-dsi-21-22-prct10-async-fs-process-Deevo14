/* eslint-disable max-len */
import {Map} from './map';
import {Ficha} from './map';
import {Player} from './player';
/**
 * Creamos una variable para poder leer datos por consola
 */
const scanf = require('scanf');

/**
 * Clase para crear una partida.
 */
export class Game {
    /**
     * Constructor de la clase donde le pasamos dos jugadores
     * @param players Array de los dos jugadores
     */
    constructor(public players:Player[]){};

    /**
     * Función para compenzar una partida.
     */
    start(){
        console.log('Empieza la partida:');
        const mapa = new Map;
        const ficha:Ficha[] = ['Roja', 'Azul'];

        loop:
        while (this.players[0].fichas > 0 && this.players[1].fichas > 0){
            for (let i = 1; i < 3; i++){
                let error = 0;
                let column = -1;
                mapa.imprimirMap();
                while (mapa.insertFicha(column - 1, i) !== true){
                    if (error === 1){
                        console.log(`La columna está completa, seleccione otra diferente.\n`);
                    }
                    console.log(`${this.players[i - 1].name} seleccione una columna: `);
                    column = scanf('%d');
                    error = 1;
                }
                this.players[i - 1].fichas -= 1;
                if (mapa.checkWin(ficha[i - 1]) === true ){
                    mapa.imprimirMap();
                    console.log(`${this.players[i - 1].name} Gana\n`);
                    break loop;
                }
            }
        }
        if (this.players[0].fichas <= 0 || this.players[1].fichas <= 0){
            mapa.imprimirMap();
            console.log(`Empate, el tablero se ha completado sin ningún ganador`);
        }
    }
}
