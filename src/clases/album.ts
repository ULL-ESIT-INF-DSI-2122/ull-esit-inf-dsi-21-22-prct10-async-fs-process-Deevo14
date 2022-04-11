import {Artist} from './artist';
import {Group} from './group';
import {Song} from './song';
import {Genre} from './genre';

export class Album {
    constructor(protected name:string,
                protected creator:Artist | Group,
                protected year:number,
                protected genre:Genre[],
                protected songs:Song[]){}

    getName():string{
        return this.name;
    }
    getCreator():Artist | Group{
        return this.creator;
    }
    getYear():number{
        return this.year;
    }
    getGenre():Genre[]{
        return this.genre;
    }
    getSongs():Song[]{
        return this.songs;
    }
    
}
