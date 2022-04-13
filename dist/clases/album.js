"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
class Album {
    constructor(name, creator, year, genre, songs) {
        this.name = name;
        this.creator = creator;
        this.year = year;
        this.genre = genre;
        this.songs = songs;
    }
    getName() {
        return this.name;
    }
    getCreator() {
        return this.creator;
    }
    getYear() {
        return this.year;
    }
    getGenre() {
        return this.genre;
    }
    getSongs() {
        return this.songs;
    }
}
exports.Album = Album;
