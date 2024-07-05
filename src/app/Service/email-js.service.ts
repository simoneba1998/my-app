import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import emailjs from '@emailjs/browser';
import {
  KEY_EMAILJS,
  SERVICE_EMAILJS,
  TEMPLATE_EMAILJS,
} from '../Config/EmailJS';
import { ContactInfo } from '../Model/EmailModel';

@Injectable({
  providedIn: 'root',
})
export class EmailJsService {
  constructor() {}

  async emailSend(contactInfo: ContactInfo) {
    emailjs.init(KEY_EMAILJS);
    await emailjs.send(SERVICE_EMAILJS, TEMPLATE_EMAILJS, {
      from_name: contactInfo.name,
      to_name: 'Simone Bagordo',
      from_email: contactInfo.email,
      message: contactInfo.message,
    });
  }
}
