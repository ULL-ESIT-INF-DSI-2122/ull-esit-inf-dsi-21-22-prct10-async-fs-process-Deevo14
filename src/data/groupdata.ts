import {Group} from '../clases/group';
import * as genre from './genredata';
import * as artist from './artistdata';
import * as album from './albumdata';

export const SuiteSoprano = new Group('Suite Soprano', [artist.JuanchoMarques, artist.SuleB], 2010, [genre.Rap], [album.Domenica], 51562);

export const Pendulum = new Group('Pendulum', [], 2002, [genre.DrumAndBass], [album.Inmersion], 23659874);

export const LinkinPark = new Group('Linkin Park', [], 2002, [genre.Rock], [album.HybridTheory], 23569862);

export const GreenDay = new Group('Green Day', [], 2002, [genre.Rock], [album.AmericanIdiot], 20142519);

export const ViperDiva = new Group('Viper Diva', [], 2002, [genre.HardTechno], [], 45679);

export const MalditaNerea = new Group('Viper Diva', [], 2002, [genre.Pop], [], 895794);
