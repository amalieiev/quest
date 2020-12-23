import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CheaterService } from './cheater.service';

@NgModule({
  declarations: [AppComponent, AuthComponent, GalleryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CheaterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
