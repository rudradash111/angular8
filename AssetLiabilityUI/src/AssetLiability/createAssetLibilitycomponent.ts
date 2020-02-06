import {AssetLiability} from './AssetLiability';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AssetLibilityService} from './AssetLibilityService';
import {CommonService} from "../service/CommonService";
import {Home} from "../home/Home";

import {DomainObject} from "./DomainObject";
import {DialogComponent} from "../dialog/DialogComponent";

@Component({
  selector: 'app-create-AssetLiability',
  templateUrl: './createAssetLibility.html',
  styleUrls: ['./creteAssestLibilty.css']
})
export class createAssetLibilitycomponent implements OnInit {
  public homeArray: Array<Home> = [];
  public assetCurrentAsset: Array<Home> = [];
  public assetCurrentLiability: Array<Home> = [];
  public assetIntermediateAsset: Array<Home> = [];
  public liabilityCurrentAsset: Array<Home> = [];
  public liabilityCurrentLiability: Array<Home> = [];
  public liabilityIntermediateAsset: Array<Home> = [];
  assetLiability: AssetLiability = new AssetLiability();
  private isAssetCurrentAsset: boolean;
  private isLiability: boolean;
  private liabilityIntermediateLiability: Array<Home> = [];
  private liabilityLongTermLiability: Array<Home> = [];
  private liabilityLongTermAsset: Array<Home> = [];
  private isAsset: boolean;
  private assetIntermediateLiability: Array<Home> = [];
  private assetLongTermAsset: Array<Home> = [];
  private assetLongTermLiability: Array<Home> = [];
  private dialog: DialogComponent = new DialogComponent();
  constructor(public assetLibilityService: AssetLibilityService,
              public router: Router, public commonService: CommonService) {
  }
  i:number=0;
  private isLiabilityCurrentAsset: boolean;
  ngOnInit() {
    this.homeArray = this.commonService.dataStreamService;
    Object.assign(this.assetCurrentAsset, this.homeArray);
    Object.assign(this.assetCurrentLiability, this.homeArray);
    Object.assign(this.assetIntermediateAsset, this.homeArray);
    Object.assign(this.assetLongTermAsset, this.homeArray);
    Object.assign(this.assetLongTermLiability, this.homeArray);
    Object.assign(this.assetIntermediateLiability, this.homeArray);

    Object.assign(this.liabilityCurrentAsset, this.homeArray);
    Object.assign(this.liabilityCurrentLiability, this.homeArray);
    Object.assign(this.liabilityIntermediateAsset, this.homeArray);
    Object.assign(this.liabilityLongTermLiability, this.homeArray);
    Object.assign(this.liabilityLongTermAsset, this.homeArray);
    Object.assign(this.liabilityIntermediateLiability, this.homeArray);

    this.dialog.showAssetLiabilityModal();


    this.homeArray.forEach((value, index) => {
if(value.assetLiability === "Liability"){
  this.isLiability=true;
}if(value.assetLiability==="Asset"){
        this.isAsset=true;
      }
      if (value.assetLiability === "Liability" && value.assetLiabilityType === "Current Asset") {
        this.isLiabilityCurrentAsset=true;

      } else if (value.assetLiability === "Asset" && value.assetLiabilityType === "Current Asset") {
        this.isAssetCurrentAsset=true;
      }
    });

  }

  addCurrentAsset(i:number,j:number) {
    this.homeArray[i++,j++].currentAsset.push(new DomainObject());
  };


  removeCurrentAsset(j: number,i:number) {
    this.homeArray[i].currentAsset.splice(j, 1);
  }

  submitAssetLiability() {
    this.assetLibilityService.save(this.assetLiability);
    this.dialog.showAssetLiabilityModal();
  }


}
