import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { CommentaireService } from '../shared/service/commentaire.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-un-collegue-detail',
  templateUrl: './un-collegue-detail.component.html',
  styleUrls: ['./un-collegue-detail.component.css']
})
export class UnCollegueDetailComponent implements OnInit {

  @Input() collegue: Collegue;
  param: string;
  commentaires: string[];

  constructor(private collegueService: CollegueService, private commentaireService: CommentaireService, private route: ActivatedRoute) {
    route.params.subscribe(params => { this.param = params['pseudo'] })

  }

  ngOnInit() {
    if (this.param != undefined) {
      this.collegueService.findCollegueByPseudo(this.param).subscribe(collegue => {
        this.collegue = collegue;
      })
    }

    this.commentaireService.getCommentsOf(this.param).subscribe(coms => this.commentaires = coms)
  }

}
