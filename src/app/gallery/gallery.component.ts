import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';

interface Item {
  name: number;
  isActive: boolean;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public isHold = true;
  public items: Item[] = [
    { name: 1, isActive: false },
    { name: 2, isActive: false },
    { name: 3, isActive: false },
    { name: 4, isActive: false },
    { name: 5, isActive: false },
  ];

  constructor(private audioService: AudioService) {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.isHold = false;
    }, 400);
  }

  public onClick(event: MouseEvent, selected: Item) {
    event.stopPropagation();

    this.items = this.items.map((item) => {
      item.isActive = item.name === selected.name ? true : false;
      return item;
    });

    this.audioService.play('spin', { duration: 300 });
  }

  public onClickOutside() {
    this.items = this.items.map((item) => {
      item.isActive = false;
      return item;
    });

    this.audioService.play('spin', { duration: 300 });
  }
}
