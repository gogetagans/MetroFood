import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        HomeRoutingModule,
        NavbarComponent,
        MatProgressSpinnerModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }