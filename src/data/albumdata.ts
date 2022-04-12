import {Album} from '../clases/album';
import * as genre from './genredata';
import * as song from './songsdata';
import * as artist from './artistdata';
import * as group from './groupdata';

export const Klaagzang:Album = new Album('Klaagzang', artist.Sefa, 2022, [genre.Frenchcore], [song.Oko, song.Tourdion, song.Keelhauled, song.Sunrise, song.NobodySaidItWasEasy]);

export const Domenica:Album = new Album('Domenica', group.SuiteSoprano, 2014, [genre.Rap], [song.Lunedi, song.Internacional, song.SaborANada]);

export const InterShibuya:Album = new Album('Inter Shibuya', artist.Feid, 2021, [genre.Reggaeton], [song.ElPadrino, song.SiTuSupieras, song.Fumeteo, song.AmorDeMiVida, song.Vacaxiones, song.Monastery]);

export const BlackMirrorSociety:Album = new Album('Black Mirror Society', artist.PhutureNoize, 2018, [genre.Hardstyle], [song.ANewDay, song.EdgeOfGlory]);

export const Inmersion:Album = new Album('Inmersion', group.Pendulum, 2010, [genre.DrumAndBass], [song.Watercolour, song.Crush, song.TheIsland, song.Witchcraft, song.SetMeOnFire]);

export const HybridTheory:Album = new Album('Hybrid Theory', group.LinkinPark, 2000, [genre.Rock], [song.Crawling, song.InTheEnd, song.OneStepCloser]);

export const AmericanIdiot:Album = new Album('American Idiot', group.GreenDay, 2004, [genre.Rock], [song.AmericanIdiot, song.WakeMeUpWhenSeptemberEnds]);

export const FormulaDos:Album = new Album('Formula Vol.2', artist.RomeoSantos, 2014, [genre.Bachata], [song.Imitadora, song.EresMia, song.Inocente, song.Necio, song.Odio, song.PropuestaIndecente]);

