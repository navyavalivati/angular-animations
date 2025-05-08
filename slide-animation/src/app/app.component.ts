import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
@Component({
  selector: 'app-root',
  imports: [SlideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'slide-animation';
}
