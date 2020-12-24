import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../audio.service';

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

  constructor(private router: Router, private audioService: AudioService) {}

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
      this.audioService.play('woman-screaming', { duration: 2000 }).then(() => {
        localStorage.setItem('auth', 'true');
        this.router.navigateByUrl('gallery');
      });

      this.isSuccess = true;
      setTimeout(() => {
        this.isSuccess = false;
      }, 2000);
    } else {
      this.input.nativeElement.value = '';
      this.input.nativeElement.focus();

      this.isFail = true;
      setTimeout(() => {
        this.isFail = false;
      }, 300);

      this.audioService.play('woman-laugh');
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
