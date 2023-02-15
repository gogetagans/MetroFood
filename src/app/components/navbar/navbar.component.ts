import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatListModule, MatDividerModule, MatButtonModule, MatMenuModule]
})
export class NavbarComponent implements OnInit {
  smallSize = 600;
  constructor(private router: Router) { }

  onClickNav(sectionNumber: number): void {
    this.router.navigate([`section${sectionNumber}`])
  }

  ngOnInit(): void {
  }
}
