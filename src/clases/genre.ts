import {Song} from './song';
import {Artist} from './artist';
import {Group} from './group';
import {Album} from './album';

export class Genre {
    constructor(protected name:string,
                protected artists:(Artist| Group)[],
                protected songs:Song[],
                protected albums:Album[]){}
}
