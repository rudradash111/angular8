import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./AuthService";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DialogComponent} from "../dialog/DialogComponent";
import {RegistrationModalComponent} from "../dialog/registrationModalComponent";
import {SecurityDialogComponent} from "../dialog/security-dialog.component";
/*providedIn tells Angular that the root injector is responsible for
 creating an instance of the your Service. Services that are provided this
 way are automatically made
 available to the entire application and don't need to be listed in any module.*/

// we build a CanActivate guard, which will check whether the users are logged
// in or not. If users are not logged in, then they are redirected to the login page.
@Injectable({
  providedIn:'root'
})
/*debug from login u will get to know the exicution*/
export class ActiveGuardServiceCanActive implements CanActivate{
constructor(private router:Router ,private authService:AuthService,public modalService: NgbModal) {}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean|UrlTree  {


      if (!this.authService.isUserLoggedIn()) {
        this.modalService.open(SecurityDialogComponent);
        this.router.navigate(["/login"]);
        // this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
        return false;

        //var urlTree = this.router.createUrlTree(['login']);
        //return urlTree;
      }

      return true;
    }
}
