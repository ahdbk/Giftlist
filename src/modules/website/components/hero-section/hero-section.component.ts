import { Component } from '@angular/core';
import { APP_ROUTES } from '../../../../config/routes.config';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  get wizardLandingPageUrl() {
    return APP_ROUTES.GIFTLIST.LANDING;
  }
}
