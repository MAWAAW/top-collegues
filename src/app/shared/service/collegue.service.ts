import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CollegueService {

  limitSubject: BehaviorSubject<number> = new BehaviorSubject(null);
  collegues: BehaviorSubject<Collegue[]> = new BehaviorSubject([]);
  votreDernierAvis: Subject<string> = new Subject();

  constructor(private http: HttpClient) {
    this.refreshData();
  }

  refreshData() {
    this.http.get<Collegue[]>('http://localhost:8080/collegues')
      .subscribe(collegues => { this.collegues.next(collegues) })
  }

  listerCollegues(): Observable<Collegue[]> {
    return this.collegues.asObservable()
  }

  getLimiteObservable(): Observable<number> {
    return this.limitSubject.asObservable()
  }

  updateLimit(limitValue: number) {
    this.limitSubject.next(limitValue)
  }

  getAvis() {
    return this.votreDernierAvis.asObservable()
  }

  sauvegarder(newCollegue: Collegue): void {
    // TODO sauvegarder le nouveau collègue côté serveur
    this.http.post<Collegue[]>('http://localhost:8080/collegues', JSON.stringify(newCollegue),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .subscribe(collegues => this.collegues.next(collegues))
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Aimer un collègue côté serveur
    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, '{"action":"aimer"}',
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    ).do(collegue => this.votreDernierAvis.next("j'aime " + collegue.pseudo))
  }

  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Détester un collègue côté serveur
    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, '{"action":"detester"}',
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    ).do(collegue => this.votreDernierAvis.next("je deteste " + collegue.pseudo))
  }

  findCollegueByPseudo(pseudo: string): Observable<Collegue> {
    return this.http.get<Collegue>('http://localhost:8080/collegues/' + pseudo)
  }
}
