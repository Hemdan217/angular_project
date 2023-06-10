import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserApiService } from '../user-api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userRegister: FormGroup;
  schema: any;
  s: any;
  constructor(private fb: FormBuilder, private userService: UserApiService) {
    this.userRegister = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.s = Swal.mixin({
      toast: true,

      position: 'top-right',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });
  }
  register() {
    // console.log(this.userRegister.value);
    delete this.userRegister.value['confirmPassword'];
    // console.log(this.userRegister.value);

    // console.log(this.userRegister.controls['confirmPassword']?.value);
    this.userService
      .getUser(this.userRegister.value.email)
      .subscribe((data) => {
        if (data[0]?.email == this.userRegister.value.email) {
          console.log(data);
          this.s.fire({
            title: 'User registration Failed, This Email already exists',
            icon: 'error',
          });
        } else {
          this.userService
            .register(this.userRegister.value)
            .subscribe((data) => {
              this.s.fire({
                title: 'User Registration Done',
                icon: 'success',
              });
            });
        }
      });
  }
  ngOnInit(): void {
    this.schema = [
      {
        name: 'fullName',
        type: 'text',
      },
      {
        name: 'email',
        type: 'email',
      },
      {
        name: 'password',
        type: 'password',
      },
      {
        name: 'confirmPassword',
        type: 'password',
      },
    ];
  }
}
// fullName() {
//   return this.userRegister.get('fullName');
// }
// email() {
//   return this.userRegister.get('email');
// }

// password() {
//   return this.userRegister.get('password');
// }
// confirmPassword() {
//   return this.userRegister.get('confirmPassword');
// }
// address() {
//   return this.userRegister.get('address') as FormArray;
// }
