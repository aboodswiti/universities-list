import { Component, OnInit } from '@angular/core';
import{UniversitiesService} from '../../services/universities.service';
import { university } from '../../models/university.interface';
import { WishlistService } from 'src/app/services/wishlist.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.css']
})
export class UniversitiesListComponent implements OnInit {
  universities: university[] = [];
  searchUniversities: university[] = [];
  allUniversities: university[] = [];
  // wishlist: university[] = [];
  searchName: string = '';
  selectedCountry = 'Filter By Country';
  isLoading: boolean = true;
  storageWishlist: university[] = [];
  countries = [ 'United Kingdom', 'United States', 'Canada',  'Germany']
  constructor(private universitiesService:UniversitiesService,private wishlistService: WishlistService,private storage:StorageService ) { }

  ngOnInit(): void {
    this.getAllUniversities();
    this.storageWishlist = this.storage.get()
    console.log('ngoninit',this.storage.get());

  }

  getAllUniversities() {
    this.universitiesService.getUniversities().subscribe((allUniversities: any) => {
      this.allUniversities = allUniversities;
      this.universities = allUniversities;
      this.isLoading = false;
      console.log("iii",allUniversities)

    });
  }
  addTowishlist(university:university){
    university.wishlist=true;
    // this.wishlistService.addTowishlist(university);
    this.storage.post(university);
  }

  onSearchUniversity() {
    this.searchName = this.searchName.trim().toLowerCase();
    if(this.searchName !== '' || this.selectedCountry !== 'Filter By Country') { 
      this.isLoading = true;

    this.universitiesService.getSearchUniversity(this.searchName,this.selectedCountry).subscribe((searchUniversities: any) => {
      this.searchUniversities = searchUniversities;
      this.universities = searchUniversities;
      
      this.isLoading = false;

    });
  } else {
    this.universities = this.allUniversities;
  }}

  checkWishlist(university:university) {
    return this.storageWishlist.find(uni => uni.name == university.name  )  || university.wishlist;
   }
 
}
