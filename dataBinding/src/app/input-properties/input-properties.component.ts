import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.sass']
})
export class InputPropertiesComponent implements OnInit {

  @Input('nome')nomeCurso:string = ""

  constructor(){

  }

  ngOnInit() {
  }

}
