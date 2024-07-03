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
    { src: '../../../assets/image/angular-logo.png', alt: 'Angular' },
    { src: '../../../assets/image/react-logo.png', alt: 'React' },
    { src: '../../../assets/image/java-logo.png', alt: 'Java' },
    { src: '../../../assets/image/bootstrap-logo.png', alt: 'Bootstrap' },
    { src: '../../../assets/image/material-logo.png', alt: 'Material' },
    { src: '../../../assets/image/rxjs-logo.png', alt: 'RxJS' },
    { src: '../../../assets/image/spring-logo.png', alt: 'Spring' },
    { src: '../../../assets/image/sql-logo.png', alt: 'SQL' },
  ];

}
