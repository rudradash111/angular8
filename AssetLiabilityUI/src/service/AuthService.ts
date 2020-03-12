import {Injectable} from "@angular/core";
import {of, throwError} from "rxjs";
import {HomeService} from "../home/home.service";
import {catchError, share} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DialogComponent} from "../dialog/DialogComponent";
//The AuthService checks whether the user is allowed to login.
// It has the method to login & logout the users. Our implementation of the login method
// does not check for anything. It just marks the user as logged in.
@Injectable()
export class AuthService {

  private isloggedIn: boolean;
  private userName:string;

  constructor(private httpClient:HttpClient,private homeService:HomeService,
              private router: Router,public modalService: NgbModal) {
    this.isloggedIn=false;
  }
/*debug from login u will get to know the exicution*/
  login(username: string, password:string) {
    return this.httpClient.post<any>('http://localhost:8888/rpa/api/v1/login',

      {
        userName:username,
        password:password
      },
      { headers: { authorization: this.createBasicAuthToken(username, password) } }). pipe( share(),
      catchError(this.errorHandle)).subscribe(data=>{
      this.isloggedIn=true;
      this.router.navigate( ['home']);
    },error => {
        this.isloggedIn=false;
        this.router.navigate(['login'])
      const modalRef = this.modalService.open(DialogComponent,{backdropClass: 'light-blue-backdrop'});
      modalRef.componentInstance.message = "Please enter Correct UserName And Password" ;

    });

  }

/*login(username: string, password:string) {

    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.
    this.isloggedIn=true;
    this.userName=username;
    return of(this.isloggedIn);
  }
*/
  /*debug from login u will get to know the exicution*/
  isUserLoggedIn(): boolean {
    return this.isloggedIn;//is just checking user is logged in or not
  }
  /*debug from login u will get to know the exicution*/
  isAdminUser():boolean {
    if (this.userName=='Admin') {
      return true;
    }
    return false;
  }
  /*debug from login u will get to know the exicution*/
  logoutUser(): void{
    this.isloggedIn = false;
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

createBasicAuthToken(username: String, password: String) {
  return 'Basic ' + window.btoa(username + ":" + password)
}
}
