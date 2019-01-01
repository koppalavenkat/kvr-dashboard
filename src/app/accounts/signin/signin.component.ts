import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.email = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }


  login(form : any): void {
    this.router.navigateByUrl('/dashboard');
  }
}
