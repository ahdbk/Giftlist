import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../app/routes.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  get currentYear() {
    return new Date().getFullYear();
  }

  get termsPageUrl() {
    return APP_ROUTES.WEBSITE.TERMS;
  }

  get privacyPageUrl() {
    return APP_ROUTES.WEBSITE.PRIVACY;
  }

  get contactPageUrl() {
    return APP_ROUTES.WEBSITE.CONTACT;
  }
}
