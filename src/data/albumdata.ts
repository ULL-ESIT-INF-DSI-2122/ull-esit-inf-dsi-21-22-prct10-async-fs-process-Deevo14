import {Album} from '../clases/album';
import * as genre from './genredata';
import * as song from './songsdata';
import * as artist from './artistdata';

export const Klaagzang = new Album('Klaagzang', artist.Sefa, 2022, [genre.Frenchcore], [song.Oko, song.Tourdion, song.Keelhauled, song.Sunrise, song.NobodySaidItWasEasy]);
