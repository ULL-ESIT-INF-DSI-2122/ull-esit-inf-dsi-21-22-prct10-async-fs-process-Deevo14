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
}
