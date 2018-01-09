import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private collegues: Collegue[] = [];

  private opened: boolean;
  private successMessage: string;

  ngOnInit() {
    this.collegues.push(new Collegue("nom1", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
    this.collegues.push(new Collegue("nom2", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
    this.collegues.push(new Collegue("nom3", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
    this.collegues.push(new Collegue("nom4", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
    this.collegues.push(new Collegue("nom5", "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    this.collegues.push(new Collegue(pseudo.value, "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png"))
    this.opened = true;
    this.successMessage = "Le collègue " + pseudo.value + " a été ajouté avec succés";
    pseudo.value = "";
    imageUrl.value = "";
    return false; // pour éviter le rechargement de la page
  }

}
