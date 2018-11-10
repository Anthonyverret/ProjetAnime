import { AnimeInfo } from './anime-info';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triAnime'
})
export class TriAnimePipe implements PipeTransform {

  transform(anime:AnimeInfo[] , param_anime:string = ""): AnimeInfo[] {

    let results:AnimeInfo[] = [];

    for(let i:number = 0; i < anime.length ; i++){
      if(anime[i] !== undefined && anime[i].title.toLowerCase().indexOf(param_anime.toLowerCase()) > -1 ){
        results.push(anime[i]);
      }
    }

    return results;
  }

}
