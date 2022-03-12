/* eslint-disable no-unused-vars */
/**
 * Función que sirve para calcular el valor de una resistencia
 *
 * @param resistance Le pasamos como parametro un string con los colores
 * de la resistencia
 * @returns Nos devuelve el valor de los dos primeros colores del string
 */
export function decodeResitor(resistance:string):number{
    enum colors {Negro, Marrón, Rojo, Naranja, Amarillo, Verde,
        Azul, Violeta, Gris, Blanco};

    let result:string = '';
    const lista = resistance.split('-');

    for (let i = 0; i < 2; i++){
        for (let k = 0; k < 10; k++){
            if (lista[i] === colors[k]){
                result += k;
            }
        }
    }

    return parseInt(result);
}
