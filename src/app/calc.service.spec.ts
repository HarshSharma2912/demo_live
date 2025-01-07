import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service"

 describe("calService", ()=>{


  let shared;
  let calc:any;

  beforeEach(()=>{
    // shared = new SharedService();
    // calc = new CalcService(shared);


    shared = jasmine.createSpyObj("SharedService", ["myShared"]); // constructor will not invoke 

    // TestBed.configureTestingModule({
    //   providers:[CalcService,SharedService]
    // });

    TestBed.configureTestingModule({
      providers:[CalcService,{
        provide:SharedService, useValue:shared   // for spyobject 
      }]
    });

    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
    
  })


  

  it("adition result pass", ()=>{

    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.additionFun(3,2);
    expect(result).toBe(5);
  }) 

  it("multiply result pass", ()=>{

    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.multiply(3,2);
    expect(result).toBe(6);
  }) 

  // it("shared funtionff called", ()=>{
  //   // const shared = new SharedService();
  //   const shared = jasmine.createSpyObj("SharedService", ["myShared"]); // constructor will not invoke 
  //   const calc = new CalcService(shared);
  //   // spyOn(shared, "myShared");
  //   const result = calc.additionFun(3,6);
  //   // expect(shared.myShared).toHaveBeenCalled();
  //   expect(result).toBe(9);

  // })
 })