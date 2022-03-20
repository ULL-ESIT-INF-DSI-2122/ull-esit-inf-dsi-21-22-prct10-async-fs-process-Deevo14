import 'mocha';
import {Game} from '../src/ejercicio-2/game';
import {Player} from '../src/ejercicio-2/player';


describe('Partida Conecta 4', () => {
    const Jugador1 = new Player('Davo');
    const Jugador2 = new Player('Rober');
    const Partida1 = new Game([Jugador1, Jugador2]);
    Partida1.start();
});
