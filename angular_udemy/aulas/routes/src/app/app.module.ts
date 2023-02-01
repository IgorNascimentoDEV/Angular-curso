import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageErrorComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
