import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  error = '';
  constructor(private fb: FormBuilder,private route: ActivatedRoute,
    private router: Router) { }

   ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
 
    });

}
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;
 

  if (this.loginForm.invalid) {
   
    return;
    }


    this.router.navigate(['/home']);
  
}


}
