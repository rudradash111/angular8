import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {createAssetLibilitycomponent} from "../AssetLiability/createAssetLibilitycomponent"
import {homeComponent} from "../home/home.component";
import {PagenotfoundComponent} from "../error/pagenotfound.component";
import {AllReferenceNumberDetails} from "../home/AllReferenceNumberDetails";
import {LoginComponent} from "../login/loginComponent";
import {ActiveGuardServiceCanActive} from "../service/ActiveGuardServiceCanActive";
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },//by default redirect to when page load
  {path: 'home', component: homeComponent ,canActivate : [ActiveGuardServiceCanActive]},
  //used to check is user has authenticated to visite this page or not
   {path: 'create', component: createAssetLibilitycomponent,canActivate : [ActiveGuardServiceCanActive] },
  {path: 'viewReferenceNumber', component: AllReferenceNumberDetails,canActivate : [ActiveGuardServiceCanActive] },
  {path:'login',component:LoginComponent},
  { path: '**', component: PagenotfoundComponent }//if u click any url not matching it will redirect to this page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
