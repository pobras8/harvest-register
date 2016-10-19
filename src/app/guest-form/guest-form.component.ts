import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

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
  stateList: string[] = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
  constructor( private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigate(['/']);
  }

}
