import {Component, ElementRef, Input, OnInit} from "@angular/core";
import {DialogComponent} from "../dialog/DialogComponent";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RegistrationModalComponent} from "../dialog/registrationModalComponent";
import {ActiveGuardServiceCanActive} from "../service/ActiveGuardServiceCanActive";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/AuthService";

@Component({
  selector:"login-component",
  templateUrl:"./login.html",
  styleUrls:["./login.css"]
})
//this will check is it a valid user or not by using AuthService
export class LoginComponent  implements OnInit{

  invalidCredentialMsg: string;
  username:string;
  password:string;
  retUrl:string="home";

  constructor(private elementRef: ElementRef,public modalService: NgbModal,
              private authService: AuthService,
              private router: Router,
              private activatedRoute:ActivatedRoute){

  }

  registrationFunction(){
    this.modalService.open(RegistrationModalComponent, {backdropClass: 'light-blue-backdrop'});

  }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl');
        console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
      });
  }

  login() {
    this.authService.login(this.username, this.password)

  }


}
