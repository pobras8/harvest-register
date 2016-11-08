import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Validators, FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
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
  public stateList: string[] = ["IN","AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
  public relationshipList: string[] = ["Husband","Wife","Mother","Father","Son","Daughter","Grandson","Granddaughter","Sister","Brother","Aunt","Uncle","Niece","Nephew","Cousin(F)","Cousin(M)","Grandfather","Grandmother"];
  public newGuest: Person = new Person();
  public guestForm: FormGroup;

  constructor(
    private _router: Router,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.guestForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      family: new FormArray([]),
      emails: new FormArray([
        new FormControl('')
      ]),
      phones: new FormArray([
        new FormControl('')
      ]),
      address: new FormGroup({
        line1: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl('IN'),
        zip: new FormControl('')
      }),
      marital: new FormControl(''),
      ageCat: new FormControl(''),
      reference: new FormControl(''),
      nextSteps: new FormGroup({
        party: new FormControl(''),
        baptism: new FormControl(''),
        newsletter: new FormControl(''),
        discover: new FormControl(''),
        serving: new FormControl('')
      })
    })
  }

  addFamily() {
      const control = <FormArray>this.guestForm.controls['family'];
      control.push(new FormGroup({
          firstName: new FormControl(''),
          lastName: new FormControl(''),
          relationship: new FormControl('')
      }));
  }

  removeFamily(i: number) {
      const control = <FormArray>this.guestForm.controls['family'];
      control.removeAt(i);
  }

  /** Pushes an empty control to the 'emails' form control array
  */
  addEmail() {
    const control = <FormArray>this.guestForm.controls['emails'];
    control.push(new FormControl(''));
  }

  removeEmail(i: number) {
    const control = <FormArray>this.guestForm.controls['emails'];
    control.removeAt(i);
  }

  /** Pushes an empty control to the 'phones' form control array
  */
  addPhone() {
    const control = <FormArray>this.guestForm.controls['phones'];
    control.push(new FormControl(''));
  }

  removePhone(i: number) {
    const control = <FormArray>this.guestForm.controls['phones'];
    control.removeAt(i);
  }

  /** Clears out data and returns to select screen
  */
  cancel() {
    this._router.navigate(['/']);
  }

  /** Saves the new data to the DB then clears out local data. Returns to select screen on completion
  */
  submit(formValues: Person) {
    // TODO: Call service to save data to DB
    console.log("Submitted form:",formValues);
    this._router.navigate(['/']);
  }

}
