import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeInfo } from './anime-info';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AnimeInfoService {


  private serviceAnime:HttpClient

  constructor(param_service:HttpClient) {
    this.serviceAnime = param_service;
   }


  
   public getAnimeInfo():Observable<AnimeInfo[]> {
    return this.serviceAnime.get(
      "https://api.jikan.moe/v3/search/anime?q=HunterxHunter")
      .pipe(
        map(
          (param_data:any) => {
            let results:AnimeInfo[] = param_data.results as AnimeInfo[];
            return results;
          }
        )
    );
   }
}
