import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Commentaire } from '../shared/domain/commentaire';
import { CommentaireService } from '../shared/service/commentaire.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  @Input() collegue;
  commentaire: Commentaire;
  closer: NgbModalRef

  constructor(private modalService: NgbModal, private commentaireService: CommentaireService) { }

  ngOnInit() {
    this.commentaire = { commentaire: '', pseudo: this.collegue["pseudo"] }
  }

  open(content) {
    this.closer = this.modalService.open(content);
  }

  addCommentaire(value: string, isValid: boolean) {
    this.commentaire = { commentaire: value["commentaire"], pseudo: this.collegue["pseudo"] }
    this.commentaireService.saveComment(this.commentaire);
    this.commentaire = { commentaire: '', pseudo: this.collegue["pseudo"] }
    this.closer.close();
  }

}
