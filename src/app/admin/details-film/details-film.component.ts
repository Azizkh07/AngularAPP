import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {

  nomFilm='Afficher le nom du film';
  descFilm='Afficher la discription du film';
  constructor() { }

  ngOnInit(): void {
  }

}
