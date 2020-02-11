import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";

import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'my-DialogComponent',
templateUrl: './dialog.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls:['./dialog.css']

})

export class   DialogComponent implements OnInit{
  @Input() src;
  @Input() message;
  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
