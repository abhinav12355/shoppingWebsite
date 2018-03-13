import { Injectable } from '@angular/core';
import { items } from './constants/item-constants';
@Injectable()
export class ItemService {
  private item = items;
  constructor() {
  }
  public getItems() {
    return items;
  }

}
