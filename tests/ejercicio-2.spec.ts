import 'mocha';
import {expect} from 'chai';
import {Game} from '../src/ejercicio-2/game';
import {Player} from '../src/ejercicio-2/player';
import {Map} from '../src/ejercicio-2/map';

describe('Comprobaciones Mapa', () => {
    const tablero = new Map;

    it('Insertar ficha hasta que no haya espacacio en la columna', () => {
        expect(tablero.insertFicha(1, 1)).to.be.equal(true);
        expect(tablero.insertFicha(1, 1)).to.be.equal(true);
        expect(tablero.insertFicha(1, 1)).to.be.equal(true);
        expect(tablero.insertFicha(1, 1)).to.be.equal(true);
        expect(tablero.insertFicha(1, 1)).to.be.equal(true);
        expect(tablero.insertFicha(1, 1)).to.be.equal(true);
        expect(tablero.insertFicha(1, 1)).to.be.equal(false);
    });
    it('Comprobar si hay 4 fichas seguidas', () => {
        tablero.insertFicha(2, 1);
        tablero.insertFicha(3, 1);
        tablero.insertFicha(4, 1);
        tablero.insertFicha(2, 1);
        tablero.insertFicha(3, 1);
        tablero.insertFicha(3, 1);
        tablero.insertFicha(4, 1);
        tablero.insertFicha(4, 1);
        tablero.insertFicha(4, 1);
        expect(tablero.checkHorizontal('Roja')).to.be.equal(true);
        expect(tablero.checkVertical('Roja')).to.be.equal(true);
        expect(tablero.checkDiagonal('Roja')).to.be.equal(true);
    });
    it('Comprobar si el primer jugador ha ganado', () => {
        expect(tablero.checkWin('Roja')).to.be.equal(true);
    });
});

describe('Partida Conecta 4', () => {
    const Jugador1 = new Player('David');
    const Jugador2 = new Player('Roberto');
    const Partida1 = new Game([Jugador1, Jugador2]);

    Partida1.start();
});
