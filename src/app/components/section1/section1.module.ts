import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Section1Component } from './section1.component';
import { Section1RoutingModule } from './section1-routing.module';
import { ListComponent } from '@shared/list/list.component';
import { SearchBarModule } from '@shared/searchbar/searchbar.module';

@NgModule({
    declarations: [
        Section1Component,
    ],
    imports: [
        CommonModule,
        Section1RoutingModule,
        ListComponent,
        SearchBarModule
    ],
    providers: [],
    bootstrap: [Section1Component]
})
export class Section1Module { }