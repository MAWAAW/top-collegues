import { Component, OnInit } from '@angular/core';
import { Vote } from '../shared/domain/vote';
import { VoteService } from '../shared/service/vote.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  votes: Observable<Vote[]>;

  constructor(private voteService: VoteService) {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngInit");
    this.votes = this.voteService.observableVotes;
  }

}
