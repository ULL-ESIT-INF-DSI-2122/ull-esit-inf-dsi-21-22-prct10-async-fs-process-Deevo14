type Point = [number, number];

export function pointAdd(p1:Point, p2:Point):Point {
    const result:Point = [0, 0];

    result[0] = p1[0] + p2[0];
    result[1] = p1[1] + p2[1];

    return result;
}

export function pointSub(p1:Point, p2:Point):Point{
    const result:Point = [0, 0];

    result[0] = p1[0] - p2[0];
    result[1] = p1[1] - p2[1];

    return result;
}

export function pointMult(p1:Point, x:number):Point{
    const result:Point = [0, 0];

    result[0] = p1[0] * x;
    result[1] = p1[1] * x;

    return result;
}

export function pointDist(p1:Point, p2:Point):number{
    let result:number = 0;

    result = Math.sqrt(Math.pow((p2[0]-p1[0]), 2) + Math.pow((p2[1]-p1[1]), 2));

    return result;
}

