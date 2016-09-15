import { Component, Input, OnInit } from '@angular/core';

import { RecordType } from '../models';

@Component({
  selector: 'record-type-list',
  templateUrl: `
    <h3>Record Types List</h3>
    <ul>
      <li *ngFor="let r of recordTypes">{{r.name}}</li>
    </ul>
  `,
  styles: [``]
})
export class RecordTypeListComponent implements OnInit {
   @Input() recordTypes: RecordType[];

  constructor() {
  }

  ngOnInit() {
  }
}
