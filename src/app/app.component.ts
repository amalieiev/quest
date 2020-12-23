import { Component } from '@angular/core';
import { CheaterService } from './cheater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cheaterService: CheaterService) {}
}
