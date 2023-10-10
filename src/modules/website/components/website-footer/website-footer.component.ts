import { Component } from '@angular/core';
import { APP_ROUTES } from '../../../../app/routes.config';

@Component({
  selector: 'app-website-footer',
  templateUrl: './website-footer.component.html',
  styleUrls: ['./website-footer.component.scss']
})
export class WebsiteFooterComponent {
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
