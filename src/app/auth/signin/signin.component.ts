import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm= new FormGroup({
    email : new FormControl('') , 
    password : new FormControl('')
  })

  constructor(private formBuilder : FormBuilder , 
              private authService : AuthService , 
              private route : Router) { }

  ngOnInit(): void {
 this.initForm()
  }
initForm=()=>{
  this.signInForm=this.formBuilder.group({
      email : ['',[Validators.required]] , password : ['' , [Validators.required]]}
  )
}
onSubmit=()=>{

const email = this.signInForm.get('email')?.value
const password = this.signInForm.get('password')?.value
  this.authService.signIn(email , password).then(()=>{this.route.navigate(['/books'])
})
  

}
goSignUp=()=>{
  this.route.navigate(['/auth' , 'signup'])
}

}
