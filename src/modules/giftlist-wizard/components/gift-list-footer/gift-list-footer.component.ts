import { Component } from '@angular/core';
import {APP_ROUTES} from "../../../../config/routes.config";

@Component({
  selector: 'app-gift-list-footer',
  templateUrl: './gift-list-footer.component.html',
  styleUrls: ['./gift-list-footer.component.scss']
})
export class GiftListFooterComponent {
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
