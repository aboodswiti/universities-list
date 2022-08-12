import { Injectable } from '@angular/core';
import { university } from '../models/university.interface';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
   wishlist: university[] = [];
  constructor() { }


  addTowishlist(university:university){
    if(this.wishlist.find(item => item.name === university.name)){
      return;
    }
    this.wishlist=[...this.wishlist,university];
  }
  getWishlist(){ 
    return this.wishlist;
  }

  removeFromWishlist(university:university){
    this.wishlist = this.wishlist.filter(item => item.name !== university.name)
  }
}
