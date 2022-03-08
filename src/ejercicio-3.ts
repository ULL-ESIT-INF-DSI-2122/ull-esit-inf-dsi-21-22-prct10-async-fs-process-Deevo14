/* eslint-disable max-len */
export function decodeResitor(resistance:string):number{
    enum colors {Negro, Marrón, Rojo, Naranja, Amarillo, Verde, Azul, Violeta, Gris, Blanco};
    let result:string = '';
    const lista = resistance.split('-');

    for(let i = 0; i < 2; i++){
        for(let k = 0; k < 10;k++){
            if (lista[i] === colors[k]){
                result += k;
            }
        }
    }
    
    return parseInt(result);
}