import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { CmpInlineTemplateComponent } from './cmp-inline-template/cmp-inline-template.component';
import { CmpInlineStyleComponent } from './cmp-inline-style/cmp-inline-style.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    CmpInlineTemplateComponent,
    CmpInlineStyleComponent,
    PropiedadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
