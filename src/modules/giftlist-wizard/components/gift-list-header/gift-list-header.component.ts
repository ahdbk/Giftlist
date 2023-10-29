import { Component } from '@angular/core';
import {APP_ROUTES} from "../../../../config/routes.config";

@Component({
  selector: 'app-gift-list-header',
  templateUrl: './gift-list-header.component.html',
  styleUrls: ['./gift-list-header.component.scss']
})
export class GiftListHeaderComponent {
  get contact() {
    return APP_ROUTES.WEBSITE.CONTACT;
  }
  get home() {
    return APP_ROUTES.WEBSITE.HOME;
  }
}
