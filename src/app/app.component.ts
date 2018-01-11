import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private collegues: Collegue[] = [];
  private opened: boolean;
  private successMessage: string;

  constructor(private collegueService: CollegueService) { }

  ngOnInit() {
    this.collegueService.listerCollegues().then(collegues => {
      this.collegues = collegues
    })
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {

    if (imageUrl.value === "") {
      this.collegueService.sauvegarder(new Collegue(pseudo.value)).then(collegues => {
        this.collegues = collegues
      });
    }
    else {
      this.collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value)).then(collegues => {
        this.collegues = collegues
      });
    }
    this.opened = true;
    this.successMessage = "Le collègue " + pseudo.value + " a été ajouté avec succés";
    pseudo.value = "";
    imageUrl.value = "";
    return false; // pour éviter le rechargement de la page
  }

  onChange(limit: HTMLInputElement) {
    console.log("limit: " + limit.value)
  }

}
