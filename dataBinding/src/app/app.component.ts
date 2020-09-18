import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dataBinding';
  value:number = 5;
  shouldDestroy:boolean = false;

  changeValue(){
    this.value = this.value + 1
  }

  destroyCycle(){
    this.shouldDestroy = !this.shouldDestroy
  }
}
