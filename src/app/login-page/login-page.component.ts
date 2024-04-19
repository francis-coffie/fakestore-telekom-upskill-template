import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router){}
  errorMessage = "";
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })


    onSubmit(event: SubmitEvent) {
      event.preventDefault()
      const formData = {
        username: this.loginForm.value.username!,
        password: this.loginForm.value.password!
      }
      console.log("data", formData);
      
      this.authService.login(formData).subscribe({
        next: (value) => {
            localStorage.setItem( "token", JSON.stringify(value))
            this.router.navigate([""])
        },
        
        error: (err) => {
            this.errorMessage = err.error
        },
      })
    }
  }

