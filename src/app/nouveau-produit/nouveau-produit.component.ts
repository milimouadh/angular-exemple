import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nouveau-produit',
  templateUrl: './nouveau-produit.component.html',
  styleUrls: ['./nouveau-produit.component.css']
})
export class NouveauProduitComponent implements OnInit {

  public currentProduct: Product;
  public mode: number=1;

  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit(): void {
  }

  onSaveProduct(data: any) {
    this.catService.saveResource(this.catService.host+"/produits",data)
      .subscribe(ress=>{
        //this.router.navigateByUrl("/products");
        this.currentProduct=ress;
        this.mode=2;
      },error1 => {
        console.log(error1)
      })

  }

  onNewProduct() {
    this.mode=1;
  }
}
