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
  content:any = ""
  saved:boolean = false
  /*
  styleRed:string = "red"
  styleBlue:string = "blue"
  focused:boolean = false
  */
  style:string= "blue"

  constructor() { }

  getValor(){
    return 10;
  }

  setVoted(){
    this.voted = (this.voted ? false : true)
  }

  getState(){
    return this.voted
  }

  clickedButton(){
    alert('botao clicado')
  }

  textChanged(data){
    this.content = data
    this.saved = false
  }

  saveValue(){
    this.saved = true
  }

  onFocused(){
    this.style = (this.style === "blue" ? "red" : "blue")
  }

  ngOnInit() {
  }

}
