import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Components/AboutMe/AboutMe.component';
import { ContactsComponent } from './Components/Contacts/Contacts.component';
import { HomeComponent } from './Components/Home/home.component';
import { TechnologiesComponent } from './Components/Technologies/Technologies.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutMe', component:AboutMeComponent},
  {path:'technologies', component:TechnologiesComponent},
  {path:'contacts', component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
