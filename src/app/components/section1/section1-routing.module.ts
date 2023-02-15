import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section1Component } from './section1.component';

const routes: Routes = [
    {
        path: '',
        component: Section1Component
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Section1RoutingModule { }