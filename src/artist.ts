import {Song} from './song';
import {Genre} from './genre';
import {Group} from './group';
import {Album} from './album';

export class Artist {
  constructor(protected name :string, protected group :Group[], protected genre :Genre[],
    protected albums :Album[], protected songs :Song[], protected listeners :number) {}
getName() :string{
  return this.name;
}

addGroup(grupo :Group) :void {
  this.group.push(grupo);
}
addGenre(genero :Genre) :void {
  this.genre.push(genero);
}
addAlbum(album :Album) :void {
  this.albums.push(album);
}
addSong(song :Song) :void {
  this.songs.push(song);
}
setListener(nListeners :number) :void {
  this.listeners = nListeners;
}
}
