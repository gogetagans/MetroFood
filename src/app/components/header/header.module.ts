import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const ANGULAR_MATERIAL_MODULES = [
    MatToolbarModule, MatIconModule
]
@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule, ...ANGULAR_MATERIAL_MODULES
    ],
    exports: [HeaderComponent],
    bootstrap: [HeaderComponent]
})
export class HeaderModule { }