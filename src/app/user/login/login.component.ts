import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userLogin: FormGroup;
  schema: any;
  s: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserApiService,
    private userAuth: AuthService,
    private router: Router
  ) {
    this.userLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.s = Swal.mixin({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });
  }
  login() {
    const { email, password } = this.userLogin.value;
    this.userService.login(email, password).subscribe((data) => {
      if (!(data[0]?.email == email && data[0]?.password == password)) {
        this.s.fire({
          title: 'Invalid email or password, please try again or register',
          icon: 'error',
        });
      } else {
        this.s.fire({
          title: 'Login Done',
          icon: 'success',
        });
        this.userAuth.userLoggedIn('hemdan', 'lhdjh');
        this.router.navigate(['/products']);
      }
    });
  }
  ngOnInit(): void {
    this.schema = [
      {
        name: 'email',
        type: 'email',
      },
      {
        name: 'password',
        type: 'password',
      },
    ];
  }
}
