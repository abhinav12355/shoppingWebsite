import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';
import { RouterOutlet, Route } from '@angular/router'
import { DataGridModule } from '../../../node_modules/primeng/datagrid';
import { HttpClient } from "@angular/common/http"
import { item } from "../models/item"
import { items } from "../constants/item-constants"
import { ItemService } from "../item.service"

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})


export class MainpageComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    
  }
  public items:item[]=[
    new item("Iphone 7",50000,"electronics",1,"Apple","hi"),
    new item("Iphone 7",50000,"electronics",1,"Apple","hi"),
    new item("Iphone 7",50000,"electronics",1,"Apple","hi"),
    new item("Iphone 7",50000,"electronics",1,"Apple","hi"),
    new item("Iphone 7",50000,"electronics",1,"Apple","hi"),
    new item("Iphone 7",50000,"electronics",1,"Apple","hi"),
]
}

