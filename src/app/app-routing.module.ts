import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingReposComponent } from '../app/trending-repos/trending-repos.component';

const routes: Routes = [
  { path: 'trend',  component: TrendingReposComponent },
  { path: '', redirectTo: '/trend', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
