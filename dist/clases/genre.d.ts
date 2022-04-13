import { Song } from './song';
import { Artist } from './artist';
import { Group } from './group';
import { Album } from './album';
export declare class Genre {
    protected name: string;
    protected artists: (Artist | Group)[];
    protected songs: Song[];
    protected albums: Album[];
    constructor(name: string, artists: (Artist | Group)[], songs: Song[], albums: Album[]);
    getName(): string;
}
