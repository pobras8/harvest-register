import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  search: string;
  showSearch: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.search = event.target.value;
    if (this.search) {
      this.showSearch = true;
    } else {
      this.showSearch = false;
    }
  }

  doSomething() {
    console.log('Clicked!');
    // Check in that person/family, show success message, clear search, redirect to Person type selection
  }

}
