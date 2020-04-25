import { Component, OnInit } from '@angular/core';
import {Clients} from '../model/clients.model';
import {ClientService} from '../services/client.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.css']
})
export class NouveauClientComponent implements OnInit {

  public currentClient: Clients;
  public mode: number=1;

  constructor(private catService:ClientService, private router:Router) { }

  ngOnInit(): void {
  }

  onSaveClient(data: any) {
    this.catService.saveResource(this.catService.host+"/clients",data)
      .subscribe(ress=>{
        //this.router.navigateByUrl("/products");
        this.currentClient=ress;
        this.mode=2;
      },error1 => {
        console.log(error1)
      })

  }

  onNewClients() {
    this.mode=1;
  }




}
