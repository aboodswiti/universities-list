import { Injectable } from '@angular/core';
import { UniversitiesListComponent } from '../components/universities-list/universities-list.component';
import { university } from '../models/university.interface';

const storageName = 'wishlist';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private wichlist:university[];

  constructor() {
    this.wichlist = JSON.parse(localStorage.getItem(storageName) || '[]') ;
  }

  // get  wishlist university from local storage
  get() {
    return [...this.wichlist];
  }

  // add a new university at wishlist to local storage
  post(item:university) {
    this.wichlist.push(item);
    
    return this.update();
  }

  // update checked wishlist university
  put(item:university) {
    Object.assign(this.wichlist[this.findItemIndex(item)], item.isChecked= !item.isChecked);
    return this.update();
  }

  // remove university from local storage
  destroy(item:university) {
    this.wichlist.splice(this.findItemIndex(item), 1);
    return this.update();
  }

  //update checked wishlist university
  private update() { 
    localStorage.setItem(storageName, JSON.stringify(this.wichlist));
    return this.get();
  }
 // find index of target university in wishlist 
  private findItemIndex(item:university) {
    return this.wichlist.indexOf(item);
  }
}
