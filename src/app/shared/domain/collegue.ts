export class Collegue {
    get nom(): string {
        return this._nom
    }
    get url(): string {
        return this._url
    }
    get score(): number {
        return this._score
    }
    set nom(_nom) {
        this._nom = _nom
    }
    set url(url) {
        this.url = url
    }
    set score(_score) {
        this._score = _score
    }
    private _score: number = 0;
    constructor(private _nom: string, private _url: string) {
    }

}
