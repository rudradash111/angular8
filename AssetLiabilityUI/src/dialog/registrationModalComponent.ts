import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector:"RegistrationModal",
  templateUrl:"./registrationModal.html"
})
export class RegistrationModalComponent implements OnInit{
  userName:string;
  email:string;
  password:string;
constructor(private modalEvent:NgbActiveModal) {

}
ngOnInit(): void {
}

  save() {
alert(this.userName+this.password+this.email);
  }
}
