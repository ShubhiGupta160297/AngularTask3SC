import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  constructor(private fb: FormBuilder , private service : CommonService, public dialog :MatDialog ) { }
 userForm = this.fb.group({
   name:['',Validators.required],
   email:['',Validators.required],
   phone:['',Validators.required]
 });

 onSubmit(){
   this.service.createUsers(this.userForm.value).subscribe((response: any) =>{
    console.log("Successfully Created!", response),
    this.userForm.reset();
    this.dialog.open(DialogComponent,{width:'550px'});


  }
   );

 }

  ngOnInit(): void {
  }

}
