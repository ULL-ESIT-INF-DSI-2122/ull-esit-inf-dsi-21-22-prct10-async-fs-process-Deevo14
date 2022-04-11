import {Genre} from '../clases/genre';
import * as artist from './artistdata';
import * as song from './songsdata';
import * as album from './albumdata';

export const Frenchcore:Genre = new Genre('Frenchcore', [artist.Sefa, artist.Billx, artist.DrPeacock, artist.EvilActivities],
[song.Oko, song.Tourdion, song.Keelhauled, song.Sunrise, song.NobodySaidItWasEasy], [album.Klaagzang]);
