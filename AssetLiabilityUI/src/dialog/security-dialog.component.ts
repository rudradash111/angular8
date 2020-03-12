import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector:"secuirity-dialog",
  templateUrl:"./securitymessage.html"
})
export class SecurityDialogComponent {

  constructor(private mInstance:NgbActiveModal) {
  }
}
