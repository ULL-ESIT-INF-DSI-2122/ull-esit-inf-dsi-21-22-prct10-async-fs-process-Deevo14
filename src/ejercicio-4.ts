/**
 *
 * @param words
 * @returns
 */
export function meshArray(words:string[]):string{
    let result:string = '';
    let contador:number = 0;

    for (let i = 0; i < words.length - 1; i++){
        const word:string = words[i];
        const nextWord:string = words[i + 1];
        let pos:number = 0;
        let auxstring:string = '';

        for (let j = 0; j < word.length; j++){
            if (nextWord[pos] === word[j]){
                auxstring += word[j];
                pos++;
                if (j === word.length - 1){
                    result += auxstring;
                    contador++;
                }
            }
        }
    }

    if (contador !== words.length - 1){
        result = 'Error al encadenar';
    }
    return result;
}
