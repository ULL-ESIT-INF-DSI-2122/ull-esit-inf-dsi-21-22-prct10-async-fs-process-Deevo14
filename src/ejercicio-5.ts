/* eslint-disable max-len */
/**
 *
 * @param tupla
 * @returns
 */
export function meanAndConcatenate(tupla:(number | string)[]):(number | string)[]{
    let media:number = 0;
    let concatenate:string = '';
    let count:number = 0;

    tupla.forEach((x) => {
        if (typeof x === 'number'){
            media += x;
            count++;
        }
        else if (typeof x === 'string'){
            concatenate += x;
        }
    });

    media /= count;

    const result:(number | string)[] = [media, concatenate];

    return result;
}
