import {Component, Inject, OnInit} from "@angular/core";
import {Home} from './Home';
import {HomeService} from './home.service';
import {Router} from "@angular/router";
import {CommonService} from "../service/CommonService";
import {Observable, Subject, Subscription} from "rxjs";
import {ConfirmationService} from 'primeng/api';
import {DialogComponent} from "../dialog/DialogComponent";
import {DOCUMENT} from '@angular/common';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class homeComponent implements OnInit {
  homeObject: Home = new Home();
  private dataStream: Array<Home> = [];
  public loanType: any;
  public referenceNumber: string = null;
  public row1: boolean = false;
  private homeObjectArray: Array<Home> = [];
  private isDisabled: boolean = false;
  private isUpdate: boolean = false;
  private isSave: boolean = false;
// private dialog: DialogComponent = new DialogComponent(new NgbActiveModal());
  private errormsg: string = '';
  private showElement: any;

  ngOnInit() {

  }

  constructor(public homeService: HomeService,public router:Router,public modalService: NgbModal,
               public commonService: CommonService,
              private confirmationService: ConfirmationService,
              @Inject(DOCUMENT) private _document: Document)
  {
    this.loanType = '';
    this.referenceNumber = ''

  }

  addRow() {
    this.dataStream.push(this.homeObject);
    console.log(this.dataStream);
    this.homeObject = new Home();
    if (this.dataStream.length > 0) {
      this.row1 = true;
    }
  }

  deleteRow(i) {
    this.dataStream.splice(i, 1);
  }

  sendData() {
    if (this.referenceNumber.length > 0) {

      this.homeService.saveHomeObject(this.dataStream, this.loanType, this.referenceNumber)
        .subscribe(data=>{
            this.commonService.dataStreamService = this.dataStream;
            const modalRef = this.modalService.open(DialogComponent, {backdropClass: 'light-blue-backdrop'});
            modalRef.componentInstance.message = "Record saved Successfully with ReferenceNumber::";
            modalRef.componentInstance.src=this.referenceNumber;
            this.router.navigate(['/create']);
        },
          error => {
            const modalRef = this.modalService.open(DialogComponent,{backdropClass: 'light-blue-backdrop'});
            modalRef.componentInstance.message = "Record not saved successfully with ReferenceNumber::" ;
            modalRef.componentInstance.src=this.referenceNumber;
            },
          ()=>{

          }
        );








    } else {
      // this.dialog.validModal();
    }
  }
/*subscribe mostly used for getting data from obesrevel object who is going to subscribe it*/
  getReferenceNumber(referenceNumber: String) {
    if (referenceNumber.length > 0) {
      this.homeService.getHomeObject(referenceNumber).subscribe(
        data => {
          this.homeObjectArray = data
        },
        error => {
          this.errormsg = error;
          // this.dialog.errorModal();
        },()=>{
          console.log("Observel completed successfully");
        }
        );
      this.isDisabled = true;
      this.isUpdate = true;
      this.isSave = false;

    } else {
      // this.dialog.validModal();
    }
  }
}
