import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../shared/models/person';
import { Address } from '../shared/models/address';
import { PrayerRequest } from '../shared/models/prayer-request';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss'],
  animations: [
    trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          style({transform: 'translateX(100%)'}),
          animate('300ms ease-in')
        ]),
        transition('* => void', [
          style({transform: 'translateX(-100%)'}),
          animate('300ms ease-out')
        ])
      ])
    ]
})
export class GuestFormComponent implements OnInit {
  stateList: string[] = ["IN","AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
  newGuest: Person = new Person();

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  addPhone() {
      this.newGuest.phones.push('');
  }

  addEmail() {
      this.newGuest.emails.push('');
  }

  /** Clears out data and returns to select screen
  */
  cancel() {
    // TODO: Clear out locally saved form data
    this.router.navigate(['/']);
  }

  /** Saves the new data to the DB then clears out local data. Returns to select screen on completion
  */
  submit({ value, valid }: { value: any, valid: Boolean}) {
    // TODO: Call service to save data to DB
    // TODO: Clear out locally saved form data
    console.log(value, valid);
    this.router.navigate(['/']);
  }

}
