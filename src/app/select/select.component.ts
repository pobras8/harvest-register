import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
  trigger('flyInOut', [
        state('in', style({opacity: '1'})),
        transition('void => *', [
          style({opacity: '0'}),
          animate('400ms')
        ]),
        transition('* => void', [
          style({opacity: '1'}),
          animate('400ms ease-out')
        ])
      ])
    ]
})
export class SelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
