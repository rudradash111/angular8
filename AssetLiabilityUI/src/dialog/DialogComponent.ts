import {Component, OnInit} from "@angular/core";
import {ConfirmationService, Message} from "primeng/api";
import {homeComponent} from "../home/home.component";
declare var $: any;
@Component({
  selector: 'my-DialogComponent',
templateUrl: './dialog.html',
  styleUrls:['./dialog.css']

})

export class   DialogComponent {

  showModal(referenceNumber:String) {
  if(referenceNumber!==null) {

 $("#myModal").modal('show');
  }
  }
  showAssetLiabilityModal():void{
    $("#myModal").modal('show');

  }
  validModal():void{;
    $("#validModal").modal('show');
  }
  sendModal(): void {
    //do something here
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }

  errorModal() {
    $("#errorModal").modal('show');
  }
}
