import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent implements OnInit {
  
  url:string = "https://loiane.training/"
  voted:boolean = false
  urlImage:string = "http://lorempixel.com/400/200/nature"
  
  constructor() { }

  getValor(){
    return 10;
  }

  setVoted(){
    this.voted = true
  }

  getState(){
    return this.voted
  }

  ngOnInit() {
  }

}
