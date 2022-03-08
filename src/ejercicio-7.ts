/**
 * Finalizada
 * @param nums
 * @returns
 */
export function multiplyAll(nums:number[]):Function{
    const result:number[] = [];

    function multiply(x:number):number[]{
        for (let i = 0; i < nums.length; i++){
            result.push(nums[i] * x);
        }
        return result;
    }
    return multiply;
}
