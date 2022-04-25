import {watchFile} from 'fs';
import {spawn} from 'child_process';

export class Watcher{
constructor(protected nombrefichero:string,
  protected corte:string){}

start(nombrefichero:string, corte:string){
  watchFile(this.nombrefichero, (curr, prev) => {
    console.log(`File size was ${prev.size} bytes before it was modified`);
    console.log(`Now file size is ${curr.size} bytes`);

  const cut = spawn('cut', ['-d', ',', '-f', this.corte, 'fichero.csv']);
  cut.stdout.pipe(process.stdout);
});
}
}

const prueba = new Watcher('fichero.csv', '2');
prueba.start('fichero.csv', '2');
