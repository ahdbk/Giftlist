import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { APP_ROUTES } from '../../app/routes.config';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';

const routes: Routes = [
  {
    path: APP_ROUTES.WEBSITE.HOME,
    component: LandingPageComponent
  },
  {
    path: APP_ROUTES.WEBSITE.TERMS,
    component: TermsPageComponent
  },
  {
    path: APP_ROUTES.WEBSITE.PRIVACY,
    component: PrivacyPageComponent
  },
  {
    path: APP_ROUTES.WEBSITE.CONTACT,
    component: ContactPageComponent
  },
  {
    path: '',
    redirectTo: APP_ROUTES.WEBSITE.HOME,
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {}
