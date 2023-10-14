import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from '../config/routes.config';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../modules/website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: APP_ROUTES.WIZARD.LANDING,
    loadChildren: () =>
      import('../modules/giftlist-wizard/giftlist-wizard.module').then(
        m => m.GiftlistWizardModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
