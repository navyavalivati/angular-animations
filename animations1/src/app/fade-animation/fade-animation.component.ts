// fade-animation.component.ts
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-fade-animation',
  templateUrl: './fade-animation.component.html',
  styleUrls: ['./fade-animation.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('300ms ease-in-out')),
    ]),
  ],
})
export class FadeAnimationComponent {
  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}