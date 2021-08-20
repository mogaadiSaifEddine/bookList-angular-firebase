import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  ,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMsg =''
  signUpForm = new FormGroup({
   email : new FormControl('') , password : new FormControl('')
  })
  constructor(private formBuilder : FormBuilder , 
    private authService : AuthService , 
    private router : Router) { }

  ngOnInit(): void {
     this.initform()
  }
  initform (){
    this.signUpForm=this.formBuilder.group({
      email :   [''  , [Validators.required , Validators.email]],  password: [''  , [Validators.required , Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }
  onSubmit(){
    const email  = this.signUpForm.get('email')?.value
    const password  = this.signUpForm.get('password')?.value
   console.log(email, password , 'lkkdv') ;
    this.authService.signUp(email , password).then(( )=>{console.log('object');
      this.router.navigate(['/books'])

    } ,
    (err)=>{
      this.errorMsg = err
    })

    console.log(this.errorMsg ,'d');
    return email
  }

}
