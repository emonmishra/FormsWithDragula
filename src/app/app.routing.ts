import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './pages/404.component';

const gtFormsRoutes: Routes = [
  // {path: '', redirectTo: '/forms', pathMatch:'full'},
  {path: 'forms', loadChildren: `./gtforms/gtforms.module#GtFormsModule`}
];

const coreRoutes: Routes = [
  { path: '', component: LandingComponent },
  //  { path: 'hero/:id', component: HeroDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

const appRoutes: Routes = [
  ...coreRoutes,
  ...gtFormsRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
