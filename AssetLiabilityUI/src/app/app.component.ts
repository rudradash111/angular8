import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../service/AuthService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssetLiabilityUI';
  constructor(private router:Router,private authService:AuthService) {
  }
  logOutFromWeb(){
    this.authService.logoutUser();// even if u are logout still user can navigate other tab
    this.router.navigate(['/login'])
;  }
}
