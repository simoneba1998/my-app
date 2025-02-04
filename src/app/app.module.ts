import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/home.component';
import { AboutMeComponent } from './Components/AboutMe/AboutMe.component';
import { TechnologiesComponent } from './Components/Technologies/Technologies.component';
import { ContactsComponent } from './Components/Contacts/Contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'; // Importa il modulo per gli input
import { MatButtonModule } from '@angular/material/button'; // Importa il modulo per i pulsanti
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './Layout/Navbar/Navbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from './Shared/shared.module';
import { GuessNumberGameComponent } from './Components/guess-number-game/guess-number-game.component';
import { CardGameComponent } from './Components/card-game/card-game.component';


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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
