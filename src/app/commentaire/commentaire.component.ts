import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Commentaire } from '../shared/domain/commentaire';
import { Collegue } from '../shared/domain/collegue';
import { CommentaireService } from '../shared/service/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  @Input() collegue;
  commentaire: Commentaire;
  closeResult: string;

  constructor(private modalService: NgbModal, private commentaireService: CommentaireService) { }

  ngOnInit() {
    /*this.commentaire['commentaire'] = '';
    this.commentaire.['pseudo'] = '';*/
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addCommentaire(value: string, isValid: boolean) {

    this.commentaire = { commentaire: value["commentaire"], pseudo: this.collegue["pseudo"] }
    this.commentaireService.saveComment(this.commentaire);

  }

}
