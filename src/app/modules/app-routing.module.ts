import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { MainComponent } from '../components/main/main.component';
import { ListComponent } from '../components/list/list.component';
import { DetailsComponent } from '../components/details/details.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'list/:generoId/:generoNome', component: ListComponent},
  {path: 'movie/:movieId', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
