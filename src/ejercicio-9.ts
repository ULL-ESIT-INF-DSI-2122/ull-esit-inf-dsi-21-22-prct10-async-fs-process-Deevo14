type DPoint = [number, number, number, ...number[]];


export function dPointAdd(p1:DPoint, p2:DPoint):DPoint {
    const result:DPoint = [0, 0, 0];

    for (let i = 0; i < p1.length; i++){
        result[i] = p1[i] + p2[i];
    }

    return result;
}

export function dPointSub(p1:DPoint, p2:DPoint):DPoint{
    const result:DPoint = [0, 0, 0];

    for (let i = 0; i < p1.length; i++){
        result[i] = p1[i] - p2[i];
    }

    return result;
}

export function dPointMult(p1:DPoint, x:number):DPoint{
    const result:DPoint = [0, 0, 0];


    for (let i = 0; i < p1.length; i++){
        result[i] = p1[i] * x;
    }

    return result;
}


export function dPointDist(p1:DPoint, p2:DPoint):number{
    let result:number = 0;

    for (let i = 0; i < p1.length; i++){
    result += (p2[i] - p1[i]) ** 2;
    }

    return Math.sqrt(result);
}
