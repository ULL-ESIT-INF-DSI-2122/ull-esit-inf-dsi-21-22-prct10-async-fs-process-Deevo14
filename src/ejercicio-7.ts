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
    function multiply(x:number):number[]{
        for (let i = 0; i < nums.length; i++){
            result.push(nums[i] * x);
        }
        return result;
    }
    return multiply;
}
