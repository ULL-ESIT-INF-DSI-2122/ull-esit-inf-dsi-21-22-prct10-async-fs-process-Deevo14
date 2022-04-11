import {Song} from './clases/song';
import {Artist} from './clases/artist';
import {Group} from './clases/group';
import {Album} from './clases/album';
import {Playlist} from './clases/playlist';

const inquire = require('inquirer');

export class Gestor {
  private playlist :Playlist[];

start() {
  console.clear();
  const questions = [{
    type: 'list',
    name: 'option',
    message: 'Bienvenido a spotyfef',
    choices: ['Elegir una playlist ya creada', 'Crear una nueva playlist', 'Borrar una playlist'],
  },
  ];
  inquire.prompt(questions).then((answers :string) => {
    switch (answers) {
      case 'Elegir una playlist ya creada':
        this.playlistCheck();
      case 'Crear una nueva playlist':
      this.createPlaylist();
      case 'Borrar una playlist':
      this.erasePlaylist();
    }
  });
}
playlistCheck() {
  const questions = [{
    type: 'list',
    name: 'elegir',
    message: 'Elija de las playlist existente',
    choices: this.playlist.forEach((playlist) => {
      playlist.showPlaylist();
    }),
  }];
  inquire.prompt(questions).then((answers :string) => {

  }
}
createPlaylist() {}
erasePlaylist() {}
}

