import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonserviceService } from '../jsonservice.service';
@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.page.html',
  styleUrls: ['./thirdpage.page.scss'],
})
export class ThirdpagePage implements OnInit {
 static DataShow:any;
 
 static ApiStore:any
  constructor(private router: Router,private js:JsonserviceService) { 
    ThirdpagePage.ApiStore=js.Api;
  }
  
  showapiname(){
    return this.js.Api;
  }
  ShowDataToUser(item:any){
    ThirdpagePage.ApiStore.forEach((element:any) => {
      if(element.Name===item){
        ThirdpagePage.DataShow=element.details
    this.router.navigateByUrl('/details');

      }
      
    });
  }
  ngOnInit() {
  }

  

}
