import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-tous-les-collegues-tableau',
  templateUrl: './tous-les-collegues-tableau.component.html',
  styleUrls: ['./tous-les-collegues-tableau.component.css']
})
export class TousLesColleguesTableauComponent implements OnInit {

  private collegues: Collegue[] = [];

  constructor(private collegueService: CollegueService) { }

  ngOnInit() {
    this.collegueService.listerCollegues().then(collegues => {
      this.collegues = collegues
    })
  }

  setOpinion(opinion, collegue) {
    if (opinion) {
      this.collegueService.aimerUnCollegue(collegue)
        .then(collegueQueJaime => this.collegues.filter(c => c.pseudo == collegueQueJaime.pseudo)[0].score = collegueQueJaime.score)
    }
    else {
      this.collegueService.detesterUnCollegue(collegue)
        .then(collegueQueJaimePas => this.collegues.filter(c => c.pseudo == collegueQueJaimePas.pseudo)[0].score = collegueQueJaimePas.score)
    }
  }

}
