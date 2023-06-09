import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanellChildComponent } from './panell-child/panell-child.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BudgetsComponent } from './budgets/budgets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellChildComponent,
    WelcomePageComponent,
    BudgetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
