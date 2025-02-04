import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Pages/AboutMe/AboutMe.component';
import { ContactsComponent } from './Pages/Contacts/Contacts.component';
import { HomeComponent } from './Pages/Home/home.component';
import { TechnologiesComponent } from './Pages/Technologies/Technologies.component';
import { GuessNumberGameComponent } from './Components/guess-number-game/guess-number-game.component';
import { CardGameComponent } from './Components/card-game/card-game.component';
import { GameComponent } from './Pages/Game/game.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutMe', component:AboutMeComponent},
  {path:'technologies', component:TechnologiesComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'my-game', component:GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
