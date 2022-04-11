import {Genre} from './genre';
import {Artist} from './artist';
import {Group} from './group';
export type durationSong = [minutes:number, seconds:number];

export class Song {
    constructor(protected name:string,
                protected artist:Artist[] | Group,
                protected duration:durationSong,
                protected genres:Genre[],
                protected single:boolean,
                protected repros:number ){}
}

