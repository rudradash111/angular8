import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {createAssetLibilitycomponent} from "../AssetLiability/createAssetLibilitycomponent";
import {homeComponent} from "../home/home.component";
import {PagenotfoundComponent} from "../error/pagenotfound.component";
import {DialogComponent} from "../dialog/DialogComponent";
import {ConfirmationService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AllReferenceNumberDetails} from "../home/AllReferenceNumberDetails";
import {NgbActiveModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "../login/loginComponent";
import {RegistrationModalComponent} from "../dialog/registrationModalComponent";
@NgModule({
  declarations: [
    AppComponent,createAssetLibilitycomponent,homeComponent
    ,PagenotfoundComponent,DialogComponent,AllReferenceNumberDetails
    ,LoginComponent,RegistrationModalComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule],
  providers: [ConfirmationService],
  entryComponents: [DialogComponent,RegistrationModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
