import { Song } from './song';
import { Genre } from './genre';
import { Group } from './group';
import { Album } from './album';
export declare class Artist {
    protected name: string;
    protected group: Group[];
    protected genre: Genre[];
    protected albums: Album[];
    protected songs: Song[];
    protected listeners: number;
    constructor(name: string, group: Group[], genre: Genre[], albums: Album[], songs: Song[], listeners: number);
    getListeners(): number;
    getName(): string;
    addGroup(grupo: Group): void;
    addGenre(genero: Genre): void;
    addAlbum(album: Album): void;
    addSong(song: Song): void;
    setListener(nListeners: number): void;
}
