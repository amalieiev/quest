import { Component, Input, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  @Input() photo: number;

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.play('spin', { offset: 200 });
  }
}
