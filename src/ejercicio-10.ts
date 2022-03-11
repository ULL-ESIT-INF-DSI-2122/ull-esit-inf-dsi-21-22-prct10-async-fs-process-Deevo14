export function cartesia(path:string[]):boolean{
    let i:number = 0;
    let j:number = 0;

    if (path.length === 10){
        path.forEach((dir) => {
            switch (dir){
                case 'n': {
                   i += 1;
                   break;
                }
                case 's': {
                    i -= 1;
                    break;
                }
                case 'e': {
                    j += 1;
                    break;
                }
                case 'o': {
                    j -= 1;
                    break;
                }
            }
        });
        if (i === 0 && j === 0){
            return true;
        }
    }

    return false;
}
