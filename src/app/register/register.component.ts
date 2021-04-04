import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { CommonService } from '../service/common.service';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder , private regService : CommonService) { }
  registrationForm = this.fb.group({
    userName : ['', Validators.required],
    password : [''],
    confirmPassword : ['']
  } , {validator: PasswordValidator});


    
  onSubmit(){
    console.log(this.registrationForm.value);
    this.regService.register(this.registrationForm.value).subscribe(
      (response :any ) => {console.log("Success!", response)
    this.registrationForm.reset()}
    
    )
  }
  ngOnInit(): void {
  }

}
