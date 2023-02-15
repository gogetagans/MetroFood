import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FOOTERLINKS } from '@models/enums/footer-links.enum';
import { FooterLink } from '@models/interfaces/footer.model';

const ANGULAR_MATERIAL_MODULES = [
  MatToolbarModule
]

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule, ...ANGULAR_MATERIAL_MODULES]
})
export class FooterComponent {

  footerLinks: FooterLink[] = [
    { text: FOOTERLINKS.ABOUT, url: 'http://www.google.es' },
    { text: FOOTERLINKS.CONNECT, url: 'http://www.google.es' },
    { text: FOOTERLINKS.CONTACT, url: 'http://www.google.es' },
    { text: FOOTERLINKS.SUBSCRIBE, url: 'http://www.google.es' }];

  constructor() { }

  onClickLink(url: string): void {
    window.open(url, '_blank');
  }

}
