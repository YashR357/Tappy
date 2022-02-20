import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service-select',
  templateUrl: './service-select.component.html',
  styleUrls: ['./service-select.component.css']
})
export class ServiceSelectComponent implements OnInit {

  toiletriesDropdown: boolean = false;
  foodDropdown: boolean = false;
  constructor() { }

  openToiletriesDropdown() {
    console.log(this.toiletriesDropdown)
    this.toiletriesDropdown = true;
  }

  openFoodDropdown() {
    console.log(this.foodDropdown)
    this.foodDropdown = true;
  }

  ngOnInit(): void {
  }

}
