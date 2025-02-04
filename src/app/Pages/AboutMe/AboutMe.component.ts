import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-About-Me',
  templateUrl: './AboutMe.component.html',
  styleUrls: ['./AboutMe.component.css'],
  animations: [
    trigger('rotateIn', [
      transition(':enter', [
        style({ transform: 'rotate(0deg)', opacity: 0 }),
        animate('1s ease-out', style({ transform: 'rotate(360deg)', opacity: 1 }))
      ])
    ])
  ]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
