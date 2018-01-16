import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { UneOpinionComponent } from './une-opinion/une-opinion.component';
import { CollegueService } from './shared/service/collegue.service';
import { TousLesColleguesComponent } from './tous-les-collegues/tous-les-collegues.component';
import { TousLesColleguesTableauComponent } from './tous-les-collegues-tableau/tous-les-collegues-tableau.component';
import { TousLesColleguesCarrouselComponent } from './tous-les-collegues-carrousel/tous-les-collegues-carrousel.component';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';
import { DetectOnlineOfflineComponent } from './detect-online-offline/detect-online-offline.component';
import { HistoriqueComponent } from './historique/historique.component';
import { VoteService } from './shared/service/vote.service';
import { VoteComponent } from './vote/vote.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { CommentaireService } from './shared/service/commentaire.service';
import { UnCollegueDetailComponent } from './un-collegue-detail/un-collegue-detail.component';

const appRoutes: Routes = [
  { path: 'classique', component: TousLesColleguesComponent },
  { path: 'tableau', component: TousLesColleguesTableauComponent },
  { path: 'carrousel', component: TousLesColleguesCarrouselComponent },
  { path: 'detail/:pseudo', component: UnCollegueDetailComponent },
  { path: '**', redirectTo: 'classique' } // redirige vers la route classique par défaut
]

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    UneOpinionComponent,
    TousLesColleguesComponent,
    TousLesColleguesTableauComponent,
    TousLesColleguesCarrouselComponent,
    VotreDernierAvisComponent,
    DetectOnlineOfflineComponent,
    HistoriqueComponent,
    VoteComponent,
    CommentaireComponent,
    UnCollegueDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService, VoteService, CommentaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
