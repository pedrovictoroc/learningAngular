import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { OutputPropertiesComponent } from './output-properties.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations:[
        OutputPropertiesComponent
    ],
    exports:[
        OutputPropertiesComponent
    ]
})
export class OutputPropertiesModule{}