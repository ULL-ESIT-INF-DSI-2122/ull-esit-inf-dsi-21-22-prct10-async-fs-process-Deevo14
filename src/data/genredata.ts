import {Genre} from '../clases/genre';
import * as artist from './artistdata';
import * as song from './songsdata';
import * as album from './albumdata';
import * as group from './groupdata';

export const Frenchcore:Genre = new Genre('Frenchcore', [artist.Sefa, artist.Billx, artist.DrPeacock, artist.EvilActivities],
[song.Oko, song.Tourdion, song.Keelhauled, song.Sunrise, song.NobodySaidItWasEasy], [album.Klaagzang]);

export const Rap:Genre = new Genre('Rap', [group.SuiteSoprano, artist.HardGZ], [song.Lunedi, song.Internacional, song.SaborANada,
song.Love, song.DosMilClavos], [album.Domenica]);

export const Reggaeton:Genre = new Genre('Reggaeton', [artist.Feid], [song.ElPadrino, song.SiTuSupieras,
song.Fumeteo, song.AmorDeMiVida, song.Vacaxiones, song.Monastery], [album.InterShibuya]);

export const Hardstyle:Genre = new Genre('Hardstyle', [artist.PhutureNoize], [song.ANewDay, song.EdgeOfGlory, song.Fire, song.OneTribe,
song.Masquerade], [album.BlackMirrorSociety]);

export const DrumAndBass:Genre = new Genre('Drum and Bass', [group.Pendulum], [song.Watercolour, song.Crush, song.TheIsland,
song.Witchcraft, song.SetMeOnFire], [album.Inmersion]);

export const Trap:Genre = new Genre('Trap', [artist.PauloLondra, artist.Duki], [song.Chance, song.PlanA, song.SiTeSentisSola, song.Goteo,
song.Midtown, song.Rockstar], []);

export const Rock:Genre = new Genre('Rock', [group.LinkinPark, group.GreenDay], [song.Crawling, song.InTheEnd, song.OneStepCloser, song.AmericanIdiot,
song.WakeMeUpWhenSeptemberEnds], [album.HybridTheory, album.AmericanIdiot]);

export const HardTechno:Genre = new Genre('HardTechno', [group.ViperDiva], [song.BornToBeSlytherin, song.HoldMeBack, song.Alice], []);

export const Pop:Genre = new Genre('Pop', [group.MalditaNerea, artist.DavidOtero], [song.Facil, song.ElUltimoDia, song.BuscandoElSol, song.CastilloDeArena],
[]);

export const Bachata:Genre = new Genre('Bachata', [artist.RomeoSantos], [song.Imitadora, song.EresMia, song.Inocente, song.Necio, song.Odio, song.PropuestaIndecente],
[album.FormulaDos]);
