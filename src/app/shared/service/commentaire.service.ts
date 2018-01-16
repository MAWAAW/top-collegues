import { Injectable } from '@angular/core';
import { Vote } from '../domain/vote';
import { Collegue } from '../domain/collegue';
import { Commentaire } from '../domain/commentaire';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/interval';


@Injectable()
export class CommentaireService {

  commentaires: BehaviorSubject<Commentaire[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  saveComment(commentaire: Commentaire) {
    console.log("saveComment ==> " + commentaire["commentaire"] + ", " + commentaire["pseudo"])
    this.http.post<Commentaire[]>('http://localhost:8080/commentaires', JSON.stringify(commentaire),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .subscribe(commentaires => this.commentaires.next(commentaires))
  }

  getCommentsOf(pseudo: string): Observable<string[]> {
    console.log("pseudo ==> " + pseudo)
    return this.http.get<Commentaire[]>("http://localhost:8080/commentaires/" + pseudo).map(
      coms => coms.map(com => com.commentaire)
    )
  }

}
