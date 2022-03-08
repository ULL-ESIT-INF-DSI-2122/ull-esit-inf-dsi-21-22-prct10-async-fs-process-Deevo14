/**
 * arreglar "ANYs"
 * @param tupla
 * @returns
 */
export function meanAndConcatenate(tupla:any[]):string[]{
    let media:number = 0;
    let concatenate:string = '';
    let aux:number = 0;
    const numbers:string = '0123456789';
    const abc:string = 'abcdefghijklmnñopqrstuvwxyz';

    for (let i = 0; i < tupla.length; i++){
        if (numbers.search(tupla[i]) != -1){
            media += parseInt(tupla[i]);
            aux++;
        }
        if (abc.search(tupla[i]) != -1){
            concatenate += tupla[i];
        }
    }

    media /= aux;

    const result:any[] = [media, concatenate];

    return result;
}
