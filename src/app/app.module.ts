import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ItemDropdownComponent } from './item-dropdown/item-dropdown.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { TestComponent } from './test/test.component';
import { ItemDropdownCdComponent } from './item-dropdown-cd/item-dropdown-cd.component';
import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    ItemDropdownComponent,
    HeaderComponent,
    BodyComponent,
    CatalogComponent,
    TestComponent,
    ItemDropdownCdComponent,
    AboutComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
