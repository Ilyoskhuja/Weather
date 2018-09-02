import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
  { path: "", component: HomeComponent, data: { title: "Home" } },
  //{ path: "detail/:id", component: DetailsComponent, data: { title: "Detail" } },
  { path: "home", component: HomeComponent, data: { title: "List" } },

       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
