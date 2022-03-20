/* eslint-disable max-len */
export type Ficha = ('Vacia' | 'Roja' | 'Azul');

/**
 * Clase Map donde crearemos el "tablero", insertaremos las fichas y haremos comprobaciones
 */
export class Map{
    public map:Ficha[][] = [];
    /**
     * El constructor de la clase será crear el tablero, usando fichas "Vacias"
     */
    constructor(){
        for (let i = 0; i < 6; i++){
            this.map[i] = [];
            for (let j = 0; j < 7; j++){
                this.map[i][j] = 'Vacia';
            }
        }
    }

    /**
     * Funcion para imprimir el tablero por pantalla:
     * - Si hay un espacio vacío imprimiremos "_".
     * - Si hay una ficha Roja, "X".
     * - Si hay una ficha Azul, "O".
     */
    imprimirMap(){
        console.log(`\n`);
        for (let i = 0; i < 6; i++){
            let auxfilas:string = '';
            for (let j = 0; j < 7; j++){
                switch (this.map[i][j]){
                    case 'Vacia': {
                        auxfilas += '_   ';
                        break;
                    }
                    case 'Roja': {
                        auxfilas += 'X   ';
                        break;
                    }
                    case 'Azul': {
                        auxfilas += 'O   ';
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
         console.log(`${auxfilas}\n`);
        }
    }

    /**
     * Funcion para insertar una ficha de un color en una columna
     * @param column Le pasamos la columna que elige el jugador
     * @param player Jugador que elige la columna
     * @returns Si se puede insertar la ficha retornamos _true_,
     *          en caso de que la columna este llena, _false_.
     */
    insertFicha(column:number, player:number):boolean{
        if (column >= 0 && column < 7){
            for (let i = 5; i >= 0; i--){
                if (this.map[i][column] === 'Vacia'){
                    switch (player){
                        case 1: {
                            this.map[i][column] = 'Roja';
                            return true;
                            break;
                        }
                        case 2: {
                            this.map[i][column] = 'Azul';
                            return true;
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
            }
        }
        return false;
    }

    /**
     * Funcion para comprobar si hay 4 fichas de un mismo color horizontalmente
     * @param color le pasamos el color de la ficha a comprobar
     * @returns retornamos _true_ si hay 4 contiguas y _false_ si no.
     */
    checkHorizontal(color:Ficha):boolean{
        let counth:number = 0;
        for (let i = 0; i < 6; i++){
            for (let j = 0; j < 7; j++){
                if (this.map[i][j] === color){
                    counth++;
                    if (counth === 4){
                        return true;
                    }
                }
                else {
                    counth = 0;
                }
            }
        }
        return false;
    }

    /**
     * Funcion para comprobar si hay 4 fichas de un mismo color verticalmente
     * @param color le pasamos el color de la ficha a comprobar
     * @returns retornamos _true_ si hay 4 contiguas y _false_ si no.
     */
    checkVertical(color:Ficha):boolean{
        let countv:number = 0;
        for (let i = 0; i < 7; i++){
            for (let j = 0; j < 6; j++){
                if (this.map[j][i] === color){
                    countv++;
                    if (countv === 4){
                        return true;
                    }
                }
                else {
                    countv = 0;
                }
            }
        }
        return false;
    }

    /**
     * Funcion para comprobar si hay 4 fichas de un mismo color diagonalmente
     * @param color le pasamos el color de la ficha a comprobar
     * @returns retornamos _true_ si hay 4 contiguas y _false_ si no.
     */
    checkDiagonal(color:Ficha):boolean{
        let countd:number = 0;
        for (let i = 0; i < 6; i++){
            for (let j = 0; j < 7; j++){
                if (this.map[i][j] === color){
                    let k:number = i;
                    let l:number = j;
                    countd = 0;
                    while (k < 6 && k >= 0 && l >= 0 && l < 7 && this.map[k][l] === color){
                        countd++;
                        k++;
                        l++;
                        if (countd === 4){
                            return true;
                        }
                    }
                    countd = 0;
                    k = i;
                    l = j;
                    while (k < 6 && k >= 0 && l >= 0 && l < 7 && this.map[k][l] === color){
                        countd++;
                        k++;
                        l--;
                        if (countd === 4){
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    /**
     * Funcion para comprobar si alguien ha ganado
     * @param color Le pasamos el color de la ficha del jugador a comprobar
     * @returns Si alguna de las tres funciones anteriores retorna _true_,
     * retornamos también _true_, en caso contrario, _false_.
     */
    checkWin(color:Ficha):boolean{
        if (this.checkDiagonal(color) === true ||
            this.checkVertical(color) === true ||
            this.checkHorizontal(color) === true){
                return true;
            }
        else {
            return false;
        }
    }
}
