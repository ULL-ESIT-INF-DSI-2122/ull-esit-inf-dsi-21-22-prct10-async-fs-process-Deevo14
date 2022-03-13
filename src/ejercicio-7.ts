/**
 * Funcion que recibe un array de numeros y devuelve una funcion
 * @param nums recibimos como parametro un array de numbers
 * @returns retornamos una funcion llamada multiply
 */
export function multiplyAll(nums:number[]):Function{
    const result:number[] = [];

    /**
     * Funcion que multiplica un array de numeros por un numero
     * @param x recibe como parametro un numero
     * @returns retorna un array de numbers
     */
    function multiply(mult:number):number[]{
        nums.forEach((x) => {
            result.push(x * mult);
        });
        return result;
    }
    return multiply;
}
