import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheaterService {
  private value: string[] = [];

  constructor(private router: Router) {
    document.addEventListener('keyup', (event) => {
      this.value.push(event.key);

      if (this.value.slice(-5).join('').toLocaleLowerCase() === 'выйти') {
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = 'assets/woman-kiss.mp3';
        audio.play();

        localStorage.clear();
        this.router.navigate(['auth']);
      }
    });
  }
}
