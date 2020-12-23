import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  private secret = 'страпон';

  public isFail = false;
  public isSuccess = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  @HostListener('click')
  onClick() {
    this.input.nativeElement.focus();
  }

  onLogin() {
    if (this.input.nativeElement.value.toLocaleLowerCase() === this.secret) {
      var audio = new Audio();
      audio.preload = 'auto';
      audio.src = 'assets/woman-screaming.mp3';
      audio.play();

      this.isSuccess = true;
      setTimeout(() => {
        this.isSuccess = false;
      }, 2000);

      of({})
        .pipe(
          delay(2000),
          tap(() => {
            localStorage.setItem('auth', 'true');
            this.router.navigateByUrl('gallery');
          }),
          tap(() => {
            audio.pause();
          })
        )
        .toPromise();
    } else {
      this.input.nativeElement.value = '';
      this.input.nativeElement.focus();

      this.isFail = true;
      setTimeout(() => {
        this.isFail = false;
      }, 300);

      var audio = new Audio();
      audio.preload = 'auto';
      audio.src = 'assets/woman-laugh.mp3';
      audio.play();
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onLogin();
    }

    if (
      this.input.nativeElement.value.length >= 7 &&
      event.key !== 'Backspace'
    ) {
      event.preventDefault();
    }
  }
}
