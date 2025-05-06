import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { FadeAnimationComponent } from './fade-animation/fade-animation.component';
@Component({
  selector: 'app-root',
  imports: [FadeAnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('statusChange', [
      
      state('default', style({
        backgroundColor: 'lightgray',
        transform: 'scale(1)',
        opacity: 1
      })
    ),
      state('active', style({
        backgroundColor: 'dodgerblue',
        transform: 'scale(1.1)',
        opacity: 0.9
      })
    ),
      state('success', style({
        backgroundColor: 'seagreen',
        transform: 'scale(1.2)',
        opacity: 1
      })
    ),
    //transition('* => *', animate('500ms ease-in-out'))


    //custom transitions

    transition('default => active', animate('1000ms ease-in')),
    transition('active => success', animate('600ms ease-out')),
    transition('success => default', animate('300ms ease-in')),

    //fallback transition
    transition('* => *', animate('500ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  //title = 'animations1';

  currentState : 'default' | 'active' | 'success' = 'default';

  setState(newState: 'default' | 'active' | 'success') {
    this.currentState = newState;
  }
}
