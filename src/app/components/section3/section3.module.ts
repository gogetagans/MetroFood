import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1RoutingModule } from './section3-routing.module';
import { Section3Component } from './section3.component';
@NgModule({
    declarations: [
        Section3Component,
    ],
    imports: [
        Section1RoutingModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [Section3Component]
})
export class Section3Module { }