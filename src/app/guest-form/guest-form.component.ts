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

  constructor( private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigate(['/']);
  }

}
