import {Artist} from '../clases/artist';
import * as genre from './genredata';
import * as song from './songsdata';
import * as album from './albumdata';
import * as group from './groupdata';

export const Sefa:Artist = new Artist('Sefa', [], [genre.Frenchcore], [album.Klaagzang], [song.Oko, song.Tourdion, song.Keelhauled, song.Sunrise, song.NobodySaidItWasEasy], 1362053);
export const DrPeacock:Artist = new Artist('Dr. Peacock', [], [genre.Frenchcore], [], [song.Keelhauled], 1509552);
export const Billx:Artist = new Artist('Billx', [], [genre.Frenchcore], [], [song.Oko], 586122);
export const EvilActivities:Artist = new Artist('Evil Activities', [], [genre.Frenchcore], [], [song.NobodySaidItWasEasy], 433015);

export const JuanchoMarques:Artist = new Artist('Juancho Marques', [group.SuiteSoprano], [genre.Rap], [album.Domenica], [song.Lunedi, song.Internacional, song.SaborANada], 578653);
export const SuleB:Artist = new Artist('Sule B', [group.SuiteSoprano], [genre.Rap], [album.Domenica], [song.Lunedi, song.Internacional, song.SaborANada], 116365);

export const HardGZ:Artist = new Artist('Hard GZ', [], [genre.Rap], [], [song.Love, song.DosMilClavos], 653597);

export const Feid:Artist = new Artist('Feid', [], [genre.Reggaeton], [album.InterShibuya], [song.ElPadrino, song.SiTuSupieras, song.Fumeteo, song.AmorDeMiVida, song.Vacaxiones, song.Monastery], 149563987);

export const PhutureNoize:Artist = new Artist('Phuture Noize', [], [genre.Hardstyle], [album.BlackMirrorSociety], [song.ANewDay, song.EdgeOfGlory, song.Fire, song.OneTribe, song.Masquerade], 657656);

export const PauloLondra:Artist = new Artist('Paulo Londra', [], [genre.Trap], [], [song.Chance, song.PlanA], 19475599);

export const Duki:Artist = new Artist('Duki', [], [genre.Trap], [], [song.SiTeSentisSola, song.Goteo, song.Midtown, song.Rockstar], 163592541);

export const DavidOtero:Artist = new Artist('David Otero', [], [genre.Pop], [], [song.BuscandoElSol, song.CastilloDeArena], 1905858);

export const RomeoSantos:Artist = new Artist('Romeo Santos', [], [genre.Bachata], [album.FormulaDos], [song.Imitadora, song.EresMia, song.Inocente, song.Necio, song.Odio, song.PropuestaIndecente], 15635987);

