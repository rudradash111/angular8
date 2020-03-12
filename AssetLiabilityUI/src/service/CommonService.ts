import{Injectable} from "@angular/core";
import {Home} from "../home/Home";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {LoanAndReferenceType} from "../home/LoanAndReferenceType";
@Injectable({
  providedIn:'root'
})
export class CommonService {
  public dataStreamService:Array<Home>=[];
  constructor(private http:HttpClient) {
  }
  loginUrl='http://localhost:8888/rpa/api/v1/login';

  login(username:string,password:string): Observable<any>{
      return   this.http.post<LoanAndReferenceType>(this.loginUrl,
        {
          username:username,
          password:password
        }). pipe( retry(1),
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
}
