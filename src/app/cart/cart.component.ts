import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { item } from "../models/item";
import { items } from "../constants/item-constants";
import { ItemService } from "../item.service";
import { MainpageComponent} from "../mainpage/mainpage.component";
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';

//import 'rxjs/Rx';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private http:Http,private route:Router) { 
    
     
    }
    public getreq(email)
    {
      console.log("email in get ts : "+email);
      let data= {
          'email': email
        }
      
     this.http.post('http://localhost:8000/productroute/cartdata',data).subscribe((res: Response) => {
      this.output = res.json();
      console.log(this.output);
     
     // this.route.reload();
    });
  }
 public output;
 public user;
 public email;
 id;
    ngOnInit() {
      this.id=localStorage.getItem('user');
         console.log(`local storage: ${this.id}`);
         if(this.id!=null)
         {
         this.user=JSON.parse(this.id);
          this.email=this.user.email;
          console.log("email "+this.email);
        this.getreq(this.email);
        
         }

  }
  public deleteitem(itemid)
  {
    console.log("delete  function called");
    console.log(itemid);
    let dataa={
      itemid:itemid,
    }
    let options = new RequestOptions({
     
      body: {
        id: itemid
      }
    });
    this.http.delete('http://localhost:8000/productroute/deleteitem',options).subscribe((res: Response) => {

      this.getreq(this.email);

    });
  }
}
    




