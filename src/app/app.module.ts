import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverCardComponent } from './driver-card/driver-card.component';
import {NgOptimizedImage} from "@angular/common";
import { TrackCardComponent } from './track-card/track-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { SeasonComponent } from './season/season.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverCardComponent,
    TrackCardComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    DriverDetailsComponent,
    SeasonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
