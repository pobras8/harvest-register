import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      // transition('void => *', [
      //   style({transform: 'translateX(100%)'}),
      //   animate('400ms')
      // ]),
      // transition('* => void', [
      //   style({transform: 'translateX(-100%)'}),
      //   animate('400ms ease-out')
      // ])
    ])
  ]
})
export class CheckinComponent implements OnInit {
  search: string;
  showSearch: boolean = false;
  constructor(private router: Router) { }

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
    this.router.navigate(['/']);
    // Check in that person/family, show success message, clear search, redirect to Person type selection
  }

}
