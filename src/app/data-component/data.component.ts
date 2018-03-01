import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpServiceService} from "../services/http-service.service";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { error } from 'selenium-webdriver';


export type Item = { id: number, name: string };


@Component({
  selector: 'app-quiz',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers:[HttpServiceService]
})
export class DataComponent implements OnInit {

  
  items:any[];
  Details:any[];
  id:any;
  name:any;
  category:any;
  amount:number;
 
  
constructor(private service:HttpServiceService, private http :Http){
  }
  
ngOnInit(){
  
  this.getData();
  console.log(this.items);
}

getData(){
  this.service.loadData().subscribe( data => this.items = data);
}

getMore(value){
  console.log(value);
  this.Details=value.details;
  this.id=value.id;
  this.name=value.name;
  this.category=value.category;
  this.amount=value.amount;
  // console.log("Item Id " +this.id);
//   this.temp=[];
// this.service.detail(value).subscribe(data=> this.x = data);
// this.temp.push(this.x);

}

addData(){
  
}

delData(value){
  this.service.delete(value).subscribe(success=>this.getData());
}




}