import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './pages/404.component';

import { GtFormsModule } from './gtforms/gtforms.module';

import { routing, appRoutingProviders } from './app.routing';
import { GtFormsShell } from './gtforms/gtforms.shell';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GtFormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
