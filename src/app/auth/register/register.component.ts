import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
 
  Validators,
  AbstractControl,
  ValidationErrors,ValidatorFn 
} from '@angular/forms';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        fullName: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required, this.emailValidator()]),
        password: this.fb.control('', [Validators.required, this.minLength(5)]),
        confirmPassword: this.fb.control('', [Validators.required]),
      },
      { validators: [this.passwordMatch, ] }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    
    this.toastr.success('Successfully Registered', 'Shopify Registration', {
      timeOut: 3000
    });
    this.router.navigate(['/auth/login']);
    
  }
 
  minLength(length) {
    return function (control: AbstractControl): ValidationErrors {
      if (control.value.length) {
        if (control.value.length < length) {
          return {
            minimumlength: {
              actualLength: control.value.length,
              requiredLength: length,
            },
          };
        }
        return null;
      } else {
        return null;
      }
    };
  }
  passwordMatch(control: AbstractControl): ValidationErrors {
    let form = control as FormGroup;
    let password = form.get('password').value;

    let confirmPassword = form.get('confirmPassword').value;
    if (password.errors && !confirmPassword.errors.ConfirmPasswordMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }
    if (password && confirmPassword) {
      if (password != confirmPassword) {
        form.get('confirmPassword').setErrors({ ConfirmPasswordMatch: true });
      } else {
        form.get('confirmPassword').setErrors(null);
      }
    }
  }

 
  emailValidator():ValidatorFn{
   
    return (control: AbstractControl) => {  
      let c = control as FormGroup;
      let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);  
      if (isValid) {  
       return null;  
      } else {  
       return {  
        emailvalidator: {  
         valid: false  
        }  
       };  
      }  
     }  
    }  

}
