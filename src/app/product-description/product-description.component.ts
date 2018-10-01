import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { item } from "../models/item";
import { items } from "../constants/item-constants";
import { ItemService } from "../item.service";
import { MainpageComponent} from "../mainpage/mainpage.component";
import { HeaderbarComponent} from "../headerbar/headerbar.component";
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  public Id;
  public itemarr;
  public item;
  public quantity=1;
  public show=false;
  constructor(public itemservice:ItemService,public router: Router,private http:HttpClient)
  { 
   
     this.item=this.itemservice.getItems();
     this.Id=sessionStorage.getItem('selectedId');
  }
  ngOnInit() 
  {
    this.Id=sessionStorage.getItem('selectedId');
    this.Id=this.Id-1;
    console.log(`id in cart: ${this.Id}`);
    this.discount= this.item[this.Id].price+this.item[this.Id].price*10/100;

  }
  public discount;
public decquantity()
{
  if(this.quantity>1)
  this.quantity--;
  if(this.quantity<4)
   this.show=false;
}
public incquantity()
{
  if(this.quantity<=3)
  this.quantity++;
  else
  {
    this.show=true;
  }
}
  public cartvalidator()
  {
    
    let token=localStorage.getItem('id_token');
    console.log("token: "+token);
    if(token!=null)
    {
      let id=localStorage.getItem('user');
      let user=JSON.parse(id);
      let email=user.email;
      
      var dataa={
        'itemid':this.item[this.Id].id+1,
        'itemname':this.item[this.Id].name,
        'description':this.item[this.Id].description,
        'email':email,
        'quantity':this.quantity,
        'price':this.item[this.Id].price,
        'imagepath':this.item[this.Id].imag
  
      }
      this.http.post('http://localhost:8000/productroute/addtocart',dataa).subscribe(response=>
      {
        let status=response;
        console.log(`response from product description page is: ${response} `);
        alert(`response from product description page is: ${response} `);
        console.log(response);
        
      },error=>
      {
        let status = error;
        alert(`the error is ${error}`);
        console.log(`error in sending data to cart function ${error}`);
      }); 
      this.router.navigate(['/cart']);
    }  
    else
    {
      alert("login first");
    }
  }
  

}
