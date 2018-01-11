import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-une-opinion',
  templateUrl: './une-opinion.component.html',
  styleUrls: ['./une-opinion.component.css']
})
export class UneOpinionComponent {

  @Output() opinion: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  jaime() {
    this.opinion.emit(true)
  }

  jedeteste() {
    this.opinion.emit(false)
  }

}
