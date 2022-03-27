import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../../src/ejercicio-3/cifrado';

const cifrado1 = new Cifrado('holaestoesunaprueba', 'clave', 'cifrar', 'castellano');
const cifrado2 = new Cifrado('kamwjvfpaxxybmwxpcw', 'clave', 'descifrar', 'castellano');
const cifrado3 = new Cifrado('abcde', 'b', 'sumar', 'castellano');
const cifrado4 = new Cifrado('12345', '2', 'cifrar', '1234567890');

describe('Tests de Cifrado', () => {
    it('codificacion', () => {
        expect(cifrado1.start('cifrar', 'castellano')).to.be.equal('kamwjvfpaxxybmwxpcw');
    }).timeout(10000);
    it('decodificacion', () => {
        expect(cifrado2.start('descifrar', 'castellano')).to.be.equal('holaestoesunaprueba');
    }).timeout(10000);
    it('Opcion incorrecta', () => {
        expect(cifrado3.start('sumar', 'castellano')).to.be.equal('La opción elegida es incorrecta');
    });
    it('Alfabeto nuevo', () => {
        expect(cifrado4.start('cifrar', '1234567890')).to.be.equal('34567');
    }).timeout(10000);
});
