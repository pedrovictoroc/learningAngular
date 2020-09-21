import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.sass']
})
export class FormCadastroComponent implements OnInit {
  
  createUser = {
    userName: "",
    password: "",
    confirmPassword: ""
  }
  
  constructor() { }

  ngOnInit() {
  }

  debug(){
    console.log(this.createUser)
  }
}
