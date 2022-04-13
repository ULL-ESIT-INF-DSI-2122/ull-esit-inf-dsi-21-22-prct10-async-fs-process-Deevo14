"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bachata = exports.Pop = exports.HardTechno = exports.Rock = exports.Trap = exports.DrumAndBass = exports.Hardstyle = exports.Reggaeton = exports.Rap = exports.Frenchcore = void 0;
const genre_1 = require("../clases/genre");
const artist = require("./artistdata");
const song = require("./songsdata");
const album = require("./albumdata");
const group = require("./groupdata");
exports.Frenchcore = new genre_1.Genre('Frenchcore', [artist.Sefa, artist.Billx, artist.DrPeacock, artist.EvilActivities], [song.Oko, song.Tourdion, song.Keelhauled, song.Sunrise, song.NobodySaidItWasEasy], [album.Klaagzang]);
exports.Rap = new genre_1.Genre('Rap', [group.SuiteSoprano, artist.HardGZ], [song.Lunedi, song.Internacional, song.SaborANada,
    song.Love, song.DosMilClavos], [album.Domenica]);
exports.Reggaeton = new genre_1.Genre('Reggaeton', [artist.Feid], [song.ElPadrino, song.SiTuSupieras,
    song.Fumeteo, song.AmorDeMiVida, song.Vacaxiones, song.Monastery], [album.InterShibuya]);
exports.Hardstyle = new genre_1.Genre('Hardstyle', [artist.PhutureNoize], [song.ANewDay, song.EdgeOfGlory, song.Fire, song.OneTribe,
    song.Masquerade], [album.BlackMirrorSociety]);
exports.DrumAndBass = new genre_1.Genre('Drum and Bass', [group.Pendulum], [song.Watercolour, song.Crush, song.TheIsland,
    song.Witchcraft, song.SetMeOnFire], [album.Inmersion]);
exports.Trap = new genre_1.Genre('Trap', [artist.PauloLondra, artist.Duki], [song.Chance, song.PlanA, song.SiTeSentisSola, song.Goteo,
    song.Midtown, song.Rockstar], []);
exports.Rock = new genre_1.Genre('Rock', [group.LinkinPark, group.GreenDay], [song.Crawling, song.InTheEnd, song.OneStepCloser, song.AmericanIdiot,
    song.WakeMeUpWhenSeptemberEnds], [album.HybridTheory, album.AmericanIdiot]);
exports.HardTechno = new genre_1.Genre('HardTechno', [group.ViperDiva], [song.BornToBeSlytherin, song.HoldMeBack, song.Alice], []);
exports.Pop = new genre_1.Genre('Pop', [group.MalditaNerea, artist.DavidOtero], [song.Facil, song.ElUltimoDia, song.BuscandoElSol, song.CastilloDeArena], []);
exports.Bachata = new genre_1.Genre('Bachata', [artist.RomeoSantos], [song.Imitadora, song.EresMia, song.Inocente, song.Necio, song.Odio, song.PropuestaIndecente], [album.FormulaDos]);
