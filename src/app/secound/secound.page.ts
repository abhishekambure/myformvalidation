import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secound',
  templateUrl: './secound.page.html',
  styleUrls: ['./secound.page.scss'],
})
export class SecoundPage implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }
  user:any={};
   userSubmitted:boolean;
   passwordMatch:boolean;

  btnClick2= function () {

    this.router.navigateByUrl('/thirdpage');
  };

  goBack(){
    this.router.navigateByUrl('/home')
  }

  mustmatch(){
    console.log("ooooo");

    if(this.f.password.value === this.f.confirmpassword.value){
      console.log("abhi",this.f.confirmpassword.value );
      this.passwordMatch=true;
      
    }else
    {
      this.passwordMatch=false;
      console.log("ani", "Not found" );
      alert("password must match")
    }
  }

  ngOnInit() {
  }
  Validation= this.fb.group({
  firstname:new FormControl('',Validators.required),
  lastname:new FormControl('',Validators.required),
  username : new FormControl('',Validators.required),
  password :new FormControl('',Validators.required),
  confirmpassword : new FormControl('',Validators.required)
  });

  get f()
  {
    return this.Validation.controls;
  }


  Submitform(){
    this.userSubmitted = true;
    if(this.f.firstname.valid && this.f.lastname.valid && this.f.username.valid && this.f.password && this.f.confirmpassword){
      
      this.mustmatch();

      if(this.passwordMatch)
      {
        this.user=Object.assign(this.user,this.Validation.value)
        // this.user=Object.assign(this.user,this.Validation.value)
        this.Multiusers(this.user)
      } 
    }
  }

   get firstname(){
    return this.Validation.get('firstname');
  }
 get lastname(){
    return this.Validation.get('lastname');
  }
  get username(){
    return this.Validation.get('username');
  }
  get password(){
    return this.Validation.get('password');
  }
  get confirmpassword(){
    return this.Validation.get('confirmpassword');
  } 



  userdata(){
    this.userSubmitted=true;
    if(this.Validation.valid){
    // console.log(this.Validation.value)
    // this.user=Object.assign(this.user,this.Validation.value)
    // this.Multiusers(this.user)
    this.Submitform();
    this.Validation.reset();
    this.userSubmitted=false;
    }
  }


  Multiusers(user){
    let Array=[];
    if(localStorage.getItem("User")){
      Array=JSON.parse(localStorage.getItem("User"));
      Array=[user,...Array];
    }else{
      Array=[Array]
    }

    localStorage.setItem("User",JSON.stringify(Array))
  }


}
