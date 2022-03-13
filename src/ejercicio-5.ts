/**
 * Funcion que recibe una array con letras y numeros y devuelve
 * un array con la media de los numeros y un string con la concatenacion
 * de las letras
 *
 * @param lista Array con valores de tipo string y number
 * @returns Array donde el primer valor es la media de los numeros y
 * el segundo es la concatenacion de las letras
 */
export function meanAndConcatenate(lista:(number | string)[])
:[number, string]{
    let media:number = 0;
    let concatenate:string = '';
    let count:number = 0;

    lista.forEach((x) => {
        if (typeof x === 'number'){
            media += x;
            count++;
        }
        else if (typeof x === 'string'){
            concatenate += x;
        }
    });

    media /= count;

    const result:[number, string] = [media, concatenate];

    return result;
}
