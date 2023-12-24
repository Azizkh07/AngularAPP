import { Component, OnInit } from '@angular/core';
import { films, FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-lister-films',
  templateUrl: './lister-films.component.html',
  styleUrls: ['./lister-films.component.css']
})
export class ListerFilmsComponent implements OnInit {

  tabFilms: Film[] = [];
  constructor(private filmsService : FilmsService) { }
//   ajouterFilm(nom : string,desc:string)
// {
//   this.filmsService.ajouterFilm(nom,desc);
//   console.log(this.filmsService.getFilms())
//   this.getFilms();
// }
  suppFilm(index: number){
    this.filmsService.suppFilm(index);
    console.log(this.filmsService.getFilms())
    

  }

  ngOnInit(): void {
    this.tabFilms=this.filmsService.getFilms();
    console.log(this.tabFilms);
  }

}
