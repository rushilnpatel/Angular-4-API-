import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {

  items:any[];
  Details:any[];
  id:any;
  name:any;
  category:any;
  amount:number;

  constructor() { }

  ngOnInit() {
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

}
