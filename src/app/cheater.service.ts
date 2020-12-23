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

      if (this.value.slice(-5).join('').toLocaleLowerCase() === 'сброс') {
        alert('код сработал!');

        localStorage.clear();
        this.router.navigate(['auth']);
      }
    });
  }
}
