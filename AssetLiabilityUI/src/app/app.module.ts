import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';// import { DialogModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {createAssetLibilitycomponent} from "../AssetLiability/createAssetLibilitycomponent";
import {homeComponent} from "../home/home.component";
import {PagenotfoundComponent} from "../error/pagenotfound.component";


import {DialogModule} from 'primeng/dialog';
import {DialogComponent} from "../dialog/DialogComponent";
import {ConfirmationService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AllReferenceNumberDetails} from "../home/AllReferenceNumberDetails";
@NgModule({
  declarations: [
    AppComponent,createAssetLibilitycomponent,homeComponent
    ,PagenotfoundComponent,DialogComponent,AllReferenceNumberDetails

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,DialogModule

  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],
  // entryComponents: [dialog]
})
export class AppModule { }
