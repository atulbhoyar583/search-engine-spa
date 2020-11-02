import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }

  search(value: any) {
    const url = "http://localhost:8080/search";
    const body = value;
    return this.http.post<any>(url, body);
  }

  display(value: any) {
    const url = "http://localhost:8080/display";
    const body = value;
    return this.http.post<any>(url, body);
  }

  addData() {
    const url = "http://localhost:8080/addData";    
    return this.http.get<any>(url);
  }

}
