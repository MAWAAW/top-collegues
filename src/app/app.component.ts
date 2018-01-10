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

    /*this.collegues.push(new Collegue("nom1", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
    this.collegues.push(new Collegue("nom2", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
    this.collegues.push(new Collegue("nom3", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
    this.collegues.push(new Collegue("nom4", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
    this.collegues.push(new Collegue("nom5", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))*/
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {

    this.collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value)).then(collegues => {
      this.collegues = collegues
    });

    //this.collegues.push(new Collegue(pseudo.value, imageUrl.value))
    this.opened = true;
    this.successMessage = "Le collègue " + pseudo.value + " a été ajouté avec succés";
    pseudo.value = "";
    imageUrl.value = "";
    return false; // pour éviter le rechargement de la page
  }

}
