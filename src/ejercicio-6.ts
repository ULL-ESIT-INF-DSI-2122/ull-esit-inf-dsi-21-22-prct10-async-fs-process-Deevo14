/**
 * Funcion donde recibimos un arrays de numeros y movemos los ceros al final
 *
 * @param nums recibimos como parametro un array de numbers
 * @returns retornamos un array de numbers con los ceros al final del mismo
 */
export function moveZeros(nums:number[]):number[]{
    const nums2:number[] = [];

    nums.forEach((x) => {
        if (x !== 0){
            nums2.push(x);
        }
    });
    nums.forEach((x) => {
        if (x === 0){
            nums2.push(0);
        }
    });

    return nums2;
}

