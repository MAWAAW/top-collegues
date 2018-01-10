import { Injectable, OnInit } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CollegueService implements OnInit {

  private results: Promise<Collegue[]>;

  constructor(private http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this.http.get<any[]>('http://localhost:8080/collegues').toPromise()

  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue[]> {
    // TODO sauvegarder le nouveau collègue côté serveur
    return this.http.post<Collegue[]>('http://localhost:8080/collegues', JSON.stringify(newCollegue),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    ).toPromise()
  }
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Aimer un collègue côté serveur
    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, '{"action":"aimer"}',
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    ).toPromise()
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Détester un collègue côté serveur
    return this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, '{"action":"detester"}',
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    ).toPromise()
  }

  ngOnInit(): void {

  }

}
