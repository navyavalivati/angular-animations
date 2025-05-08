import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-slide-bar',
  imports: [CommonModule],
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.scss',
  animations: [
    trigger('slideMenu',[
      transition(':enter', [
        style({transform: 'translateX(-100%', opacity: 0}),
        animate('400ms ease-out', style({transform: 'translateX(0)', opacity: 1})),
      ]),
      transition(':leave',[
        animate('400ms ease-in', style({transform: 'translateX(-100%)', opacity: 0})),
      ]),
    ]),
  ],
})
export class SlideBarComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
