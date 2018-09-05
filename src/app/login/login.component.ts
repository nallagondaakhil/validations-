import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  register: FormGroup;


  constructor(private fB: FormBuilder) { 

    this.register = this.fB.group({
      emailid: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{3,20}/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}/)]],
  });
  }

  ngOnInit() {
      
  }

  submit(){
    console.log(this.register);
  }
  btnClick= function () {
    this.router.navigateByUrl('login');
};

}