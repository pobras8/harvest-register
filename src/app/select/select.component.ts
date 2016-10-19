import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  select(type: string) {
    if (type === 'first') {
      this.router.navigate(['/guest']);
    } else {
      this.router.navigate(['/checkin']);
    }
  }
}
