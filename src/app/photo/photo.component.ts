import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      var audio = new Audio();
      audio.preload = 'auto';
      audio.src = 'assets/spin.mp3';
      audio.play();
    }, 200);
  }

  onMouseenter() {
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = 'assets/spin.mp3';
    audio.play();

    setTimeout(() => {
      audio.pause();
    }, 300);
  }
}
