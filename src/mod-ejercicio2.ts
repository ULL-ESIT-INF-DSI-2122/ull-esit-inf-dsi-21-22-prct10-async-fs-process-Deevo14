function mediafilter(imagen:number[][]):number[][]{
    const suavizado:number[][] = [];

    for (let i:number = 0; i < imagen.length; i++){
        suavizado[i] = [];
        for (let j:number = 0; i < imagen[i].length; i++){
            let media:number = 0;
            let counter:number = 0;
            for (let k:number = i -1; k < i + 1; k++){
                for (let l:number = j - 1; l < j + 1; l++){
                    if (imagen[k][l] !== null){
                        media += imagen[k][l];
                        counter++;
                    }
                }
            }
        suavizado[i][j] = media/counter;
        }
    }
    return suavizado;
}

console.log(mediafilter([[2, 3, 5], [3, 6, 9]]));
