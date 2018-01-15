import { Collegue } from './collegue';

export class Vote {
    constructor(public id: number, public avis: string, public collegue: Collegue) {
    }
}