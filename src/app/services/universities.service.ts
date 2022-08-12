import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { university } from '../models/university.interface';


@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  ALL_UNIVERSITIES_URL = 'https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json';

  constructor(private http: HttpClient) {}

  getUniversities():Observable <university[]> {
    return this.http.get<university[]>(this.ALL_UNIVERSITIES_URL);
  } 
   getSearchUniversity(searchName:string,country:string)   {
    return this.http.get(`http://universities.hipolabs.com/search?name=${searchName}&country=${country}`);
  }

}
