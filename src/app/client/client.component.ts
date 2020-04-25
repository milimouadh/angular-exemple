import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientService} from '../services/client.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public listeclient:any;
  public size:number=5;
  public pageCourant:number=0;
  public totalPages:number;
  public pages:Array<number>;
  public currentMotCle: String="";

  constructor(private catService:ClientService,private router:Router) { }

  ngOnInit(): void {
  }

  getListeClient()
  {
    this.catService.getClients(this.pageCourant,this.size)
      .subscribe(data=>
        {

          this.totalPages=data["page"].totalPages;
          this.pages=new Array<number>(this.totalPages);
          this.listeclient=data;
        },
        errorlistprod => console.log(errorlistprod))
  }
  onPageProduit(i) {
    this.pageCourant=i;;
    this.chercherClients();

  }

  onChercher(form:any){
    this.pageCourant=0;
    this.currentMotCle=form.MotCle;
    this.chercherClients();

  }


  chercherClients() {
    this.catService.getClientsByMotCle(this.currentMotCle,this.pageCourant,this.size)
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.listeclient=data;
      },err=>{
        console.log(err);
      });

  }

  onDeleteClient(p) {
    let conf=confirm("Etes vous sure de suprimer ???");
    if (conf) this.catService.deleteResource(p._links.self.href)
      .subscribe(data=>{
        this.chercherClients();
      },error1 =>{
        console.log(error1);
      } )

  }

  onEditClient(p) {
    let url=p._links.self.href;
    this.router.navigateByUrl("/edit-client/"+btoa(url));

  }
}
