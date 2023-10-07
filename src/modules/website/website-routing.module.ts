import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { APP_ROUTES } from '../../app/routes.config';

const routes: Routes = [
  {
    path: APP_ROUTES.WEBSITE.HOME,
    component: LandingPageComponent
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
