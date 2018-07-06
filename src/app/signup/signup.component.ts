import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,ReactiveFormsModule,NgForm } from '@angular/forms';  
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignUpService]
})
export class SignupComponent implements OnInit {
  regiForm: FormGroup;  
  FirstName:string='';  
  LastName:string='';  
  Password:string='';  
  ConfirmPassword:string='';  
  Email:string='';  
  CompanyName:string='';  
  IsAccepted:number=0;  
  savestatus :any={};
  constructor(private fb: FormBuilder,private signUpService:SignUpService) {  
    debugger 
    // To initialize FormGroup  
    this.regiForm = fb.group({  
      'FirstName' : [null, Validators.required],  
      'LastName' : [null, Validators.required],  
      'Password':[null, Validators.required],  
      'ConfirmPassword':[null, Validators.required],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])], 
      'CompanyName':[null, Validators.required],  
      'IsAccepted':[null]  
    });  
  
  }  
  // On Change event of Toggle Button  
  onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  }  
   errorHandleHere(error){
    if(error.status === 401){
      //do error handling, show messages and toasters here
    }
  };

  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    // call any api from service here
    // you can also call the firebase etc as well
    this.signUpService.signUp(form)
    .then(res =>this.savestatus=res, error =>  this.errorHandleHere(error));
  }  

  ngOnInit() {
  }


















}
