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
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})


export class MainpageComponent implements OnInit {

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
  ngOnInit() {
   this.items = this.itemsService.getItems();
  //  
    console.log(`The item parent service obj is : ${items[5].name}`)
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

