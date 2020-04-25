import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client.service";
import {Clients} from "../model/clients.model";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  public currentClient: Clients;
  public url: string;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private clienttService:ClientService) { }

  ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params.id);
    this.clienttService.getResource(this.url)
      .subscribe(data=>{
        this.currentClient=data;
      },error1 => {
        console.log(error1);
      })
  }


  onUpdateClient(value: any) {
    this.clienttService.updateResource(this.url,value)
      .subscribe(data=>{
        alert("Mise a jour effectuèe avec succès")
        this.router.navigateByUrl("/clients")
      },error1 => {
        console.log(error1);
      })
  }
}
