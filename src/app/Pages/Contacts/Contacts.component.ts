import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs from '@emailjs/browser';
import { ContactInfo } from 'src/app/Model/EmailModel';
import { EmailJsService } from 'src/app/Service/email-js.service';
import { EMAIL } from 'src/app/Shared/Constants/Message.constants';
import { ModalComponent } from 'src/app/Shared/ui/modal/modal.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './Contacts.component.html',
  styleUrls: ['./Contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailJsService: EmailJsService,
    private dialog: MatDialog
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async submitForm() {
    if (this.myForm.valid) {
      const formData: ContactInfo = this.myForm.value;
      await this.emailJsService.emailSend(formData); // Attendere che l'invio dell'email sia completato
      this.openDialog(true); // Aprire il dialog solo dopo che l'invio è completato
    } else {
      // Gestione nel caso la form non sia valida
    }
  }

  openDialog(isSent: boolean): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        message: isSent ? EMAIL.sent : EMAIL.error,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.cleanForm();
    });
  }

  cleanForm() {
    this.myForm.reset();
    console.log('form', this.myForm.controls);
  }
}
