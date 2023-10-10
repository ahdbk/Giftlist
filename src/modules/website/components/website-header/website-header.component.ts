import { Component } from '@angular/core';
import { APP_ROUTES } from '../../../../app/routes.config';

@Component({
  selector: 'app-website-header',
  templateUrl: './website-header.component.html',
  styleUrls: ['./website-header.component.scss']
})
export class WebsiteHeaderComponent {
  get contact() {
    return APP_ROUTES.WEBSITE.CONTACT;
  }
  get home() {
    return APP_ROUTES.WEBSITE.HOME;
  }
}
