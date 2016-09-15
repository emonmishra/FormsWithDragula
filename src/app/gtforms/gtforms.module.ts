import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import services from './services';

import { GtFormsService } from './services/service';
import { gtFormsRouting } from './gtforms.routing';

import { GtFormsShell } from './gtforms.shell';
import { RecordTypeListPage } from './pages/record-type';
import { RecordTypeListComponent } from './components/record-type-list';

// import { GtService } from './gtforms/gtforms.service';

@NgModule({
  imports: [
    CommonModule,
    gtFormsRouting
  ],
  declarations: [
    GtFormsShell,
    RecordTypeListPage,
    RecordTypeListComponent
  ],
  providers: [
    services,
    GtFormsService
  ]
})
export class GtFormsModule { }
