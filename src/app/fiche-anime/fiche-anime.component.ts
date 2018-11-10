import { AnimeInfo } from './../anime-info';
import { Component, OnInit } from '@angular/core';
import { AnimeInfoService } from '../anime-info.service';

@Component({
  selector: 'app-fiche-anime',
  templateUrl: './fiche-anime.component.html',
  styleUrls: ['./fiche-anime.component.css']
})
export class FicheAnimeComponent implements OnInit {

  
  public data:AnimeInfo[];

  public animeData:AnimeInfoService;


  constructor(param_service:AnimeInfoService) {
    this.animeData = param_service;
   }

  ngOnInit() {
    this.animeData.getAnimeInfo()
    .subscribe(
      (param_data:AnimeInfo[]) => {
        this.data = param_data;
        console.log("OUI")
      }
    )
  }

}
