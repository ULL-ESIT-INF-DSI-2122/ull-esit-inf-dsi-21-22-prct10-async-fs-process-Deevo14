"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
class Artist {
    constructor(name, group, genre, albums, songs, listeners) {
        this.name = name;
        this.group = group;
        this.genre = genre;
        this.albums = albums;
        this.songs = songs;
        this.listeners = listeners;
    }
    getListeners() {
        return this.listeners;
    }
    getName() {
        return this.name;
    }
    addGroup(grupo) {
        this.group.push(grupo);
    }
    addGenre(genero) {
        this.genre.push(genero);
    }
    addAlbum(album) {
        this.albums.push(album);
    }
    addSong(song) {
        this.songs.push(song);
    }
    setListener(nListeners) {
        this.listeners = nListeners;
    }
}
exports.Artist = Artist;
