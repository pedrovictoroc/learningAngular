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

  content:string = ""
  saved:boolean = false
  /*
  styleRed:string = "red"
  styleBlue:string = "blue"
  focused:boolean = false
  */
  style:string= "blue"

  nomeCursos:string[] = ["java crash course","angular for noobs", "JavaScript zero to hero"]

  initialValue:number = 20

  newValue:number = this.initialValue
  type:string = ""

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

  onChangeValue(event){
    this.newValue = event.newValue
    this.type = event.typeOperation

    console.log(this.newValue,this.type) 
  }

  ngOnInit() {
  }

}
