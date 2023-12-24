import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';

const routes: Routes = [{ path: '', component: AdminComponent ,
children: [
  {path: 'lister-films', component: ListerFilmsComponent },
  {path: 'ajouter-films', component: AjouterFilmComponent },
  {path:'' ,redirectTo:'lister-films', pathMatch: 'full'}
  ] ,
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
