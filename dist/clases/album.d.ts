import { Artist } from './artist';
import { Group } from './group';
import { Song } from './song';
import { Genre } from './genre';
export declare class Album {
    protected name: string;
    protected creator: Artist | Group;
    protected year: number;
    protected genre: Genre[];
    protected songs: Song[];
    constructor(name: string, creator: Artist | Group, year: number, genre: Genre[], songs: Song[]);
    getName(): string;
    getCreator(): Artist | Group;
    getYear(): number;
    getGenre(): Genre[];
    getSongs(): Song[];
}
