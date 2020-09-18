import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.sass']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() value:number = 0

  @Output() changed = new EventEmitter()

  constructor() { }

  sumValue(){
    this.value = this.value + 1
    this.changed.emit({newValue: this.value, typeOperation: 'sum'})
  }

  subValue(){
    this.value = this.value - 1
    this.changed.emit({newValue: this.value, typeOperation: 'sub'})
  }

  ngOnInit() {
  }

}
