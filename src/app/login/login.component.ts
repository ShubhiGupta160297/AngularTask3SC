import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usrname : any;
  pswrd : any;
  constructor(private fb : FormBuilder, private regService : CommonService,private route :Router) { }
loginForm = this.fb.group({
 userName : ['',Validators.required],
 password : ['',Validators.required]
});

onSubmit(){
  
  this.regService.validateUser(this.loginForm.value).subscribe((response: any) =>{
    if (response){
      response.forEach(element => {
        if(element.userName == this.loginForm.controls.userName.value &&
          element.password == this.loginForm.controls.password.value ){
           
          this.usrname = this.loginForm.controls.userName.value;
          this.pswrd = this.loginForm.controls.password.value;
          }
        
      });
     if (this.usrname == this.loginForm.controls.userName.value && 
      this.pswrd == this.loginForm.controls.password.value) {
        console.log("succesfully login Username :", this.usrname , " ,password :", this.pswrd);
       this.route.navigateByUrl('/home');
      }
      else{
        console.log("Invalid User");
       }
    }

    
    
  }
  )
}
  ngOnInit(): void {
  }

}
