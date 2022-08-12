import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { university } from '../../models/university.interface';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
// wishlist : university[] = [];
storageWishlist: university[] = [];

  constructor(private wishlistService: WishlistService,private storage:StorageService ) { }

  ngOnInit(): void {
    this.getWishlist();

  }
  getWishlist(){
    // this.wishlist = this.wishlistService.getWishlist()
    this.storageWishlist = this.storage.get()

  }
  removeWishItem(uni:university){
    //  this.wishlist = this.wishlist.filter(item => item.name !== uni.name)
    // this.wishlistService.removeFromWishlist(uni);
    this.storage.destroy(uni);
    this.getWishlist();
  }

  checkValue(uni: university){
    this.storage.put(uni);
 }
}
