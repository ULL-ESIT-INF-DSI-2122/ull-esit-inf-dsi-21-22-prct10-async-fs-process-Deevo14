import 'mocha';
import {expect} from 'chai';
import {NumericPrintableCollection} from '../src/mod-clase';

const prueba = new NumericPrintableCollection([1, 6, 8, 5, 17, 26]);

 describe('Tests de los métodos', () => {
    it('Añadir Item', () => {
        prueba.addItem(52);
        expect(prueba.getItem(6)).to.be.equal(52);
    });

    it('Borrar Item', () => {
        prueba.removeItem(6);
        expect(prueba.getItem(1)).to.be.equal(8);
    });

    it('Obtener numero de Items', () => {
        expect(prueba.getNumberOfItems()).to.be.equal(6);
    });

    it('Imprimir numeros', () => {
        expect(prueba.print()).to.be.eql('1, 8, 5, 17, 26, 52, ');
    });
});
