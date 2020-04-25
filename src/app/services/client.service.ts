import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Clients} from '../model/clients.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public host:String ="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }



  public getClients(page:number,size:number) {
    return this.httpClient.get("http://localhost:8080/clients");


  }
  public getClientsByMotCle(mr:String,page: number, size: number) {
    return this.httpClient.get(this.host+"/clients/search/byNomPage?mr="+mr+"&page="+page+"&size="+size);
  }

  public deleteResource(url) {
    return this.httpClient.delete(url);
  }
  public saveResource(url,data):Observable<Clients> {
    // @ts-ignore
    return this.httpClient.post(url,data);
  }
  public getResource(url):Observable<Clients> {
// @ts-ignore
    return this.httpClient.get(url);
  }
  public updateResource(url,data) {
    return this.httpClient.put(url,data);
  }


}

