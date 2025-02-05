import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logos = [
    { src: '/my-app/assets/image/angular-logo.png', alt: 'ANGULAR' },
    { src: '/my-app/assets/image/react-logo.png', alt: 'REACT' },
    { src: '/my-app/assets/image/java-logo.png', alt: 'JAVA' },
    { src: '/my-app/assets/image/bootstrap-logo.png', alt: 'BOOTSTRAP' },
    { src: '/my-app/assets/image/material-logo.png', alt: 'MATERIAL' },
    { src: '/my-app/assets/image/rxjs-logo.png', alt: 'RXJS' },
    { src: '/my-app/assets/image/spring-logo.png', alt: 'SPRING' },
    { src: '/my-app/assets/image/sql-logo.png', alt: 'SQL' },
  ];

}
