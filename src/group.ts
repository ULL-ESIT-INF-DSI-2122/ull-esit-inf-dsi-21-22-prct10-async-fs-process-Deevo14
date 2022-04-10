import {Artist} from './artist';
import {Genre} from './genre';
import {Album} from './album';

export class Group {
    constructor(protected name:string,
        protected artists:Artist[],
        protected year:number,
        protected genres:Genre[],
        protected albums:Album[],
        protected listeners:number){}
}
