import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  votreDernierAvis: string = "Aucun vote";
  type: string = "secondary";

  constructor(private collegueService: CollegueService) {

  }

  ngOnInit() {
    this.collegueService.getAvis()
      .subscribe(avis => {
        this.votreDernierAvis = avis
        if (this.votreDernierAvis.includes("aime")) {
          this.type = "primary"
        }
        else if (this.votreDernierAvis.includes("deteste")) {
          this.type = "danger"
        }
      });
  }

}
