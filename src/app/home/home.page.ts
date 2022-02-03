import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router,private fb: FormBuilder) {}
  static username: any;

  Visited:boolean=false;
  NotVisited:string="";
  Submitted:boolean=false;
  
      profileForm = this.fb.group({
      username: ["",Validators.required],
      password: ["",Validators.required]
    })
    get f(){
      return this.profileForm.controls;
    }

 
  

  btnClick= function () {
    this.router.navigateByUrl('/secound');
  };
 

  checkUserExixts(){
    let formatch:any={}

    if (localStorage.getItem("User")){
      formatch = JSON.parse(localStorage.getItem("User"));

      formatch.forEach((element: any)=> {

        if((element.username === this.f.username.value) && (element.password === this.f.password.value))
        this.Visited=true;
        HomePage.username=element.username;
      })
    }

  }


  loginbtn(){
    this.router.navigateByUrl('/thirdpage');
  }

  WelComeTorus = () => {
    this.Submitted = true;
   
      this.checkUserExixts()
      if (this.Visited){
        this.router.navigateByUrl("/thirdpage")
        this.profileForm.reset();
      } else {
        this.NotVisited = "Username or Password is invalid"
      }
    
  }
}
