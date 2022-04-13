"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
class Playlist {
    constructor(name, songs, genres) {
        this.name = name;
        this.songs = songs;
        this.genres = genres;
    }
    addSong(song) {
        this.songs.push(song);
    }
    addGenre(genero) {
        this.genres.push(genero);
    }
    showPlaylist() {
        console.log(`Name: ${this.name} Generos: ${this.genres.forEach((nombre) => {
            nombre.getName();
        })}
              Duracion: ${this.getDuration()}`);
    }
    getDuration() {
        let segundos = 0;
        this.songs.forEach((song) => {
            segundos += song.getDurationSeconds();
        });
    }
}
exports.Playlist = Playlist;
