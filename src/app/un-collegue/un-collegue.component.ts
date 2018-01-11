import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  param: string;

  constructor(private collegueService: CollegueService, private route: ActivatedRoute) {
    // recuperation du parametre pseudo
    route.params.subscribe(params => { this.param = params['pseudo'] })
  }

  ngOnInit() {
    if (this.param != undefined) {
      this.collegueService.findCollegueByPseudo(this.param).then(collegue => {
        this.collegue = collegue;
      })
    }
  }

  setOpinion(opinion) {
    if (opinion) {
      this.collegueService.aimerUnCollegue(this.collegue).then(collegue => {
        this.collegue.score = collegue.score;
      })
    }
    else {
      this.collegueService.detesterUnCollegue(this.collegue).then(collegue => {
        this.collegue.score = collegue.score;
      })
    }
  }

}
