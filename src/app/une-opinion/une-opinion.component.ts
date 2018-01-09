import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-une-opinion',
  templateUrl: './une-opinion.component.html',
  styleUrls: ['./une-opinion.component.css']
})
export class UneOpinionComponent implements OnInit {

  @Output() opinion: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  jaime() {
    this.opinion.emit(true)
  }

  jedeteste() {
    this.opinion.emit(false)
  }

}
