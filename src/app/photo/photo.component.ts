import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.play('spin', { offset: 200 });
  }

  onMouseenter() {
    this.audioService.play('spin', { duration: 300 });
  }

  onClick() {
    this.audioService.play('spin', { duration: 300 });
  }
}
