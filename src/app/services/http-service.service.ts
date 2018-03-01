import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class HttpServiceService {

  // private URL = "/app/data/data.json";
  private URL ="http://localhost:3000/data";
  temp:any=[];

  constructor( private http:Http) { }

  loadData(){
    return this.http.get(this.URL).map(data => data.json());
  }
  delete(value){
    return this.http.delete(this.URL +"/"+ value).map(data => data.json());
  }
  detail(value){
    // this.temp=this.temp.push(value);
    return this.http.get(this.URL +"/"+ value).map(data=> data.json());
  }



}
