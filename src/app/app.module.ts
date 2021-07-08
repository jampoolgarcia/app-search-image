// core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// root
import { AppComponent } from './app.component';

// components
import { ListImagesComponent } from './components/list-images/list-images.component';
import { SearchImagesComponent } from './components/search-images/search-images.component';
import { ImageComponent } from './components/list-images/image/image.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListImagesComponent,
    SearchImagesComponent,
    ImageComponent,
    SpinnerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
