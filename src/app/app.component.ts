import { Component, OnInit } from '@angular/core';
import response from '../json/response.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  value: number = 1;
  tabs: number = 1;
  isDropdownOpen = false;
  isDropdownOpens = false;
  response = response;
  open:any;
  temp:any;
  count:number=1;
  tab1:any[]=[];
  tab2:any[]=[];
  tab3:any[]=[];
  tab4:any[]=[];
  tab5:any[]=[];
  count1:any;
  count2:any;
  count3:any;
  count4:any;
  dropdownOptions = [
    { label: 'Profile', value: 'Profile' },
    { label: 'Setting', value: 'Setting' },
  ];
  dropdownOptionss = [
    { label: 'View', value: 'Profile' },
    { label: 'Delete', value: 'Setting' },
  ];
  selectedOption: any;

  ngOnInit(){
    console.log(this.response);
    // this.tab5 = this.response.filter((o:any) => o.Tab === 1);
    // this.response = this.tab5;
    this.tab5 = this.response;
    this.response = this.response.filter((o:any) => o.Tab === 1);
   
  }

  tab(count: any) {
    this.value = count;
  }
  select(count: any) {
    this.tabs = count;
    if(this.tabs === 1){
      this.response = this.tab5;
      this.tab1 = this.response.filter((o:any) => o.Tab === 1);
      this.response = this.tab1;
    }
    if(this.tabs === 2){
      this.response = this.tab5;
      this.tab2 = this.response.filter((o:any) => o.Tab === 2);
      this.response = this.tab2;
    }
    if(this.tabs === 3){
      this.response = this.tab5;
      this.tab3 = this.response.filter((o:any) => o.Tab === 3);
      this.response = this.tab3;
    }
    if(this.tabs === 4){
      this.response = this.tab5;
      this.tab4 = this.response.filter((o:any) => o.Tab === 4);
      this.response = this.tab4;
    }
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleDropdowns(value:any) {
    
    if(this.temp == value){
      this.open = 1000;
      this.count++;
      if(this.count % 2 == 0){
        this.open = value;
      }
    }else{
      this.open = value;
    }
    // this.open = value;
    this.isDropdownOpens = !this.isDropdownOpens;
    this.temp=value;
  }
  selectOption(option: any) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }
}
