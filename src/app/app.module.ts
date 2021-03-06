import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CheaterService } from './cheater.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, GalleryComponent, PhotoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    CheaterService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
