import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router'; 
import { ErreurComponent } from './erreur/erreur.component'; 


const routes: Routes = [ 
  
  {path:'',redirectTo:'visiteur', pathMatch: 'full' },
  
  
  { path: 'visiteur', loadChildren: () => import('./visiteur/visiteur.module').then(m => m.VisiteurModule) }, 
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  
  { path: 'erreur', loadChildren: () => import('./erreur/erreur.module').then(m => m.ErreurModule) }
 , {path : '**', component : ErreurComponent} ];

@NgModule({   
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
    } )], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
