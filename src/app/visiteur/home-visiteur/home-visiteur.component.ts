import { Component, OnInit } from '@angular/core';
import { FILMS } from 'src/app/shared/models/des-films';
import { Film } from 'src/app/shared/models/film'; 

@Component({
  selector: 'app-home-visiteur',
  templateUrl: './home-visiteur.component.html',
  styleUrls: ['./home-visiteur.component.css']
})
export class HomeVisiteurComponent implements OnInit {
  tabFilms: Film[] = FILMS;
 
  afficheDesc(i: number){
    this.tabFilms[i].descVisible=true;
    
  }
  cacherDesc(i: number){
    this.tabFilms[i].descVisible=false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
