import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RecordTypeListComponent } from '../components/record-type-list';
import { RecordType } from '../models';
import { GtFormsService } from '../services/service'

import * as _ from 'lodash';

@Component({
  selector: 'app-recordtype-page',
  directives: [RecordTypeListComponent],
  template: `
    <div class="row">
      <div class="col-md-4">
        <record-type-list [recordTypes]="recordTypes$ | async"></record-type-list>
      </div>
    </div>
  `,
  styles: [``]
})
export class RecordTypeListPage implements OnInit {
    recordTypes$: any; //Observable<RecordType[]>;

  constructor(private gtFormsService: GtFormsService) {
     this.recordTypes$ = this.gtFormsService.getRecordTypes();
  }

  ngOnInit() {
  }

}
