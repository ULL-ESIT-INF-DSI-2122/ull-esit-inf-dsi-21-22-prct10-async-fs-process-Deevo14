"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
class Song {
    constructor(name, artist, duration, genres, single, repros) {
        this.name = name;
        this.artist = artist;
        this.duration = duration;
        this.genres = genres;
        this.single = single;
        this.repros = repros;
    }
    getDurationSeconds() {
        const segundos = (this.duration[0] * 60) + this.duration[1];
        return segundos;
    }
}
exports.Song = Song;
