import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-detect-online-offline',
  templateUrl: './detect-online-offline.component.html',
  styleUrls: ['./detect-online-offline.component.css']
})
export class DetectOnlineOfflineComponent implements OnInit {

  statut: string = window.navigator.onLine ? "Online" : "Offline";
  color: string = window.navigator.onLine ? "badge-success" : "badge-danger";
  etat: boolean = window.navigator.onLine ? false : true;

  constructor(private collegueService: CollegueService) { }

  ngOnInit() {
    this.collegueService.getStatut()
      .subscribe(statut => {
        this.statut = statut ? "Online" : "Offline"
        this.color = statut ? "badge-success" : "badge-danger"
        this.etat = statut ? false : true
      })
  }

}
