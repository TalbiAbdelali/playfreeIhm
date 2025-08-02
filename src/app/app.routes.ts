import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePlayerComponent } from './single-player/single-player.component';
import { FieldsComponent } from './fields/fields.component';
import { TeamComponent } from './team/team.component';
import { PartiesComponent } from './parties/parties.component';
import { TournamentComponent } from './tournament/tournament.component';

export const routes: Routes = [
    { path: 'players/:id', component: SinglePlayerComponent },
    { path: 'players', component: PlayerListComponent },
    { path: 'fields', component: FieldsComponent },
    { path: 'teams', component: TeamComponent },
    { path: 'parties', component: PartiesComponent },
    { path: 'tournaments', component: TournamentComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: LandingPageComponent }
];
