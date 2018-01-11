import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-tous-les-collegues',
  templateUrl: './tous-les-collegues.component.html',
  styleUrls: ['./tous-les-collegues.component.css']
})
export class TousLesColleguesComponent implements OnInit {

  private collegues: Collegue[] = [];
  public test: string = "salut je suis le test";

  constructor(private collegueService: CollegueService) { }

  ngOnInit() {
    this.collegueService.listerCollegues().then(collegues => {
      this.collegues = collegues
    })
  }

}

