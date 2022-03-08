/**
 *  Usamos dos arrays, preguntar profesor si es solo con uno
 * @param nums
 * @returns
 */
export function moveZeros(nums:number[]):number[]{
    const aux:number = nums.length;
    const nums2:number[] = [];

    for (let i = 0; i < aux; i++){
        if (nums[i] !== 0){
            nums2.push(nums[i]);
        }
    }
    for (let i = 0; i < aux; i++){
        if (nums[i] === 0){
            nums2.push(0);
        }
    }

    return nums2;
}

