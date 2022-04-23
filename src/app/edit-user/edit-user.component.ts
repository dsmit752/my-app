import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {



  userForm = this.fb.group({
    Name: ['', Validators.required],
    userDept: ['', Validators.required],
    userEmail: ['', Validators.required],
    userName: ['', Validators.required],
    userPhone: ['', Validators.required],
    userTitle: ['', Validators.required],
  });

  public mode = 'Add'; //default mode
  private id: any; //user ID
  private user: any; 

  constructor(private fb: FormBuilder, private _myService: UsersService, private router:Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
        if (paramMap.has('_id')){
            this.mode = 'Edit'; /*request had a parameter _id */ 
            this.id = paramMap.get('_id');

           
            this._myService.getUser(this.id).subscribe(
                data => { 
                    //read data and assign to private variable user
                    this.user = data;
                    //populate the contactName and  on the page
                    //notice that this is done through the two-way bindings
                    this.userForm.patchValue({Name: this.user.Name})
                    this.userForm.patchValue({userDept: this.user.userDept})
                    this.userForm.patchValue({userEmail: this.user.userEmail})
                    this.userForm.patchValue({userName: this.user.userName})
                    this.userForm.patchValue({userPhone: this.user.userPhone})
                    this.userForm.patchValue({userTitle: this.user.userTitle})
                },
                err => console.error(err),
                () => console.log('finished loading')
            );
        } 
        else {
            this.mode = 'Add';
            this.id = null; 
        }
    });
}
    


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log("You submitted: " + this.userForm.get("Name").value, + " " + this.userForm.get("userDept").value, + " " + this.userForm.get("userEmail").value, + " " + this.userForm.get("userName").value, + " " + this.userForm.get("userPhone").value, + " " + this.userForm.get("userTitle").value);
    if (this.mode == 'Add')
    this._myService.addUser(this.userForm.get("Name").value, this.userForm.get("userDept").value, this.userForm.get("userEmail").value, this.userForm.get("userName").value, this.userForm.get("userPhone").value, this.userForm.get("userTitle").value);
    if (this.mode == 'Edit')
    this._myService.updateUser(this.id,this.userForm.get("Name").value ,this.userForm.get("userDept").value ,this.userForm.get("userEmail").value ,this.userForm.get("userName").value ,this.userForm.get("userPhone").value, this.userForm.get("userTitle").value);
    this.router.navigate(['/editusers']);
   
  }
}
