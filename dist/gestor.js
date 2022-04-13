"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestor = void 0;
const playlist = require("./data/playlistdata");
const inquirer = require("inquirer");
class Gestor {
    constructor(playlist) {
        this.allPlaylist = playlist;
    }
    start() {
        console.clear();
        const questions = [{
                type: 'list',
                name: 'option',
                message: 'Bienvenido a spotyfef',
                choices: ['Elegir una playlist ya creada', 'Crear una nueva playlist', 'Borrar una playlist'],
            },
        ];
        inquirer.prompt(questions).then((answers) => {
            switch (answers['option']) {
                case 'Elegir una playlist ya creada':
                    this.playlistCheck();
                    break;
                case 'Crear una nueva playlist':
                    this.createPlaylist();
                    break;
                case 'Borrar una playlist':
                    this.erasePlaylist();
                    break;
            }
        });
    }
    playlistCheck() {
        const questions = [{
                type: 'list',
                name: 'elegir',
                message: 'Elija de las playlist existente',
                choices: this.allPlaylist,
            },
        ];
        inquirer.prompt(questions).then((answers) => {
            if (answers !== playlist.Rave) {
                playlist.Rave.showPlaylist();
            }
        });
    }
    createPlaylist() { }
    erasePlaylist() { }
}
exports.Gestor = Gestor;
const gestor = new Gestor([playlist.Rave]);
gestor.start();
