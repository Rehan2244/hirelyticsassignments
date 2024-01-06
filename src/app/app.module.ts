import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ButtonModule} from 'primeng/button'
import {SidebarModule} from 'primeng/sidebar'
import { ChartModule } from 'primeng/chart';

import { RippleModule } from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown'
import { FormsModule } from '@angular/forms';
import {BadgeModule} from 'primeng/badge'
import {CalendarModule} from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    ChartModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    BadgeModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
