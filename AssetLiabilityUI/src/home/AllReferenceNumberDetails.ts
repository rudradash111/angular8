import {Component, Inject, OnInit} from "@angular/core";
import {HomeService} from "./home.service";
import {Home} from "./Home";
import {DOCUMENT} from "@angular/common";
import {error} from "@angular/compiler/src/util";
import {DialogComponent} from "../dialog/DialogComponent";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "all-reference",
  templateUrl: "./AllReferenceNumberDetail.html"
})
export class AllReferenceNumberDetails implements OnInit {
  private allReferenceNumber: Array<any> = [];
  isLoad: boolean = false;
  allReferenceNumberObject: Array<Home> = []
  isDisabled: boolean;
  isPopulated: boolean = false;
  private message: any;
  private errorMsg: any;


  constructor(public homeService: HomeService, @Inject(DOCUMENT) private _document: Document) {
  }

  ngOnInit(): void {
    this.homeService.getAllReferenceNumber().subscribe(
      data => {
        this.allReferenceNumber = data
        this.isPopulated=true;
      },
      error => {
        this.message = error;
        // this.dialog.errorModal();
      });
  }

  gotoProductDetails(id: any) {
    this.homeService.getHomeObject(id).subscribe(data => {
        this.allReferenceNumberObject = data;
        this.isDisabled = true;
        this.isPopulated = false;
        this.isLoad = true;
      },
      error => {

        this.errorMsg = error;

      }
    );
  }

  reload(): void {
    this._document.defaultView.location.reload();
  }
}
