import { AnimeInfoService } from './anime-info.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FicheAnimeComponent } from './fiche-anime/fiche-anime.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FicheAnimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AnimeInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
