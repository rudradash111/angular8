import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CommonService} from "../service/CommonService";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {HomeService} from "../home/home.service";
import {DialogComponent} from "./DialogComponent";

@Component({
  selector:"RegistrationModal",
  templateUrl:"./registrationModal.html"
})
export class RegistrationModalComponent{
  public regObj:any={name:'',email:'',password:'',role:''};
isError:boolean=false;
isSuccess:boolean=false;
constructor(private service:HomeService,public modalService: NgbModal) {

}
  save() {
    this.service.saveUser(this.regObj.name,this.regObj.email,this.regObj.password,this.regObj.role).subscribe(data=>{
        const modalRef = this.modalService.open(DialogComponent,{backdropClass: 'light-blue-backdrop'});
        modalRef.componentInstance.message = "User Created Successfully" ;
      },
      error => {
        const modalRef = this.modalService.open(DialogComponent,{backdropClass: 'light-blue-backdrop'});
        modalRef.componentInstance.message = "Already User existed with same username" ;
      });


  }



}
