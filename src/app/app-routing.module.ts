import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesListComponent } from './components/universities-list/universities-list.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [

  { path: 'universities', component: UniversitiesListComponent},
  { path: '', redirectTo: '/universities', pathMatch: 'full'},
  { path: 'wishlist', component: WishListComponent},
  // { path: '**', component:  NotFoundComponent }, // there is no time for this page :(

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
