import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gtforms',
  template: `
    <div class="inner-shell">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``]
})
export class GtFormsShell implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
