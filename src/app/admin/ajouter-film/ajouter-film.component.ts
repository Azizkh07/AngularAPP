import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { films, FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-ajouter-film',
  templateUrl: './ajouter-film.component.html',
  styleUrls: ['./ajouter-film.component.css']
})
export class AjouterFilmComponent implements OnInit {


tabFilms: Film[] = [];
constructor(private filmsService : FilmsService, private router:Router) { }
ajouterFilm(nom : string,desc:string)
{
  this.filmsService.ajouterFilm(nom,desc);
  console.log(this.filmsService.getFilms());
  alert ('Votre film est ajouté avec succès');
  this.router.navigate(['/admin']) ;
}
getFilms(): void {
  this.tabFilms = this.filmsService.getFilms();
}
ngOnInit(): void {
  this.getFilms();
}

}