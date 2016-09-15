import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { GtFormsShell } from './gtforms.shell';
import { RecordTypeListPage } from './pages/record-type';

const gtFormsRoutes: Routes = [
  //{path: '', redirectTo: '/', pathMatch:'full'},
  {
    path: 'forms',
    component: GtFormsShell,
    children: [
      { path: '', component: RecordTypeListPage }
    ]
  }
];

export const gtFormsRouting: ModuleWithProviders = RouterModule.forChild(gtFormsRoutes);
