import { Injectable } from '@angular/core';
import { FILMS } from '../shared/models/des-films';
import { Film } from '../shared/models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films : Film[]=FILMS;
  numbers: number =this.films.length;

  constructor() { }
  suppFilm(index: number){

    this.films.splice(index,1);
  }

  ajouterFilm(nom : string,desc:string)
  {
    let id;
   // console.log(this.filmsService.getFilms())
    if(this.numbers==0)
    {
      id=0;
    }
    else
    {
      this.numbers=this.numbers+1;
      id=this.numbers;
    }
    let newFilm = new Film({id});
    newFilm.nom=nom;
    newFilm.description=desc;
    newFilm.descVisible=true;
    this.films.push(newFilm);
  }
  getFilms () : Film []
  {
    return this.films;
  }
}
export class films{
  static splice: any;
}
