import {Component, ElementRef, Input} from "@angular/core";
import {DialogComponent} from "../dialog/DialogComponent";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RegistrationModalComponent} from "../dialog/registrationModalComponent";

@Component({
  selector:"login-component",
  templateUrl:"./login.html",
  styleUrls:["./login.css"]
})

export class LoginComponent  {


  constructor(private elementRef: ElementRef,public modalService: NgbModal){

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#644987';
  }
  registrationFunction(){
    this.modalService.open(RegistrationModalComponent, {backdropClass: 'light-blue-backdrop'});

  }
}
