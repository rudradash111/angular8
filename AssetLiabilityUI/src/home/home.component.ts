import {Component, Inject, OnInit} from "@angular/core";
import {Home} from './Home';
import {HomeService} from './home.service';
import {Router} from "@angular/router";
import {CommonService} from "../service/CommonService";
import {Observable, Subject, Subscription} from "rxjs";
import {ConfirmationService} from 'primeng/api';
import {DialogComponent} from "../dialog/DialogComponent";
import {DOCUMENT} from '@angular/common';

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
  private dialog: DialogComponent = new DialogComponent();
  private errormsg: string = '';
  private showElement: any;

  ngOnInit() {

  }

  constructor(public homeService: HomeService,public router:Router,
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
     this.homeService.saveHomeObject(this.dataStream, this.loanType, this.referenceNumber);
      this.commonService.dataStreamService = this.dataStream;
    // this.dialog.showModal(this.referenceNumber);
      // setTimeout(() => {
      //   console.log('showmodal');
      //   this.dialog.showModal(this.referenceNumber);
      // }, 5000);
      this.router.navigate(['/create']);
    } else {
      this.dialog.validModal();
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
          this.dialog.errorModal();
        },()=>{
          console.log("Observel completed successfully");
        }
        );
      this.isDisabled = true;
      this.isUpdate = true;
      this.isSave = false;

    } else {
      this.dialog.validModal();
    }
  }
}
