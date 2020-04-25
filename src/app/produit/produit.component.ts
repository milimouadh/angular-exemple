import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public listeproduit:any;
  public size:number=5;
  public pageCourant:number=0;
  public totalPages:number;
  public pages:Array<number>;
  public currentMotCle: String="";

  constructor(private catService:CatalogueService,private router:Router) { }

  ngOnInit(): void {
  }

  getListeProduit()
  {
    this.catService.getProducts(this.pageCourant,this.size)
      .subscribe(data=>
      {

        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.listeproduit=data;
      },
          errorlistprod => console.log(errorlistprod))
  }
  onPageProduit(i) {
    this.pageCourant=i;;
    this.chercherProduits();

  }

  onChercher(form:any){
    this.pageCourant=0;
    this.currentMotCle=form.MotCle;
    this.chercherProduits();

  }


  chercherProduits() {
    this.catService.getProductsByMotCle(this.currentMotCle,this.pageCourant,this.size)
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.listeproduit=data;
      },err=>{
        console.log(err);
      });

  }

  onDeleteProduct(p) {
    let conf=confirm("Etes vous sure de suprimer ???");
    if (conf) this.catService.deleteResource(p._links.self.href)
      .subscribe(data=>{
        this.chercherProduits();
      },error1 =>{
        console.log(error1);
      } )

  }

  oneEditProduct(p) {
    let url=p._links.self.href;
    this.router.navigateByUrl("/edit-product/"+btoa(url));

  }
}
