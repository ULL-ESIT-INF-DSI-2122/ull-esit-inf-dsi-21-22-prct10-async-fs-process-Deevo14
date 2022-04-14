/** import {Song} from './clases/song';
import {Artist} from './clases/artist';
import {Group} from './clases/group';
import {Album} from './clases/album'; */
import {Playlist} from './clases/playlist';
import * as playlist from './data/playlistdata';
import * as inquirer from 'inquirer';

export class Gestor {
protected allPlaylist :Playlist[];
constructor(playlist :Playlist[]) {
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
  inquirer.prompt(questions).then((answers:Playlist) => {
    playlist.Rave.showPlaylist();
  });
}
createPlaylist() {}
erasePlaylist() {}
}

const gestor :Gestor = new Gestor([playlist.Rave]);

gestor.start();
