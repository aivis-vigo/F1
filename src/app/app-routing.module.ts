import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriverCardComponent} from "./driver-card/driver-card.component";
import {TrackCardComponent} from "./track-card/track-card.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SeasonComponent} from "./season/season.component";

const routes: Routes = [
  {path: 'season', component: SeasonComponent},
  {path: 'drivers', component: DriverCardComponent},
  {path: 'tracks', component: TrackCardComponent},
  {path: '', redirectTo: '/season', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
