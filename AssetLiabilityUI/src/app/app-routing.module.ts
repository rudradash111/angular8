import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {createAssetLibilitycomponent} from "../AssetLiability/createAssetLibilitycomponent"
import {homeComponent} from "../home/home.component";
import {PagenotfoundComponent} from "../error/pagenotfound.component";
import {AllReferenceNumberDetails} from "../home/AllReferenceNumberDetails";
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: homeComponent },
   {path: 'create', component: createAssetLibilitycomponent },
  {path: 'viewReferenceNumber', component: AllReferenceNumberDetails },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
