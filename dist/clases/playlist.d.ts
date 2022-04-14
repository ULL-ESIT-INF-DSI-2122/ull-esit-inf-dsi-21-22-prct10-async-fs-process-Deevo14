import { Song } from './song';
import { Genre } from './genre';
export declare class Playlist {
    protected name: string;
    protected songs: Song[];
    protected genres: Genre[];
    constructor(name: string, songs: Song[], genres: Genre[]);
    addSong(song: Song): void;
    addGenre(genero: Genre): void;
    getName(): string;
    showPlaylist(): void;
    getDuration(): number;
}
