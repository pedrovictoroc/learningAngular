import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.sass']
})
export class MeuFormComponent implements OnInit {
  twoWayDataBindingContent:string = ""
  user:any = {
    name: 'Pedro',
    age: 19
  }
  
  constructor() { }

  ngOnInit() {
  }

}
