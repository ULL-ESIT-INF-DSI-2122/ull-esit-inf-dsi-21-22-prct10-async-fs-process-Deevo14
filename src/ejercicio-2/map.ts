/* eslint-disable max-len */
export type Ficha = ('Vacia' | 'Roja' | 'Azul');

export class Map{
    public map:Ficha[][] = [];
    constructor(){
        for (let i = 0; i < 6; i++){
            this.map[i] = [];
            for (let j = 0; j < 7; j++){
                this.map[i][j] = 'Vacia';
            }
        }
    }

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
