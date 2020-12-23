import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  private secret = 'страпон';

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
      localStorage.setItem('auth', 'true');
      this.router.navigateByUrl('gallery');
    } else {
      alert('Неверно');
      this.input.nativeElement.value = '';
      this.input.nativeElement.focus();
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
