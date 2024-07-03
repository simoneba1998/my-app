import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  myForm:FormGroup = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    descrizione: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.myForm.valid) {
      // Implementazione dell'invio dei dati, ad esempio a un servizio backend
      console.log(this.myForm.value);
      // Reset del form dopo l'invio dei dati (opzionale)
      this.myForm.reset();
    } else {
      // Validazione degli errori, se necessario
      console.log('Form non valido');
    }
  }

}
