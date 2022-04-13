/** import {Song} from './clases/song';
import {Artist} from './clases/artist';
import {Group} from './clases/group';
import {Album} from './clases/album'; */
import { Playlist } from './clases/playlist';
export declare class Gestor {
    protected allPlaylist: Playlist[];
    constructor(playlist: Playlist[]);
    start(): void;
    playlistCheck(): void;
    createPlaylist(): void;
    erasePlaylist(): void;
}
