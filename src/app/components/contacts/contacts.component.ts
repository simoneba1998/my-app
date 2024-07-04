import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ContactInfo } from 'src/app/Model/EmailModel';
import { EmailJsService } from 'src/app/Service/email-js.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './Contacts.component.html',
  styleUrls: ['./Contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private emailJsService: EmailJsService
  ) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.myForm.valid) {
      const formData: ContactInfo = this.myForm.value;
      this.emailJsService.emailSend(formData);
      this.myForm.reset({
        name: '',
        email: '',
        message: '',
      });
    } else {
      console.log('Form non valido');
    }
  }
}
