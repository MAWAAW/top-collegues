import { Injectable } from '@angular/core';
import { Vote } from '../domain/vote';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/interval';

@Injectable()
export class VoteService {

  votes: BehaviorSubject<Vote[]> = new BehaviorSubject([]);
  observableVotes = this.votes.asObservable();
  idVote: number = 0;

  constructor(private http: HttpClient) {
    this.updateHistorique();
  }

  updateHistorique() {
    Observable.interval(5000)
      .subscribe(() => this.http.get<Vote[]>('http://localhost:8080/votes?since=' /*+ Math.max(...this.votes.getValue().map(v => v.id))*/)
        .subscribe(votes => { this.votes.next(votes); })
      )

  }
}
