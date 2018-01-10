import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { collectExternalReferences } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue: Collegue;

  ngOnInit() { }

  constructor(private collegueService: CollegueService) { }

  setOpinion(opinion) {
    if (opinion) {
      //this.collegue.score += 10;
      this.collegueService.aimerUnCollegue(this.collegue).then(collegue => {
        this.collegue.score = collegue.score;
      })
    }
    else {
      //this.collegue.score -= 5;
      this.collegueService.detesterUnCollegue(this.collegue).then(collegue => {
        this.collegue.score = collegue.score;
      })
    }
  }

}
