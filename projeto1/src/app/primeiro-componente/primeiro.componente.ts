import { Component } from '@angular/core';

@Component({
    selector: 'primeiro-componente',
    template: `
        <input (keypress) = "changeFunction()"/>
        <h1>{{value}}</h1>
    `
})

export class PrimeiroComponente {
    value:number = 0

    changeFunction(){
        this.value = this.value + 1;
    }
}