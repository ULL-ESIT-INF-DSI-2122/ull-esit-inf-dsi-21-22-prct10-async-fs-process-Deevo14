import {Artist} from '../clases/artist';
import * as genre from './genredata';
import * as song from './songsdata';
import * as album from './albumdata';

export const Sefa:Artist = new Artist('Sefa', [], [genre.Frenchcore], [album.Klaagzang], [song.Oko, song.Tourdion, song.Keelhauled, song.Sunrise, song.NobodySaidItWasEasy], 1362053);
export const DrPeacock:Artist = new Artist('Dr. Peacock', [], [genre.Frenchcore], [], [song.Keelhauled], 1509552);
export const Billx:Artist = new Artist('Billx', [], [genre.Frenchcore], [], [song.Oko], 586122);
export const EvilActivities:Artist = new Artist('Evil Activities', [], [genre.Frenchcore], [], [song.NobodySaidItWasEasy], 433015);
