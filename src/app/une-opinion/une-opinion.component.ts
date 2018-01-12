import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-une-opinion',
  templateUrl: './une-opinion.component.html',
  styleUrls: ['./une-opinion.component.css']
})
export class UneOpinionComponent implements OnInit {

  @Output() opinion: EventEmitter<boolean> = new EventEmitter();
  etat: boolean;

  constructor(private collegueService: CollegueService) { }

  ngOnInit() {
    this.collegueService.getStatut()
      .subscribe(statut => {
        this.etat = statut ? false : true
      })
  }

  jaime() {
    this.opinion.emit(true)
  }

  jedeteste() {
    this.opinion.emit(false)
  }

}
