import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitComponent} from './produit/produit.component';
import {NouveauProduitComponent} from './nouveau-produit/nouveau-produit.component';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {ClientComponent} from './client/client.component';
import {NouveauClientComponent} from './nouveau-client/nouveau-client.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {EditClientComponent} from './edit-client/edit-client.component';


const routes: Routes = [
  {path:"",component:MenuComponent,children:[
  {path:"produits",component:ProduitComponent},
  {path:"nouveau-produit",component:NouveauProduitComponent},
      {path:"clients",component:ClientComponent},
      {path:"nouveau-client",component:NouveauClientComponent},
      {path:"edit-product/:id",component:EditProductComponent},
      {path:"edit-client/:id",component:EditClientComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
