import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{FormsModule} from '@angular/forms';
import { ContatoComponent } from './pagina/contato/contato.component';
import { HomeComponent } from './pagina/home/home.component';
import { MenuComponent } from './pagina/menu/menu.component';
import { ListaComponent } from './pagina/lista/lista.component';
import{ LOCALE_ID} from '@angular/core';
import{registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt'
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    MenuComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue:'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
