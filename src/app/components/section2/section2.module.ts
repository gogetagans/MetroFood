import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Section1RoutingModule } from './section2-routing.module';
import { Section2Component } from './section2.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        Section2Component,
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        Section1RoutingModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [Section2Component]
})
export class Section2Module { }