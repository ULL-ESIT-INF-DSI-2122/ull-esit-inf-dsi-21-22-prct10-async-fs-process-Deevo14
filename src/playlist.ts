import {Song} from './song';
import {Genre} from './genre';
export type playlistDuration = [hours :number, minutes :number, seconds :number]
export class Playlist {
  constructor(protected name :string, protected songs :Song[],
     protected duration :playlistDuration, protected genres :Genre[]) {}
addSong(song :Song) :void {
  this.songs.push(song);
}
addGenre(genero :Genre) :void {
  this.genres.push(genero);
}
}
