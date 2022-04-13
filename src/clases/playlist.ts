import {Song} from './song';
import {Genre} from './genre';
export class Playlist {
  constructor(protected name :string, protected songs :Song[],
              protected genres :Genre[]) {}

addSong(song :Song) :void {
  this.songs.push(song);
}
addGenre(genero :Genre) :void {
  this.genres.push(genero);
}
showPlaylist() {
  console.log(`Name: ${this.name} Generos: ${this.genres.forEach((nombre) => {
    nombre.getName();
  })}
              Duracion: ${this.getDuration()}`);
}
getDuration() {
let segundos :number = 0;
this.songs.forEach((song) => {
segundos += song.getDurationSeconds();
});
}
}
