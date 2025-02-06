import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home.component';
import { AboutMeComponent } from './Pages/AboutMe/AboutMe.component';
import { TechnologiesComponent } from './Pages/Technologies/Technologies.component';
import { ContactsComponent } from './Pages/Contacts/Contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'; // Importa il modulo per gli input
import { MatButtonModule } from '@angular/material/button'; // Importa il modulo per i pulsanti
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from './Shared/shared.module';
import { GuessNumberGameComponent } from './Components/guess-number-game/guess-number-game.component';
import { CardGameComponent } from './Components/card-game/card-game.component';
import { GameComponent } from './Pages/Game/game.component';
import { SetteMezzoComponent } from './Components/sette-mezzo/sette-mezzo.component';
import { NavbarComponent } from './Layout/Navbar/Navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    TechnologiesComponent,
    ContactsComponent,
    GuessNumberGameComponent,
    CardGameComponent,
    GameComponent,
    SetteMezzoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
    SharedModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
