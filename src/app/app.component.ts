import { Component, ViewChild } from '@angular/core';
import {SearchServiceService } from './search-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  value: string[];
  flag: boolean;
  
  constructor(private service: SearchServiceService) {    
  } 

  ngOnInit() {
    console.log("Init");
    this.service.addData().subscribe(); 
  }

  onKey(event: any) {
    console.log(event.target.value);
    this.flag = false;
    if(event.target.value == '') {
      this.value = [];
    } else {      
      this.service.search(event.target.value).subscribe((data) => {this.value = data});      
    }    
  }

  search(searchString: string) {
    console.log(searchString);    
      this.service.display(searchString).subscribe((data) => {this.value = data});  
      this.flag = true;
  }
}
