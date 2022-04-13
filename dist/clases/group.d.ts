import { Artist } from './artist';
import { Genre } from './genre';
import { Album } from './album';
export declare class Group {
    protected name: string;
    protected artists: Artist[];
    protected year: number;
    protected genres: Genre[];
    protected albums: Album[];
    protected listeners: number;
    constructor(name: string, artists: Artist[], year: number, genres: Genre[], albums: Album[], listeners: number);
}
