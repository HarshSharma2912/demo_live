import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private sharedService: SharedService) { }

   additionFun(a:any, b: any){
    this.sharedService.myShared();
    return a+b;
   }


   multiply(a:any, b: any){
    this.sharedService.myShared();
    return a*b;
   }
}
