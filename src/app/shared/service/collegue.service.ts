import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CollegueService {

  //private results: Observable<Collegue[]>;
  limitSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient) {

  }

  getLimiteObservable(): Observable<number> {
    return this.limitSubject.asObservable()
  }

  updateLimit(limitValue: number) {
    this.limitSubject.next(limitValue)
  }

  listerCollegues(): Observable<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    this.limitSubject.next(10);
    return this.http.get<Collegue[]>('http://localhost:8080/collegues')

  }
  sauvegarder(newCollegue: Collegue): Observable<Collegue[]> {
    // TODO sauvegarder le nouveau collègue côté serveur
    return this.http.post<Collegue[]>('http://localhost:8080/collegues', JSON.stringify(newCollegue),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }
  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Aimer un collègue côté serveur
    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, '{"action":"aimer"}',
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Détester un collègue côté serveur
    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, '{"action":"detester"}',
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }
  findCollegueByPseudo(pseudo: string): Observable<Collegue> {
    return this.http.get<Collegue>('http://localhost:8080/collegues/' + pseudo)
  }
}
