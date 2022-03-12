/**
 * Tipo de dato que consiste en un array con 3 o mas numeros, los cuales
 * son las cordenadas del punto de 3 o mas dimensiones.
 */
type DPoint = [number, number, number, ...number[]];

/**
 * Funcion para sumar dos puntos en 3 o mas dimensiones
 * Usamos un tipo Point creado anteriormente, el cual es
 * un array de 3 o mas numbers
 * @param p1 Recibimos un primer punto de tipo Point
 * @param p2 Recibimos un primer punto de tipo Point
 * @returns retornamos un tipo Point con la suma de los dos puntos
 */
export function dPointAdd(p1:DPoint, p2:DPoint):DPoint {
    const result:DPoint = [0, 0, 0];

    for (let i = 0; i < p1.length; i++){
        result[i] = p1[i] + p2[i];
    }

    return result;
}

/**
 * Funcion para restar dos puntos en 3 o mas dimensiones
 *
 * @param p1 Recibimos un primer punto de tipo Point
 * @param p2 Recibimos un primer punto de tipo Point
 * @returns retornamos un tipo Point con la resta de los dos puntos
 */
export function dPointSub(p1:DPoint, p2:DPoint):DPoint{
    const result:DPoint = [0, 0, 0];

    for (let i = 0; i < p1.length; i++){
        result[i] = p1[i] - p2[i];
    }

    return result;
}

/**
 * Funcion para calcular el producto de un punto por un numero
 * @param p1 Recibimos un punto de tipo Point
 * @param x Recibimos un numero
 * @returns retornamos un tipo Point con el producto del punto y el nunmero
 */
export function dPointMult(p1:DPoint, x:number):DPoint{
    const result:DPoint = [0, 0, 0];


    for (let i = 0; i < p1.length; i++){
        result[i] = p1[i] * x;
    }

    return result;
}

/**
 * Funcion para calcular la distancia euclídea entre dos puntos
 * @param p1 Recibimos un primer punto de tipo Point
 * @param p2 Recibimos un primer punto de tipo Point
 * @returns Retornamos un tipo Point que es el calculo de la distancia euclídea
 */
export function dPointDist(p1:DPoint, p2:DPoint):number{
    let result:number = 0;

    for (let i = 0; i < p1.length; i++){
    result += (p2[i] - p1[i]) ** 2;
    }

    return Math.sqrt(result);
}
