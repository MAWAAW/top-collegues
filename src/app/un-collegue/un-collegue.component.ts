import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { CommentaireService } from '../shared/service/commentaire.service';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue: Collegue;

  constructor(private collegueService: CollegueService, private commentaireService: CommentaireService) {
  }

  ngOnInit() {
  }

  setOpinion(opinion) {
    if (opinion) {
      this.collegueService.aimerUnCollegue(this.collegue).subscribe(collegue => {
        this.collegue.score = collegue.score;
      })
    }
    else {
      this.collegueService.detesterUnCollegue(this.collegue).subscribe(collegue => {
        this.collegue.score = collegue.score;
      })
    }
  }

}
