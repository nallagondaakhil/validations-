import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register: FormGroup;


  constructor(private fB: FormBuilder) { 

    this.register = this.fB.group({
      firstname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{3,20}/)]],
      lastname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{3,20}/)]],
      emailid: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{3,20}/)]],

  });
  }

  ngOnInit() {
      
  }

  submit(){
    console.log(this.register);
  }
//   btnClick= function () {
//     this.router.navigateByUrl('login');
// };

}