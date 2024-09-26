import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MenuComponent } from '../shared/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileLines, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MenuComponent, FontAwesomeModule, CarouselModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '400ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '400ms ease-in-out',
          style({ opacity: 0, transform: 'translateY(10px)' })
        ),
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  faFileLines = faFileLines;
  faUser = faUser;
  faGear = faGear;

  cards = [
    { icon: faGear, title: 'Configuración' },
    { icon: faFileLines, title: 'Reportes' },
    { icon: faUser, title: 'Usuarios' },
  ];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '64rem',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '48rem',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '35rem',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
