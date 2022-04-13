"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = void 0;
class Genre {
    constructor(name, artists, songs, albums) {
        this.name = name;
        this.artists = artists;
        this.songs = songs;
        this.albums = albums;
    }
    getName() {
        return this.name;
    }
}
exports.Genre = Genre;
