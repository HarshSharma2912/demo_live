import { TestBed } from "@angular/core/testing"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { ApiService } from "./api.service";

 


 describe("apiService",()=>{

  let apiService: ApiService;
  let testingControler : HttpTestingController;
  


  beforeEach(()=>{

      // TestBed.configureTestingModule({
        // providers : [ApiService]
      // })

    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]  // we do not want to invoke actual httpclient request
    })

    apiService = TestBed.inject(ApiService);

  });


  it("should be created", ()=>{
  
    expect(apiService).toBeTruthy();
  })
  
  it("api service called", ()=>{
    
  })
 })