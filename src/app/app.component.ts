import { Component, OnInit, } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  collegues: Collegue[] = [];
  opened: boolean;
  successMessage: string;
  etat: boolean;

  constructor(private collegueService: CollegueService) {
    this.collegueService.updateLimit(100);
  }

  ngOnInit() {
    this.collegueService.listerCollegues().subscribe(collegues => {
      this.collegues = collegues
    })

    this.collegueService.getStatut()
      .subscribe(statut => {
        this.etat = statut ? false : true
      })

  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {

    if (imageUrl.value === "") {
      this.collegueService.sauvegarder(new Collegue(pseudo.value));
    }
    else {
      this.collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value));
    }
    this.opened = true;
    this.successMessage = "Le collègue " + pseudo.value + " a été ajouté avec succés";
    pseudo.value = "";
    imageUrl.value = "";
    return false; // pour éviter le rechargement de la page
  }

  updateLimit(limit: HTMLInputElement) {
    if (limit.value === "") {
      this.collegueService.updateLimit(100);
    }
    else {
      console.log("this.collegueService.updateLimit(Number(limit.value)):" + limit.value)
      this.collegueService.updateLimit(Number(limit.value));
    }

  }

  filterByPseudo(pseudoFilter: HTMLInputElement) {
    this.collegueService.filterByPseudo(String(pseudoFilter.value));
  }

}
