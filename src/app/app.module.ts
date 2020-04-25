import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ClientComponent } from './client/client.component';
import {NouveauClientComponent}from './nouveau-client/nouveau-client.component';
import {FormsModule} from '@angular/forms';
import {EditProductComponent} from './edit-product/edit-product.component';
import { EditClientComponent } from './edit-client/edit-client.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NouveauProduitComponent,
    MenuComponent,
    ClientComponent,
    NouveauClientComponent,
    EditProductComponent,
    EditClientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
