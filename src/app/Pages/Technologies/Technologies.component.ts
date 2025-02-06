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
    { src: 'assets/image/angular-logo.png', alt: 'ANGULAR' },
    { src: 'assets/image/react-logo.png', alt: 'REACT' },
    { src: 'assets/image/java-logo.png', alt: 'JAVA' },
    { src: 'assets/image/bootstrap-logo.png', alt: 'BOOTSTRAP' },
    { src: 'assets/image/material-logo.png', alt: 'MATERIAL' },
    { src: 'assets/image/rxjs-logo.png', alt: 'RXJS' },
    { src: 'assets/image/spring-logo.png', alt: 'SPRING' },
    { src: 'assets/image/sql-logo.png', alt: 'SQL' },
  ];

}
