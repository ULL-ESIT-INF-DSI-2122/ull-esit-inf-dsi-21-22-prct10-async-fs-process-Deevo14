"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watcher = void 0;
const fs_1 = require("fs");
class Watcher {
    constructor(nombrefichero, corte) {
        this.nombrefichero = nombrefichero;
        this.corte = corte;
    }
    start(nombrefichero, corte) {
        (0, fs_1.watchFile)(this.nombrefichero, (curr, prev) => {
            console.log(`File size was ${prev.size} bytes before it was modified`);
            console.log(`Now file size is ${curr.size} bytes`);
            //const cut = spawn('cut', ['-d', ',', '-f', this.corte, 'fichero.csv']);
            //cut.stdout.pipe(process.stdout);
        });
    }
}
exports.Watcher = Watcher;
const prueba = new Watcher('fichero.csv', '2');
prueba.start('fichero.csv', '2');
