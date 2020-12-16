import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


import {MatListModule} from '@angular/material/list';


import { baseURL } from './shared/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { ReporequestService } from "./services/reporequest.service";

import 'hammerjs';
import { TrendingReposComponent } from './trending-repos/trending-repos.component';




@NgModule({
  declarations: [
    AppComponent,
    TrendingReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [
    ReporequestService,
    ProcessHttpmsgService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
