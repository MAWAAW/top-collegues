import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-tous-les-collegues-carrousel',
  templateUrl: './tous-les-collegues-carrousel.component.html',
  styleUrls: ['./tous-les-collegues-carrousel.component.css']
})
export class TousLesColleguesCarrouselComponent implements OnInit {

  private collegues: Collegue[] = [];

  constructor(config: NgbCarouselConfig, private collegueService: CollegueService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

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
