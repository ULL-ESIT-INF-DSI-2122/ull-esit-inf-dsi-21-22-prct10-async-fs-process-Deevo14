import { Genre } from './genre';
import { Artist } from './artist';
import { Group } from './group';
export declare type durationSong = [minutes: number, seconds: number];
export declare class Song {
    protected name: string;
    protected artist: Artist[] | Group;
    protected duration: durationSong;
    protected genres: Genre[];
    protected single: boolean;
    protected repros: number;
    constructor(name: string, artist: Artist[] | Group, duration: durationSong, genres: Genre[], single: boolean, repros: number);
    getDurationSeconds(): number;
}
