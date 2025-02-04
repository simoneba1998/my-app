import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Components/AboutMe/AboutMe.component';
import { ContactsComponent } from './Components/Contacts/Contacts.component';
import { HomeComponent } from './Components/Home/home.component';
import { TechnologiesComponent } from './Components/Technologies/Technologies.component';
import { GuessNumberGameComponent } from './Components/guess-number-game/guess-number-game.component';
import { CardGameComponent } from './Components/card-game/card-game.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutMe', component:AboutMeComponent},
  {path:'technologies', component:TechnologiesComponent},
  {path:'contacts', component:CardGameComponent},
  {path:'my-game', component:GuessNumberGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
