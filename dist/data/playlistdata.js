"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rave = void 0;
const playlist_1 = require("../clases/playlist");
const song = require("./songsdata");
const genre = require("./genredata");
exports.Rave = new playlist_1.Playlist('Rave', [song.Oko, song.Tourdion, song.Keelhauled, song.Sunrise, song.NobodySaidItWasEasy,
    song.ANewDay, song.EdgeOfGlory, song.Fire, song.OneTribe, song.Masquerade, song.Watercolour, song.Crush, song.TheIsland, song.Witchcraft,
    song.SetMeOnFire, song.BornToBeSlytherin, song.HoldMeBack, song.Alice], [genre.Frenchcore, genre.DrumAndBass, genre.HardTechno, genre.Hardstyle]);
