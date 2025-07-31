import { Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePlayerComponent } from './single-player/single-player.component';
import { FieldsComponent } from './fields/fields.component';
import { TeamComponent } from './team/team.component';
import { PartiesComponent } from './parties/parties.component';

export const routes: Routes = [
    { path: 'players/:id', component: SinglePlayerComponent },
    { path: 'players', component: PlayerListComponent },
    { path: 'fields', component: FieldsComponent },
    { path: 'teams', component: TeamComponent },
    { path: 'parties', component: PartiesComponent },
    { path: '', component: LandingPageComponent }
];
