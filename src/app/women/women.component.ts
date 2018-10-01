import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { RouterOutlet, Route } from '@angular/router'
import { DataGridModule } from '../../../node_modules/primeng/datagrid';
import { HttpClient } from "@angular/common/http"
import { item } from "../models/item"
import { items } from "../constants/item-constants"
import { ItemService } from "../item.service"
import { CartComponent } from "../cart/cart.component"
import {CarouselModule} from 'primeng/carousel';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  ngOnInit() {
    this.items = this.itemsService.getItems();
    this.simple=true;
      console.log(`The item parent service obj is : ${items[5].name}`)
  }
  public openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

constructor(private itemsService: ItemService) {
  
    }
    public sports;
    public men;
    public women;
    public electronics;
    public mobile;
    @Input() childItem;
    @Output() selectedItemId = new EventEmitter();
    public items;

    
    public asc:Boolean;
    public dsc:Boolean;
    public simple:Boolean;
    
    public je:Boolean;
    public sh:Boolean;
    public ts:Boolean;
    public m11:Boolean;
    public m22:Boolean;
    public m33:Boolean;
    public m44:Boolean;
    public pl:Boolean;
    public le:Boolean;
    public s:Boolean;
   
    public mfalse()
    {
      this.je=false;
      this.sh=false;
      this.ts=false;
      this.m11=false;
      this.m22=false;
      this.m33=false;
      this.m44=false;
      this.pl=false;
      this.s=false;
      this.le=false;

      this.simple=false;
      this.asc=false;
      this.dsc=false;
    }

    public jeans()
    {
      this.mfalse();
      this.je=true;
     
    }
    public shirt()
    {
      this.mfalse();
      this.sh=true;
     
    }
    public shrug()
    {
      this.mfalse();
      this.s=true;
     
    }
    public plazo()
    {
      this.mfalse();
      this.pl=true;
     
    }
    public lehnga()
    {
      this.mfalse();
      this.le=true;
     
    }
    public tshirt()
    {
      this.mfalse();
      this.ts=true;
     
    }

    public m1()
    {
      this.mfalse();
      this.m11=true;
     
    }
    public m2()
    {
      this.mfalse();
      this.m22=true;
      
    }
    public m3()
    {
      this.mfalse();
      this.m33=true;
      
    }
    public m4()
    {
      this.mfalse();
      this.m44=true;
      
    }
    
    public ascend()
    {
      console.log("asend call");
      this.simple=false;
      this.asc=true;
      this.dsc=false;
    }
    public descend()
    {
      console.log("dsend call");
      this.simple=false;
      this.asc=false;
      this.dsc=true;
    }
    
  
  public ID;
  public itemid(id)
  {
    this.ID=id;
  console.log("parent check ID is"+id);
  sessionStorage.setItem('selectedId', id)
  }
  
  public itemidr()
  {
    console.log("Id in itemidr"+this.ID);
    return this.ID;
  }
}
