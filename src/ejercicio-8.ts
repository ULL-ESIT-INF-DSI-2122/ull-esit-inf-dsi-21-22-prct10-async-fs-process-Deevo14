type Point = [number, number];

/**
 * Funcion para sumar dos puntos en 2 dimensiones
 * Usamos un tipo Point creado anteriormente.
 * @param p1 Recibimos un primer punto de tipo Point
 * @param p2 Recibimos un primer punto de tipo Point
 * @returns retornamos un tipo Point con la suma de los dos puntos
 */
export function pointAdd(p1:Point, p2:Point):Point {
    const result:Point = [0, 0];

    result[0] = p1[0] + p2[0];
    result[1] = p1[1] + p2[1];

    return result;
}

/**
 * Funcion para restar dos puntos en 2 dimensiones
 *
 * @param p1 Recibimos un primer punto de tipo Point
 * @param p2 Recibimos un primer punto de tipo Point
 * @returns retornamos un tipo Point con la resta de los dos puntos
 */
export function pointSub(p1:Point, p2:Point):Point{
    const result:Point = [0, 0];

    result[0] = p1[0] - p2[0];
    result[1] = p1[1] - p2[1];

    return result;
}

/**
 * Funcion para calcular el producto de un punto por un numero
 * @param p1 Recibimos un punto de tipo Point
 * @param x Recibimos un numero
 * @returns retornamos un tipo Point con el producto del punto y el nunmero
 */
export function pointMult(p1:Point, x:number):Point{
    const result:Point = [0, 0];

    result[0] = p1[0] * x;
    result[1] = p1[1] * x;

    return result;
}

/**
 * Funcion para calcular la distancia euclídea entre dos puntos
 * @param p1 Recibimos un primer punto de tipo Point
 * @param p2 Recibimos un primer punto de tipo Point
 * @returns Retornamos un tipo Point que es el calculo de la distancia euclídea
 */
export function pointDist(p1:Point, p2:Point):number{
    let result:number = 0;

    result = Math.sqrt(Math.pow((p2[0]-p1[0]), 2) + Math.pow((p2[1]-p1[1]), 2));

    return result;
}

