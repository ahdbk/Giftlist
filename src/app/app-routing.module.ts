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
    path: APP_ROUTES.GIFTLIST.LANDING,
    loadChildren: () =>
      import('../modules/giftlist-wizard/giftlist.module').then(
        m => m.GiftlistModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
