import{Injectable} from "@angular/core";
import {Home} from "../home/Home";
@Injectable({
  providedIn:'root'
})
export class CommonService {
  public dataStreamService:Array<Home>=[];
}
