import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, Subscription, throwError} from "rxjs";
import {Home} from "./Home";
import {LoanAndReferenceType} from "./LoanAndReferenceType";
import {catchError, retry} from "rxjs/operators";
@Injectable({
  providedIn:"root"
})
export class HomeService {
  private dataStream: Array<Home> = [];
  constructor(private http:HttpClient) {

  }


  getHomeUrl='http://localhost:8888/rpa/api/v1/getHomeObject';
  url='http://localhost:8888/rpa/api/v1/homeSave';
  getReferenceNumber='http://localhost:8888/rpa/api/v1/getAllReferenceNumber';
  saveHomeObject(homeArray: Array<Home> = [],loan,ref) {
    let obj;
  return   this.http.post<LoanAndReferenceType>('http://localhost:8888/rpa/api/v1/homeSave',
      {
        referenceNumber:ref,
        loanType:loan,
        homeList:homeArray

      }). pipe( retry(1),
      catchError(this.errorHandle));
      }
/*Observable return result of http call, to handel error we use catch operetor*/
  /*observel have 3 state next,error,complete
  * in next u will get the value after subscribe it (next by next)
  * if any error u get it will evalute error section
  *
  *
  * */
  getHomeObject(referenceNumber): Observable<Home[]> {
    const params = new HttpParams()
      .set('referenceNumber', referenceNumber);

  return  this.http.get<Home[]>(this.getHomeUrl +  '?referenceNumber='+params.get('referenceNumber')).
  pipe( retry(1),
        catchError(this.errorHandle))


}
getAllReferenceNumber():Observable<any[]>{
    return this.http.get<any[]>(this.getReferenceNumber).
    pipe( retry(1),
          catchError(this.errorHandle));
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



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

}
