import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutMe', component:AboutMeComponent},
  {path:'technologies', component:TechnologiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
