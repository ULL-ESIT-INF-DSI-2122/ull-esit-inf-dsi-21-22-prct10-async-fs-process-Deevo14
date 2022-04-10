import {Genre} from './genre';
import {Artist} from './artist';
export type durationSong = [minutes:number, seconds:number];

export class Song {
    constructor(protected name:string,
                protected artist:Artist,
                protected duration:durationSong,
                protected genres:Genre[],
                protected single:boolean,
                protected repros:number ){}
}

