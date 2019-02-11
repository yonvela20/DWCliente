import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "home", component: PortfolioComponent},
  {path: "about", component: AboutComponent}, 
  {path: "item", component: ItemComponent}, 
  {path: "**", pathMatch:"full", redirectTo: "home"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
