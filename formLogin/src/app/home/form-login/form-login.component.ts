import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent implements OnInit {

  user = {
    userName: "",
    password: ""
  }
  
  shouldShowPassword:boolean = false

  constructor() { }

  ngOnInit() {
  }

  changeShouldShowPassword(){
    this.shouldShowPassword = !this.shouldShowPassword
  }

}
