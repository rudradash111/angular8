import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AssetLiability} from './AssetLiability';

import {Observable, throwError} from 'rxjs';
import {catchError, retry, share} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AssetLibilityService {

  submitted = false;
  constructor(private http: HttpClient) {
  }

  // save(assetLiability: AssetLiability) {
  //   // return this.http.post(`${this.baseUrl}`, this.assetLiability);
  //   this.http.post<AssetLiability>('http://localhost:8888/rpa/api/v1/save',
  //     {
  //       marketSecurityAccount: assetLiability.marketSecurityAccount,
  //       liveStock: assetLiability.liveStock,
  //       investmentGrowingCrops: assetLiability.investmentGrowingCrops,
  //       investment: assetLiability.investment,
  //       accountReceivable: assetLiability.accountReceivable,
  //       realestate: assetLiability.realestate,
  //       fdAccount: assetLiability.fdAccount,
  //       savingAccount: assetLiability.savingAccount,
  //       checkingAccount: assetLiability.checkingAccount,
  //       longTermLiability:assetLiability.longTermLiability,
  //       intermediateAsset:assetLiability.intermediateAsset,
  //       obj:assetLiability.obj,
  //       leaseObligation:assetLiability.LeaseObligation,
  //       creditCards:assetLiability.creditCards,
  //       accruedInterest:assetLiability.accruedInterest,
  //       rentalLease:assetLiability.rentalLease,
  //       incomeTaxSecurity:assetLiability.incomeTaxSecurity,
  //       taxAndProperty: assetLiability.taxAndProperty,
  //       ccc:assetLiability.ccc,
  //       localCoopHerbicide: assetLiability.localCoopHerbicide,
  //       fertilizerOne:assetLiability.fertilizerOne,
  //       fertilizerTwo:assetLiability.fertilizerTwo,
  //       currentLiabilitySchedules:assetLiability.currentLiabilitySchedules,
  //       totalCurrentLiabilityAmount:assetLiability.totalCurrentLiabilityAmount,
  //       intermidiateLiabilityAmount:assetLiability.intermidiateLiabilityAmount,
  //       supplies:assetLiability.supplies,
  //       ownerEquityAmount:assetLiability.ownerEquityAmount,
  //     }).subscribe(data => {
  //     console.log(JSON.stringify(assetLiability));
  //
  //     return ' ';
  //   })
  //   // }
  // }
  save(assetLiability: AssetLiability) {
      return this.http.post<any>('http://localhost:8888/rpa/api/v1/createRegistration',
        {


        }). pipe( retry(1),
        catchError(this.errorHandle))
       }

  errorHandle(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
