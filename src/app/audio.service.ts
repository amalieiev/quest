import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}

  public play(
    name: string,
    options: { offset?: number; duration?: number } = { offset: 0, duration: 0 }
  ): Promise<void> {
    const { duration, offset } = options;
    return new Promise((resolve) => {
      var audio = new Audio();
      audio.preload = 'auto';
      audio.src = `assets/${name}.mp3`;

      if (offset) {
        setTimeout(() => {
          audio.play();
          this.pause(audio, duration, resolve);
        }, offset);
      } else {
        audio.play();
        this.pause(audio, duration, resolve);
      }
    });
  }

  private pause(audio, duration, resolve) {
    if (duration) {
      setTimeout(() => {
        audio.pause();
        resolve();
      }, duration);
    } else {
      resolve();
    }
  }
}
